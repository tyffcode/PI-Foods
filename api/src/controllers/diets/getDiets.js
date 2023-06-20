const { Diets } = require("../../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getDiets = async () => {
    let diets = await Diets.findAll();
    if (!diets.length) {
      await axios(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&number=100`
      ).then(async ({ data }) => {
        const aux = data.results.flatMap((element) => element.diets);
        const array = new Set(aux);
        const apiDiets = [...array, "vegetarian"];
        for (let diet of apiDiets) {
          await Diets.create({ name: diet });
        }
      });
    }
    return await Diets.findAll();
};

module.exports = {
  getDiets,
}