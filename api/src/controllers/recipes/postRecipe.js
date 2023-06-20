const { Recipe } = require("../../db");

const postRecipe = async (obj) => {
  try {
    if (!obj.name || !obj.summary)
        throw new Error("Mandatory data is missing (name or summary)");
    const created = await Recipe.create(obj);
    return created;
  } catch (error) {
    return error;
  }
};

module.exports = {
  postRecipe,
}