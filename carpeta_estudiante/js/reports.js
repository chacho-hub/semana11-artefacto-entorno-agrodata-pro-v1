const Reports = (() => {
  function buildPlainTextReport(report) {
    const lines = [];
    lines.push('REPORTE DE INTEGRIDAD - AGRODATA INTEGRIDAD PRO');
    lines.push('=================================================');
    lines.push(`Fecha de generación: ${new Date().toLocaleString()}`);
    lines.push('');
    lines.push(`Total de registros analizados: ${report.summary.total}`);
    lines.push(`Registros válidos: ${report.summary.valid}`);
    lines.push(`Advertencias: ${report.summary.warnings}`);
    lines.push(`Errores: ${report.summary.errors}`);
    lines.push(`Porcentaje de integridad: ${report.summary.integrityRate}%`);
    lines.push('');
    lines.push('PROBLEMAS DETECTADOS:');

    report.issues.forEach((issue, index) => {
      lines.push(`${index + 1}. [${issue.type.toUpperCase()}] ${issue.source} fila ${issue.rowNumber}: ${issue.message}`);
    });

    return lines.join('\n');
  }

  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportTxt(report) {
    downloadFile('reporte_integridad.txt', buildPlainTextReport(report), 'text/plain;charset=utf-8');
  }

  function exportJson(report) {
    downloadFile('reporte_integridad.json', JSON.stringify(report, null, 2), 'application/json;charset=utf-8');
  }

  function exportPdf(report) {
    const { jsPDF } = window.jspdf || window.jspdf || {};
    if (typeof jsPDF !== 'function') {
      Swal.fire({
        icon: 'error',
        title: 'No fue posible generar PDF',
        text: 'La librería jsPDF no está disponible.'
      });
      return;
    }

    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const title = 'Reporte de integridad - AgroData Integridad Pro';
    const generatedAt = new Date(report.generatedAt).toLocaleString();
    const lineHeight = 18;
    let y = 48;

    doc.setFontSize(16);
    doc.text(title, 40, y);

    doc.setFontSize(11);
    y += 28;
    doc.text(`Fecha de generación: ${generatedAt}`, 40, y);
    y += lineHeight;
    doc.text(`Total de registros: ${report.summary.total}`, 40, y);
    y += lineHeight;
    doc.text(`Registros válidos: ${report.summary.valid}`, 40, y);
    y += lineHeight;
    doc.text(`Advertencias: ${report.summary.warnings}`, 40, y);
    y += lineHeight;
    doc.text(`Errores: ${report.summary.errors}`, 40, y);
    y += lineHeight;
    doc.text(`Porcentaje de integridad: ${report.summary.integrityRate}%`, 40, y);

    y += lineHeight * 2;
    doc.setFontSize(12);
    doc.text('Problemas detectados:', 40, y);
    y += lineHeight;

    if (!report.issues.length) {
      doc.text('No se detectaron problemas de integridad.', 40, y);
    } else {
      report.issues.forEach((issue, index) => {
        if (y > 740) {
          doc.addPage();
          y = 40;
        }
        const line = `${index + 1}. [${issue.type.toUpperCase()}] ${issue.source} fila ${issue.rowNumber} - ${issue.message}`;
        doc.text(line, 40, y);
        y += lineHeight;
      });
    }

    doc.save('reporte_integridad.pdf');
  }

  return { buildPlainTextReport, exportTxt, exportJson, exportPdf };
})();
