const axios = require("axios");
const { API_KEY } = process.env;

const getRecipesApi = async () => {
  return await axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&number=100`
    )

    // https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5   // mocky para practicar
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&number=100 // API
    .then((recipes) => {
      const recipesFilter = recipes.data.results.map((recipe) => {
        return {
          id: recipe.id,
          name: recipe.title,
          summary: recipe.summary,
          image: recipe.image,
          healthScore: recipe.healthScore,
          diets: recipe.diets,
          steps: recipe.analyzedInstructions[0]?.steps.map((step) => {
            return {
              step: step.step,
              number: step.number,
            };
          }),
        };
      });
      return recipesFilter;
    })
    .catch((error) => {
      return error.message;
    });
};

module.exports = {
  getRecipesApi,
}