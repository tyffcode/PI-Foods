const { getAllRecipes } = require('./getAllRecipes');

const getRecipeByName = async (name) => {
    if (!name) throw new Error("Missing name, can't search");
    name = name.toLowerCase();
    try {
      const allRecipes = await getAllRecipes();
      const recipe = allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(name)
      );
      return recipe;
    } catch (error) {
      return error;
    }
};

module.exports = {
    getRecipeByName,
}