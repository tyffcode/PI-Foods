const { getAllRecipes } = require('./getAllRecipes');

const getRecipeById = async (id) => {
    try {
      if (!id) throw new Error("Missing data to complete (id)");
      const allRecipes = await getAllRecipes();
      const recipe = allRecipes.filter((recipe) => recipe.id == id);
      return recipe;
    } catch (error) {
      return error;
    }
};

module.exports = {
    getRecipeById,
}



// const { axios } = require("axios");
// const { Recipe } = require("../models/Recipe");

// getRecipeById = async (id, source) => {
//     const recipe = 
//         source === "api" 
//             ? ( await axios.get(`${API_URL}/${id}/information?apikey=${API_KEY}`) ).data
//             : await Recipe.findByPk(id);

//     return recipe;
// };


// module.exports = {
//     getRecipeById,
// }