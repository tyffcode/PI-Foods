const { getRecipesApi } = require('./getRecipesApi');
const { getRecipesDataBase } = require('./getRecipesDataBase');

const getAllRecipes = async () => {
    try {
      const recipesApi = await getRecipesApi();
      const recipesDb = await getRecipesDataBase();
      const allRecipes = [...recipesDb, ...recipesApi];
      return allRecipes;
    } catch (error) {
      return error;
    }
};

module.exports = {
    getAllRecipes,
}