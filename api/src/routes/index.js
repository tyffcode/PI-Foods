const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipes } = require('../controllers/getRecipes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Buscar recetas por ID
// router.get('/recipes/:id', getRecipes);

// // Buscar todas las recetas
// router.get('/recipes', getAllRecipes)

// //Buscar las recetas por name
// router.get('/recipesName', getRecipeByName);


// //Postear una receta
// router.post('/recipes', postRecipe);

// //buscar dietas
// router.get('/diets', getDiets);

module.exports = router;
