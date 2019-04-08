//  class Ingredient

function Ingredient (ingredientName, ingredientImage, ingredientFlag, ingredientRecipe){
  this.ingredientName = ingredientName
  this.ingredientImage = ingredientImage
  this.ingredientFlag = ingredientFlag
  this.ingredientRecipe = ingredientRecipe

//  get ingredientName
  Ingredient.prototype.getIngredientName = function(){
    return this.ingredientName;
  }
  
//  get ingredientImage
  Ingredient.prototype.getIngredientImage = function(){
    return this.ingredientImage;
  }

//  get ingredientFlag
  Ingredient.prototype.getIngredientFlag = function(){
    return this.ingredientFlag;
  }

//  get ingredientRecipe
  Ingredient.prototype.getIngredientRecipe = function(){
    return this.ingredientRecipe
  }
}
export default Ingredient

