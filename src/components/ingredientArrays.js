import Ingredient from './Ingredient'

//  array for the base Ingredients
const base1 = new Ingredient("green salad", require('../img/base/green_salad.jpg'), "isVegan");
const base2 = new Ingredient("mixed salad", require('../img/base/mixed_salad.jpg'), "isVegan");
const base3 = new Ingredient("grated carrots", require('../img/base/grated_carrots.jpeg'), "isVegan");
const base4 = new Ingredient("iceberg salad", require('../img/base/iceberg_salad.jpg'), "isVegan");
var baseArray = [base1, base2, base3, base4];
export {baseArray}

//  array for the protein Ingredients
const protein1 = new Ingredient("bacon", require('../img/protein/bacon.jpg'), "isMeat");
const protein2 = new Ingredient("cheese", require('../img/protein/cheese.jpg'), "isVegetarian");
const protein3 = new Ingredient("chicken breast", require('../img/protein/chicken_breast.jpg'), "isMeat");
const protein4 = new Ingredient("cold cuts", require('../img/protein/cold_cuts.jpg'), "isMeat");
const protein5 = new Ingredient("nuts", require('../img/protein/nuts.jpg'), "isVegan");
const protein6 = new Ingredient("salmon filet", require('../img/protein/salmon_filet.jpg'), "isMeat");
var proteinArray = [protein1, protein2, protein3, protein4, protein5, protein6];
export {proteinArray}

//  array for the vitamin Ingredients
const vitamin1 = new Ingredient("avocado", require('../img/vitamin/avocado.jpg'), "isVegan");
const vitamin2 = new Ingredient("carrots", require('../img/vitamin/carrots.jpg'), "isVegan");
const vitamin3 = new Ingredient("cherry tomatoes", require('../img/vitamin/cherry_tomatoes.jpg'), "isVegan");
const vitamin4 = new Ingredient("cucumber", require('../img/vitamin/cucumber.jpg'), "isVegan");
const vitamin5 = new Ingredient("grapefruit", require('../img/vitamin/grapefruit.jpg'), "isVegan");
var vitaminArray = [vitamin1, vitamin2, vitamin3, vitamin4, vitamin5];
export {vitaminArray}

//  array for the sauce Ingredients
const sauce1 = new Ingredient("french dressing", require('../img/sauce/french_dressing.jpg'), "isVegetarian", '1 portion: \n1/2 spoon olive oil \n1/2 spoon milk \n1/2 spoon vinegar \n1/6 spoon mustard \n1/6 spoon mayonnaise \nsalt & pepper');
const sauce2 = new Ingredient("italian dressing", require('../img/sauce/italian_dressing.jpg'), "isVegan", '1 portion: \n1 spoon olive oil \n1 spoon aceto balsamico \nsalt & pepper');
const sauce3 = new Ingredient("japanese dressing", require('../img/sauce/japanese_dressing.jpg'), "isVegan", '1 portion: \n1/2 spoon peanut oil \n1/2 spoon rice vinegar \n1/2 spoon soy sauce \n1/6 spoon sugar');
var sauceArray = [sauce1, sauce2, sauce3];
export {sauceArray}