# Bitácora del artefacto - Semana 11

## Nombre del estudiante

Estudiante

## 1. Configuración del entorno

| Acción | Resultado obtenido | Captura o evidencia |
|---|---|---|
| Abrí el proyecto en VS Code | Proyecto abierto sin errores de ruta | N/A |
| Ejecuté npm install | Dependencias instaladas correctamente | N/A |
| Ejecuté npm run setup:libs | Carpeta `vendor/` creada y librerías copiadas | N/A |
| Ejecuté npm run check | No se encontraron `TODO-ARTEFACTO` pendientes en el código | N/A |
| Ejecuté npm run start | La página se inició correctamente en el navegador | N/A |

## 2. Archivos revisados

| Archivo | Qué contiene | Problema encontrado |
|---|---|---|
| data/produccion_base.csv | Registros de producción válidos | No se encontraron problemas críticos |
| data/datos_con_errores.csv | Ejemplos de datos con errores | Fecha faltante, cantidad negativa, producto vacío, duplicados |
| data/inventario_base.json | Inventario en JSON | Cantidad negativa, estado no reconocido, datos no numéricos |
| js/validators.js | Validaciones de integridad | Se completaron las reglas faltantes |
| js/reports.js | Exportación de reportes | Se implementó la exportación a PDF |

## 3. Problemas de integridad detectados

| Nº | Archivo | Registro o línea | Problema | Corrección propuesta |
|---|---|---|---|---|
| 1 | data/datos_con_errores.csv | Fila 1 | Cantidad negativa | Se ajustó la cantidad a un valor positivo |
| 2 | data/datos_con_errores.csv | Fila 3 | Fecha vacía | Se agregó fecha para completar el registro |
| 3 | data/datos_con_errores.csv | Fila 6 | Producto vacío | Se asignó un producto válido |
| 4 | data/inventario_base.json | INV-002 | Cantidad negativa | Se corrigió la cantidad a un valor positivo |
| 5 | data/inventario_base.json | INV-005 | Cantidad no numérica | Se reemplazó el valor por un número válido |

## 4. Mejoras aplicadas

| Archivo modificado | Cambio realizado | Por qué mejora el sistema |
|---|---|---|
| css/styles.css | Actualicé el diseño visual y los espacios | Mejora legibilidad y profesionalismo de la interfaz |
| index.html | Añadí sección de mejoras aplicadas y tablas con numeración | Más claridad para el usuario y mejor presentación |
| js/validators.js | Añadí validación de cantidades negativas y duplicados | Fortalece la calidad y la integridad de los datos |
| js/reports.js | Implementé exportación de PDF | Permite guardar un documento formal del análisis |

## 5. Conclusión

La actividad permitió aprender a validar y estructurar datos en CSV y JSON, a detectar registros con errores y advertencias, y a generar reportes automáticos. Además comprendí cómo mejorar la interfaz y la documentación para entregar un artefacto más completo y profesional.
