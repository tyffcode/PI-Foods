const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerDiets = require('./routerDiets');
const routerRecipes = require('./routerRecipes');

const { login } = require("../controllers/login/login")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/recipes", routerDiets);
router.use("/diets", routerRecipes);

router.get('/login', login);

module.exports = router;
