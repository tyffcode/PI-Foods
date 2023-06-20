const { Diets } = require("../../db");

const postDiet = async (name) => {
    const newDiet = await Diets.create(name);
    return newDiet;
};

module.exports = {
    postDiet,
}