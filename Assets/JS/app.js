// Elementos
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const resultsCount = document.getElementById("results-count");

// Event Listener for Search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ingredient = normalizeInput(searchInput.value);
  if (ingredient) {
    searchRecipes(ingredient);
  }
});

// Normalizar input (quitar acentos y espacios)
const normalizeInput = (text) => {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// Función para buscar recetas
const searchRecipes = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Por si no se encontraron resultados
    if (!data.meals) {
      renderNoResults();
      return;
    }
    const meals = data.meals;
    // Obtener detalles de cada receta
    const detailedMealsPromises = meals.map(async (meal) => {
      const detailResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      );
      const detailData = await detailResponse.json();
      return detailData.meals[0];
    });
    const detailedMeals = await Promise.all(detailedMealsPromises);
    renderRecipes(detailedMeals);
    
    // Scroll suave a los resultados
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    resultsCount.textContent = "";
    resultsContainer.innerHTML = `<p class="text-center text-danger">Ocurrió un error al buscar recetas. Por favor, intenta de nuevo.</p>`;
  }
};

const renderNoResults = () => {
  resultsCount.textContent = "0 recetas encontradas";
  resultsContainer.innerHTML = `
      <div class="col-12">
        <p class="text-center fs-4">No se encontraron coincidencias. Intenta con otro ingrediente.</p>
      </div>
    `;
};

// Renderizar recetas
const renderRecipes = (meals) => {
  resultsCount.textContent = `${meals.length} receta${meals.length !== 1 ? "s" : ""} encontrada${meals.length !== 1 ? "s" : ""}`;
  resultsContainer.innerHTML = "";
  meals.forEach((meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;

    // Truncar instrucciones para descripción
    const description = strInstructions
      ? strInstructions.slice(0, 250) + "..."
      : "No hay descripción disponible.";

    const recipeCard = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card recipe-card h-100">
          <img
            src="${strMealThumb}"
            class="card-img-top"
            alt="${strMeal}"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text flex-grow-1">
              ${description}
            </p>
            <a href="#" class="btn btn-primary mt-auto">Ver receta →</a>
          </div>
        </div>
      </div>
    `;

    resultsContainer.innerHTML += recipeCard;
  });
};

// Carga inicial de recetas aleatorias
const loadInitialRecipes = async () => {
  try {
    const recipes = [];
    for (let i = 0; i < 6; i++) {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      if (data.meals) recipes.push(data.meals[0]);
    }
    renderRecipes(recipes);
    resultsCount.textContent = "Sugerencias del día";
  } catch (error) {
    console.error("Error loading initial recipes:", error);
  }
};

document.addEventListener("DOMContentLoaded", loadInitialRecipes);
