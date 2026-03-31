# 🍳 Gourmet Go - Buscador de Recetas Inteligente

> Una aplicación web moderna y elegante diseñada para encontrar la receta perfecta utilizando ingredientes a tu disposición. Para este proyecto se ha utilizado la API de [TheMealDB](https://www.themealdb.com/api.php).

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Markup-34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styles-1572B6?logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/ECMAScript6-Logic-yellow?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-UI-purple?logo=bootstrap&logoColor=white)
![API](https://img.shields.io/badge/API-TheMealDB-green)

</div>

---

## 🌟 Características Estrella

Gourmet Go no es solo un buscador; es un ejercicio de **desarrollo full stack** que incorpora:

- 🧠 **Traducción Inteligente (ES→EN)**: Sistema integrado de diccionario para que busques en español ("ajo", "pollo", "zanahoria") y la app traduzca dinámicamente antes de consultar la API.
- 🖼️ **Experiencia Visual Premium**: Galería dinámica con efectos de _zoom_ interactivo y carga optimizada por lotes.
- 🧪 **Lógica Asíncrona Robusta**: Manejo de concurrencia mediante `Promise.all` para la carga inicial de sugerencias y gestión de estados de espera (_spinners_).
- 📱 **Detalle en Modal**: Despliegue de información completa (ingredientes, medidas exactas e instrucciones) sin perder el contexto de la búsqueda principal.
- 🧹 **Normalización de Texto**: Limpieza de acentos y espacios mediante expresiones regulares y normalización Unicode.

---

## 🛠️ Stack Tecnológico

La arquitectura está construida sobre bases modernas para garantizar rendimiento y mantenibilidad:

- **Lógica**: JavaScript (ES6+) con un enfoque modular.
- **Estilos**: CSS3 Moderno (Variables, Animaciones y Grid/Flexbox) + Bootstrap 5.3.
- **Fuentes**: Google Fonts (Poppins) para una tipografía impecable.
- **Consumo de Datos**: Fetch API para comunicación con RESTful API.

---

## 🚀 Instalación y Uso

### Prerrequisitos

Un navegador web moderno es todo lo que necesitas.

### Pasos

1. **Clona el proyecto**:
   ```bash
   git clone https://github.com/AlejandroMaturana/GourmetGo_APIrecetas.git
   ```
2. **Ejecuta la App**:
   Simplemente abre `index.html` en tu navegador favorito.
3. **Usa el Buscador**:
   Ingresa un ingrediente (ej: "pollo" o "ajo") y disfruta de las sugerencias culinarias.

---

## 📂 Estructura del Proyecto

```text
GourmetGo_APIrecetas/
│
├── index.html          # Punto de entrada / Estructura Semántica
├── Assets/
│   ├── CSS/
│   │   └── style.css   # Sistema de diseño y animaciones
│   ├── JS/
│   │   └── app.js      # Lógica de negocio y traducción
│   └── IMG/            # Assets estáticos (Hero + ícono)
└── README.md           # Usted está leyendo acá
```

---

## 👤 Autor

**ManuGL como Alejandro Maturana en la web**

- GitHub: [AlejandroMaturana](https://github.com/AlejandroMaturana)
- LinkedIn: [Perfil Professional](https://www.linkedin.com/in/manuel-a-gonzalez-lozano-bb23a5242)

---

> ⭐ Si este proyecto te resultó útil para aprender o inspirarte, ¡no olvides darle una estrella al repositorio!
