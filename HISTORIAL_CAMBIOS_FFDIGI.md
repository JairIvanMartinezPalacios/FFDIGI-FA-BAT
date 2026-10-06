# Historial de cambios — FFDIGI FA BAT / MTF

Registro consolidado de los cambios, ajustes y requisitos trabajados en esta conversación. Separa lo implementado y validado de lo que quedó como solicitud o pendiente de publicación.

## 1. Propósito y alcance

- La guía BAT se enfocó en el primer diagnóstico de ensamble y encendido: conectividad, alimentación, comunicación y daños físicos observables. BAT no dispone de logs detallados por tarjeta; pruebas más profundas corresponden a MTF/FLA/FLB.
- Se conservaron dos recorridos: BAT para encendido básico y MTF para catálogo de fallas, validaciones, comandos y disposiciones.
- El flujo de diagnóstico se planteó como selección de falla → validaciones → acciones → resultado/disposición, con trazabilidad suficiente para generar un reporte de calidad.

## 2. Estructura, navegación y presentación

- Se desarrolló una página interactiva para BAT y MTF usando como referencia el HTML, el código compartido, la hoja de cálculo FFDG y los materiales de GB200/GB300 proporcionados.
- Se separó y luego se volvió a unificar el código según las iteraciones solicitadas; se incorporaron estilos y scripts en una página HTML autocontenida cuando se pidió.
- Se reorganizó la interfaz para usar el ancho disponible, evitar contenido centrado con espacio desperdiciado y aprovechar mejor la pantalla con navegación lateral.
- La navegación lateral se hizo retraíble. Se trabajaron vistas de catálogo/tablero, tarjetas por estación y filtros/búsqueda para recorrer fallas con mayor rapidez.
- Se retiró el bloque explicativo “Cómo sustituye al Excel”.
- Se rediseñó la cabecera: logotipo NVIDIA a la izquierda, identidad FFDG centrada dentro del área del encabezado, jerarquía más visible y nombres sin duplicación.
- Se añadieron mejoras de interacción: al seleccionar una falla de las tablas, la vista se desplaza a los paneles inferiores de diagnóstico; el diagrama de flujo puede abrirse en una ventana modal.
- Se ajustaron títulos y presentación de los tres paneles inferiores: “Failure Record”, “Troubleshooting Sequence” y “Disposition Flow”, sin numeración y con colores de acento diferenciados. El contenido interno conserva fondo neutro cuando corresponde.
- Se solicitaron y aplicaron iteraciones de color por familia/categoría de falla en el tablero BAT, además de normalización de términos como “Leakage”, “Fans” y “No Boot”.

## 3. Guía BAT y tablero de fallas

- Las fallas BAT se presentaron en formato de tablero visual similar a MTF, organizadas por familias como FRU, Logic, Leak, Fan y No Boot.
- Al elegir una tarjeta de falla BAT, el código seleccionado se carga automáticamente en “Código de Falla”.
- Se incorporó a la guía el flujo BAT No Boot facilitado por el usuario, con estos puntos:
  1. Revisar el enlace entre GPUs mediante cables B2B y Clink entre Biancas.
  2. Revisar ruta principal de hardware: LEDs Standby, cables J21/J22, FP_IO, BD J9 y módulos BMC/HMC; usar consola para descartar una falla funcional antes de concluir daño físico.
  3. Revisar conexión y ensamble del cable J15 PDB/Bianca, pines doblados y puertos; considerar el error de lectura FRU/I2C descrito en la referencia.
  4. Medir salidas J3/J4/J5/J6 antes y después del boot; comprobar impedancia entre Biancas e inspeccionar físicamente la PDB.
  5. Aislar la Bianca derecha desconectando B2B y energizando; inspeccionar componentes si solo giran los ventiladores del lado izquierdo.
  6. Si no hay daño visible, validar con Bianca Golden y comandos de consola.
- La guía no sustituye procedimientos oficiales ni pruebas MTF/FLA/FLB. Las decisiones deben contrastarse con el procedimiento autorizado de la estación.

## 4. Formulario BAT

