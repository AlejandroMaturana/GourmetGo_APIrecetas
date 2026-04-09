// Elementos del DOM
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const resultsCount = document.getElementById("results-count");
const loadingSpinner = document.getElementById("loading-spinner");
const recipeModalElement = document.getElementById("recipeModal");
const modalBodyContent = document.getElementById("modal-body-content");
const modalTitle = document.getElementById("recipeModalLabel");

// Instancia del Modal de Bootstrap
let recipeModal = null;
if (recipeModalElement) {
  recipeModal = new bootstrap.Modal(recipeModalElement);
}

// Diccionario de Traduccion (Espanol -> Ingles)
const searchDictionary = {
  // Proteinas
  pollo: "chicken",
  carne: "beef",
  res: "beef",
  cerdo: "pork",
  pescado: "fish",
  salmon: "salmon",
  atun: "tuna",
  tilapia: "tilapia",
  bacalao: "cod",
  mariscos: "seafood",
  huevo: "egg",
  huevos: "egg",
  cordero: "lamb",
  pavo: "turkey",
  pato: "duck",
  jamon: "ham",
  tocino: "bacon",
  bacon: "bacon",
  chorizo: "sausage",
  salchicha: "sausage",
  camaron: "shrimp",
  camarones: "shrimp",
  langosta: "lobster",
  mejillon: "mussel",
  mejillones: "mussel",
  almeja: "clam",
  almejas: "clam",
  calamar: "squid",
  pulpo: "octopus",
  tofu: "tofu",
  tempe: "tempeh",
  seitan: "seitan",

  // Vegetales
  tomate: "tomato",
  ajo: "garlic",
  cebolla: "onion",
  papa: "potato",
  patata: "potato",
  camote: "sweet potato",
  zanahoria: "carrot",
  brocoli: "broccoli",
  coliflor: "cauliflower",
  espinaca: "spinach",
  lechuga: "lettuce",
  repollo: "cabbage",
  col: "cabbage",
  pepino: "cucumber",
  calabaza: "pumpkin",
  calabacin: "zucchini",
  berenjena: "eggplant",
  champinon: "mushroom",
  hongo: "mushroom",
  seta: "mushroom",
  apio: "celery",
  esparrago: "asparagus",
  puerro: "leek",
  alcachofa: "artichoke",
  arveja: "pea",
  guisante: "pea",
  ejote: "green bean",
  habichuela: "green bean",
  judia: "green bean",
  haba: "fava bean",
  maiz: "corn",
  chile: "chili",
  pimiento: "pepper",
  jalapeno: "jalapeno",
  remolacha: "beet",
  betarraga: "beet",
  nabo: "turnip",
  rabano: "radish",
  cebollin: "chive",
  kale: "kale",

  // Frutas
  manzana: "apple",
  platano: "banana",
  banana: "banana",
  limon: "lemon",
  lima: "lime",
  naranja: "orange",
  mandarina: "mandarin",
  toronja: "grapefruit",
  pomelo: "grapefruit",
  fresa: "strawberry",
  frambuesa: "raspberry",
  arandano: "blueberry",
  mora: "blackberry",
  uva: "grape",
  pina: "pineapple",
  mango: "mango",
  melon: "melon",
  sandia: "watermelon",
  papaya: "papaya",
  kiwi: "kiwi",
  pera: "pear",
  durazno: "peach",
  melocoton: "peach",
  ciruela: "plum",
  cereza: "cherry",
  higo: "fig",
  granada: "pomegranate",
  maracuya: "passion fruit",
  guayaba: "guava",
  coco: "coconut",
  palta: "avocado",
  aguacate: "avocado",

  // Hierbas y especias
  cilantro: "cilantro",
  perejil: "parsley",
  albahaca: "basil",
  oregano: "oregano",
  tomillo: "thyme",
  romero: "rosemary",
  laurel: "bay leaf",
  salvia: "sage",
  hierbabuena: "mint",
  menta: "mint",
  jengibre: "ginger",
  curcuma: "turmeric",
  comino: "cumin",
  pimienta: "pepper",
  pimenton: "paprika",
  canela: "cinnamon",
  vainilla: "vanilla",

  // Otros / Carbohidratos
  arroz: "rice",
  pasta: "pasta",
  pan: "bread",
  tortilla: "tortilla",
  harina: "flour",
  avena: "oats",
  quinoa: "quinoa",
  cuscus: "couscous",
  polenta: "polenta",
  masa: "dough",
  leche: "milk",
  yogur: "yogurt",
  yogurt: "yogurt",
  queso: "cheese",
  mantequilla: "butter",
  crema: "cream",
  nata: "cream",
  aceite: "oil",
  azucar: "sugar",
  miel: "honey",
  sal: "salt",
  vinagre: "vinegar",
  mostaza: "mustard",
  mayonesa: "mayonnaise",
  ketchup: "ketchup",
  salsa: "sauce",
  soya: "soy",
  salsa_soya: "soy sauce",
  chocolate: "chocolate",
  cacao: "cocoa",
  cafe: "coffee",
  te: "tea",
  garbanzo: "chickpea",
  garbanzos: "chickpea",
  lenteja: "lentil",
  lentejas: "lentil",
  frijol: "bean",
  frijoles: "bean",
  poroto: "bean",
  porotos: "bean",
  alubia: "bean",
  edamame: "edamame",
  nuez: "walnut",
  nueces: "walnut",
  almendra: "almond",
  almendras: "almond",
  mani: "peanut",
  cacahuate: "peanut",
  pistacho: "pistachio",
  avellana: "hazelnut",
  anacardo: "cashew",
  semilla: "seed",
  semillas: "seeds",
  agua: "water",
};

