require('dotenv').config();
const axios = require("axios");
const {Recipe, Diet}= require("../db");
const {API_KEY, URL} = process.env;


const getRecipes = async (req, res) => {
    
}