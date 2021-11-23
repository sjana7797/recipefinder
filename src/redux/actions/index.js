import { FAVOURITE_RECIPE, SET_RECIPES } from "./type";

export function setRecipes(recipes) {
    const action = {
        type: SET_RECIPES,
        recipes,
    };

    return action;
}

export function favouriteRecipe(recipe) {
    const action = {
        type: FAVOURITE_RECIPE,
        recipe,
    };
    return action;
}