// Event Listener for Search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const rawInput = searchInput.value;
  const normalizedInput = normalizeInput(rawInput);
  const translatedIngredient = translateIngredient(normalizedInput);

  if (translatedIngredient) {
    searchRecipes(translatedIngredient);
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

// Traducir ingrediente o devolver el original si no está en el diccionario
const translateIngredient = (ingredient) => {
  return searchDictionary[ingredient] || ingredient;
};

// Gestionar estados de carga
const showLoading = () => {
  loadingSpinner.classList.remove("d-none");
  resultsContainer.innerHTML = "";
  resultsCount.textContent = "";
};

const hideLoading = () => {
  loadingSpinner.classList.add("d-none");
};

// Función para buscar recetas
const searchRecipes = async (ingredient) => {
  showLoading();
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.meals) {
      renderNoResults();
      hideLoading();
      return;
    }

    const meals = data.meals;

    // Obtener detalles básicos de cada receta (renderizado rápido inicial)
    // Nota: El endpoint filter.php solo devuelve id, nombre e imagen.
    // Para las instrucciones completas, llamamos a lookup.php individualmente o al abrir el modal.
    // Decidimos llamar a lookup al abrir el modal para mayor eficiencia.
    renderRecipes(meals);

    hideLoading();
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    hideLoading();
    resultsCount.textContent = "";
    resultsContainer.innerHTML = `<p class="text-center text-danger">An error occurred while searching for recipes. Please try again.</p>`;
  }
};

const renderNoResults = () => {
  resultsCount.textContent = "0 recipes found";
  resultsContainer.innerHTML = `
      <div class="col-12">
        <p class="text-center fs-4">No matches found. Try another ingredient.</p>
      </div>
    `;
};

// Renderizar recetas (Versión optimizada con Botón de Modal)
const renderRecipes = (meals) => {
  resultsCount.textContent = `${meals.length} recipe${meals.length !== 1 ? "s" : ""} found`;
  resultsContainer.innerHTML = "";

  meals.forEach((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal;

    const recipeCard = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card recipe-card h-100 shadow-sm border-0">
          <div class="position-relative overflow-hidden">
            <img
              src="${strMealThumb}"
              class="card-img-top card-img-hover"
              alt="${strMeal}"
            />
          </div>
          <div class="card-body d-flex flex-column text-center">
            <h5 class="card-title fw-bold mb-3">${strMeal}</h5>
            <button class="btn btn-success mt-auto ver-receta-btn w-100" data-id="${idMeal}">
              View recipe →
            </button>
          </div>
        </div>
      </div>
    `;

    resultsContainer.innerHTML += recipeCard;
  });

  // Agregar eventos a los botones después de renderizar
  const detailsButtons = document.querySelectorAll(".ver-receta-btn");
  detailsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openRecipeModal(id);
    });
  });
};

// Función para abrir el modal y cargar detalles
const openRecipeModal = async (id) => {
  modalTitle.textContent = "Loading recipe...";
  modalBodyContent.innerHTML = `
    <div class="text-center py-5">
      <div class="spinner-border text-success" role="status"></div>
      <p class="mt-2">Getting culinary secrets...</p>
    </div>
  `;
  recipeModal.show();

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    const meal = data.meals[0];

    if (!meal) throw new Error("Recipe not found");

    modalTitle.textContent = meal.strMeal;

    // Construir lista de ingredientes y medidas
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredientsList += `<li class="list-group-item d-flex justify-content-between align-items-center">
          ${ingredient}
          <span class="badge bg-success rounded-pill">${measure}</span>
        </li>`;
      } else {
        break;
      }
    }

    modalBodyContent.innerHTML = `
      <div class="row g-4">
        <div class="col-md-5">
          <img src="${meal.strMealThumb}" class="img-fluid rounded shadow" alt="${meal.strMeal}">
          <div class="mt-3">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Origin:</strong> ${meal.strArea}</p>
            ${meal.strYoutube ? `<a href="${meal.strYoutube}" target="_blank" class="btn btn-outline-danger btn-sm w-100">Watch on YouTube</a>` : ""}
          </div>
        </div>
        <div class="col-md-7">
          <h6 class="fw-bold mb-3">Ingredients:</h6>
          <ul class="list-group list-group-flush mb-4 scrollable-list" style="max-height: 200px; overflow-y: auto;">
            ${ingredientsList}
          </ul>
          <h6 class="fw-bold mb-3">Instructions:</h6>
          <p class="recipe-instructions" style="white-space: pre-line; line-height: 1.6;">${meal.strInstructions}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error loading modal details:", error);
    modalBodyContent.innerHTML = `<div class="alert alert-danger">Could not load recipe information.</div>`;
  }
};

// Carga inicial de recetas aleatorias
const loadInitialRecipes = async () => {
  try {
    showLoading();
    const recipes = [];
    // Hacemos 6 peticiones en paralelo para mayor velocidad
    const promises = Array.from({ length: 6 }, () =>
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) =>
        res.json(),
      ),
    );
    const results = await Promise.all(promises);
    results.forEach((data) => {
      if (data.meals) recipes.push(data.meals[0]);
    });

    renderRecipes(recipes);
    resultsCount.textContent = "Today's suggestions";
    hideLoading();
  } catch (error) {
    console.error("Error loading initial recipes:", error);
    hideLoading();
  }
};

document.addEventListener("DOMContentLoaded", loadInitialRecipes);