- Se añadieron opciones de número de parte (P/N): `675-24975-2000-000`, `675-24975-3000-000`, `675-24975-3100-000` y `675-24059-3000-000`.
- Se conservó el serial como captura manual, tras revertir la propuesta de autogenerarlo.
- Se añadió captura de analista por número de empleado, con nombre asociado para el equipo FA:
  - `140784` — Gabriel Medina Ramirez.
  - `140785` — Alexander Cordova Villa.
  - `140783` — Brandon Garcia Olguin.
  - `140787` — Daniel Ornelas Carmona.
  - `140789` — Oscar Tomas Esparza Mendoza.
- Se solicitó una alternativa “Otro” para registrar a un analista adicional.
- Se redistribuyeron los campos para mejorar lectura y reducir amontonamiento.

## 5. Reporte PDF para Calidad

- Se corrigió el flujo de “Generar Reporte Oficial” para imprimir/guardar como PDF desde el navegador con datos del nodo y del análisis RCA.
- Se reorganizó el reporte con jerarquía visual, colores, espacios y secciones más legibles; se añadió marca Ingrasys y el logotipo suministrado.
- Se eliminaron del reporte las explicaciones de procedimiento FA y, específicamente, “Ruta de diagnóstico y decisiones registradas”, porque el documento está dirigido a Calidad.
- Se mantuvieron datos técnicos y de identificación, falla, causa raíz, siguiente acción, evidencias disponibles y firmas.
- La causa raíz se estructuró con opciones funcionales/firmware y daño físico, incluyendo componentes como BMC, HMC, interposer y cables J21/J22 cuando aplican.
- La siguiente acción contempla opciones como Retest/AC y Reparación.
- La firma de diagnóstico muestra el nombre y número de empleado del analista; la firma de Calidad se configuró con el nombre indicado por el usuario: Claudia Itzel Almaza Lopez. Se incluyeron fechas en las firmas.
- El reporte probado quedó distribuido en dos páginas, con encabezado de continuación e inclusión condicional de evidencia fotográfica.

## 6. Adaptabilidad y validación

- Se pidió mantener compatibilidad con móvil, tableta y computadora.
- Se validaron anchos de referencia de 390 px, 768 px y 1440 px; se revisó que el documento no desbordara horizontalmente y que los controles BAT/MTF fueran utilizables.
- Se verificó sintaxis de scripts embebidos, diferencias limpias con `git diff --check` y coherencia entre la copia de trabajo `ffdg_bat.html` y la página del repositorio `pagina ffdg/index.html` en la revisión más reciente.
- Para los cambios de reporte se generó un PDF de prueba temporal de dos páginas y se inspeccionó visualmente; ese archivo de prueba se eliminó después de validar.

## 7. GitHub y publicación

- Se preparó el proyecto para GitHub Pages y se dieron indicaciones para habilitar la visibilidad web.
- A lo largo de la conversación hubo solicitudes de subir cambios y configurar una segunda cuenta/remoto de GitHub.
- **Estado de publicación más reciente conocido:** los ajustes recientes del reporte Ingrasys quedaron validados localmente, pero no se confirmó su publicación en GitHub. El estado observado fue `develop...origin/develop [ahead 2]`, con `pagina ffdg/index.html` modificado y `pagina ffdg/ingrasys-logo.png` sin seguimiento. Por tanto, este registro no afirma que la última versión esté publicada.
- El archivo de trabajo `ffdg_bat.html` y el archivo del repositorio `pagina ffdg/index.html` se mantuvieron como copias equivalentes para la iteración validada.

## 8. Archivos vinculados al trabajo reciente

- `ffdg_bat.html` — copia local usada/abierta en el navegador.
- `pagina ffdg/index.html` — página dentro del repositorio Git.
- `pagina ffdg/ingrasys-logo.png` — recurso de marca para el PDF.
- `ingrasys-logo.png` — copia del recurso junto al HTML local.
- Este historial es informativo; no cambia el estado de Git ni publica archivos.

## 9. Pendiente / límites del registro

- Publicar la última versión en GitHub y verificar el resultado remoto.
- La sincronización automática desde un nuevo Excel FFDG fue solicitada como comportamiento deseado; este historial no confirma una conexión automática permanente a un archivo externo. La actualización depende de cargar/importar el workbook soportado por la página.
- Los nombres, números de empleado, P/N, firmas y recomendaciones deben revisarse contra la lista/procedimiento vigente antes de usar el reporte como documento controlado.

