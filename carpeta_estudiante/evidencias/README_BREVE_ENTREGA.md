# README breve de entrega - AgroData Integridad Pro

## 1. Nombre del estudiante

Estudiante

## 2. Descripción del artefacto

La web AgroData Integridad Pro permite cargar y analizar archivos CSV y JSON del entorno agropecuario, identificar problemas de integridad, mostrar métricas, diagnosticar datos y exportar reportes en TXT, JSON y PDF.

## 3. Tecnologías y librerías utilizadas

| Tecnología o librería | Función |
|---|---|
| HTML | Estructura de la página y contenido visible |
| CSS | Estilos visuales, diseño responsive y mejoras de interfaz |
| JavaScript | Lógica de carga, validación y renderizado de datos |
| PapaParse | Lectura y parseo de archivos CSV en la aplicación |
| Chart.js | Creación de gráfico de integridad de datos |
| SweetAlert2 | Mensajes emergentes para estado de análisis y errores |
| Font Awesome | Iconos visuales en botones y secciones |
| jsPDF | Generación y descarga de reportes PDF |

## 4. Cómo ejecutar el proyecto

```bash
npm install
npm run setup:libs
npm run check
npm run start
```

## 5. Errores encontrados

| Error | Archivo | Solución aplicada |
|---|---|---|
| Cantidad negativa | data/datos_con_errores.csv | Cambié -12 a 12 para normalizar el registro |
| Fecha faltante | data/datos_con_errores.csv | Agregué la fecha 2026-05-27 al registro de Café |
| Producto faltante | data/datos_con_errores.csv | Reemplacé el producto vacío por Sorgo |
| Cantidad no numérica | data/inventario_base.json | Reemplacé "abc" por 12 |
| Estado no reconocido | data/inventario_base.json | Cambié estado "activo" a "disponible" |

## 6. Conclusión

Aprendí a validar datos de imágenes CSV y JSON, detectar registros con errores, advertencias y duplicados, y construir reportes automatizados. También mejoré la interfaz para que el análisis sea más claro y profesional, y garantice que la información procesada cumpla con reglas de integridad.
