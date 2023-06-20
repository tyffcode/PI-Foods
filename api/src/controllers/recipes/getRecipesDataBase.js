const { Recipe } = require('../../db');

const getRecipesDataBase = async () => {
  try {
    const recipesDb = await Recipe.findAll();
      if (!recipesDb)
        throw new Error("There are no registered users at the moment");
    return recipesDb;
  } catch (error) {
    return error;
  }
};

module.exports = {
    getRecipesDataBase,
}