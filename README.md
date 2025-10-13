ICSA - Sitio demo (HTML + CSS + JS)

Descripción

- Sitio estático moderno con secciones solicitadas: La Empresa, Carrusel de clientes, Productos y Servicios y Contacto.
- Solo HTML, CSS y JavaScript (sin dependencias externas).

Archivos

- `index.html` - página principal
- `styles.css` - estilos modernos y responsive
- `script.js` - comportamiento: menú móvil, carrusel, formulario simulado

Cómo probarlo

https://cdcespon.github.io/icsa/


1) Abrir `index.html` directamente en un navegador (doble clic).

2) O servirlo localmente desde PowerShell (recomendado para evitar restricciones de CORS si se extiende):

```powershell
# desde la carpeta 'pirulo' en tu Desktop
cd "C:\Users\ccespon\Desktop\pirulo";
python -m http.server 8000
# luego abrir http://localhost:8000 en tu navegador
```

Notas

- Las imágenes y logos fueron representados con SVG e insignias estilizadas para evitar añadir archivos binarios. Puedes reemplazarlos por tus logos en `index.html` fácilmente.
- El formulario de contacto es un stub (simulado). Si querés integrarlo con un backend o servicio de mail, puedo añadírtelo.

Siguientes pasos sugeridos

- Reemplazar los placeholders de clientes por logos reales (archivos en `assets/`).
- Añadir microinteracciones o animaciones adicionales según branding.
- Conectar el formulario a un endpoint seguro (SMTP o servicio de terceros).
