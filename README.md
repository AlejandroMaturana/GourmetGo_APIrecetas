# 🍳 Buscador de Recetas - Gourmet Go

![Gourmet Go Preview](https://via.placeholder.com/800x400/28a745/ffffff?text=Gourmet+Go+-+Buscador+de+Recetas)

> Una aplicación web moderna que te permite buscar recetas deliciosas por ingrediente utilizando la API de TheMealDB.

## 📋 Descripción

**Gourmet Go** es una aplicación web interactiva que resuelve el problema común de encontrar recetas cuando solo tienes ciertos ingredientes disponibles. Los usuarios pueden simplemente ingresar un ingrediente en la barra de búsqueda y obtener una lista completa de recetas que incluyen ese ingrediente, junto con imágenes, descripciones e instrucciones detalladas.

### Funcionalidades Principales

- 🔍 **Búsqueda por ingrediente**: Encuentra recetas basadas en los ingredientes que tienes disponibles
- 🎨 **Interfaz moderna y responsive**: Diseño atractivo que funciona en todos los dispositivos
- 📱 **Experiencia de usuario fluida**: Búsquedas asíncronas sin recargar la página
- 🖼️ **Visualización de recetas**: Tarjetas con imágenes y descripciones de cada receta
- ⚡ **Rendimiento optimizado**: Carga rápida y manejo eficiente de datos de la API

## 🚀 Demo en Vivo

**[Ver Demo en Vivo](https://tu-usuario.github.io/buscador-recetas)** 👈 Actualiza con tu URL

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos y responsive design
- **JavaScript (ES6+)** - Lógica de la aplicación con sintaxis moderna
- **Bootstrap 5.3.3** - Framework CSS para diseño responsive
- **TheMealDB API** - API REST para obtener datos de recetas
- **Fetch API** - Para realizar peticiones HTTP asíncronas

## 📦 Instalación y Uso

### Prerrequisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Un servidor web local (opcional, puedes abrir el archivo HTML directamente)

### Pasos para ejecutar el proyecto

1. **Clona el repositorio** (o descarga los archivos):
   ```bash
   git clone https://github.com/tu-usuario/buscador-recetas.git
   cd buscador-recetas
   ```

2. **Abre el proyecto**:
   - Opción 1: Abre directamente el archivo `index.html` en tu navegador
   - Opción 2: Usa un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Accede a la aplicación**:
   - Si usaste un servidor local, abre tu navegador en `http://localhost:8000`
   - Si abriste directamente el HTML, el archivo ya debería estar abierto

4. **¡Listo!** Ahora puedes buscar recetas ingresando cualquier ingrediente en la barra de búsqueda.

### Ejemplo de uso

1. Ingresa un ingrediente en el campo de búsqueda (ej: "chicken", "tomato", "pasta")
2. Haz clic en "Encontrar preparaciones" o presiona Enter
3. Explora las recetas que aparecen en la galería
4. Haz clic en "Ver receta" para más detalles (si está implementado)

## 📁 Estructura del Proyecto

```
buscador-recetas/
│
├── index.html          # Página principal
├── Assets/
│   ├── CSS/
│   │   └── style.css   # Estilos personalizados
│   ├── JS/
│   │   └── app.js      # Lógica de la aplicación
│   └── IMG/
│       ├── hero.webp   # Imagen del hero
│       └── st.ico      # Favicon
└── README.md           # Este archivo
```

## 🔧 Características Técnicas

- **Búsqueda asíncrona**: Utiliza `async/await` para manejar las peticiones a la API
- **Manejo de errores**: Gestión adecuada de errores de red y respuestas vacías
- **Renderizado dinámico**: Generación de tarjetas HTML usando template literals
- **Responsive design**: Adaptable a diferentes tamaños de pantalla
- **Optimización de imágenes**: Uso de imágenes WebP para mejor rendimiento

## 📝 Notas Adicionales

- La aplicación utiliza la API pública de [TheMealDB](https://www.themealdb.com/api.php)
- No se requiere autenticación ni API key para usar esta API
- Los datos de las recetas son proporcionados por la comunidad de TheMealDB

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o encuentras algún problema:

1. Abre un issue en el repositorio
2. Crea un fork del proyecto
3. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
4. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👤 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu-email@ejemplo.com

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
