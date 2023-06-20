const { Diets } = require('../db');

const { getAllRecipes } = require('../controllers/recipes/getAllRecipes');
const { getRecipeByName } = require('../controllers/recipes/getRecipeByName');
const { getRecipesById } = require("../controllers/recipes/getRecipesById");
const { getRecipesApi } = require('../controllers/recipes/getRecipesApi');
const { getRecipesDataBase } = require("../controllers/recipes/getRecipesDataBase");
const { postRecipe } = require('../controllers/recipes/postRecipe');

const { getDiets } = require('../controllers/diets/getDiets');
const { postDiet } = require('../controllers/diets/postDiet');

const getRecipesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getRecipeByName(name);
      res.status(200).json(response);
    } else {
      const response = await getAllRecipes();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesFromApiHandler = async (req, res) => {
  try {
    const response = await getRecipesApi();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesFromDbHandler = async (req, res) => {
  try {
    const response = await getRecipesDataBase();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error("Faltan datos necesarios para buscar (id)");
    const response = await getRecipesById(id);
    if (!response.length) {
      res.status(400).json("No existe la receta con ese id");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postRecipesHandler = async (req, res) => {
  try {
    const { name, summary, healthScore, image, steps, diets } = req.body;
    console.log({ name, summary, healthScore, image, steps, diets });
    const nameCapitalized = name[0].toUpperCase() + name.substring(1);
    const response = await postRecipe({
      name: nameCapitalized,
      summary,
      healthScore,
      image,
      steps,
      diets,
    });
    console.log(response);
    let getFilterDiet = await Diets.findAll({
      where: { name: diets },
    });

    await response.addDiet(getFilterDiet);
    
    return res.status(200).json(response);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDietsHandler = async (req, res) => {
  try {
    const response = await getDiets();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDietsHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await postDiet({ name });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRecipesHandler,
  getRecipesByIdHandler,
  postRecipesHandler,
  getDietsHandler,
  postDietsHandler,
  getRecipesFromApiHandler,
  getRecipesFromDbHandler,
};




// require('dotenv').config();
// const { axios } = require('axios');
// const { Recipe, Diets }= require("../db");
// const { API_KEY } = process.env;

// API_URL = "https://api.spoonacular.com/recipes"

// const { getRecipesById } = require("../controllers/getRecipesById");

// const getRecipeHandler = async (req, res) => {
//     const {id} = req.params;

//     const source = isNaN(id) ? "bdd" : "api";

//     try {
//         const recipe = await getRecipesById(id, source)
//         res.status(200).json(recipe);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// const createRecipeHandler = async (req, res) => {
//     const { name, image, sumary, healthScore, steps } = req.body;
//     try {
//         const newRecipe = await createRecipe(name, image, sumary, healthScore, steps);
//         res.status(201).json(newRecipe);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };