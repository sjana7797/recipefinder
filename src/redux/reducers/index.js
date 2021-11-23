import { combineReducers } from "redux";
import { FAVOURITE_RECIPE, SET_RECIPES } from "../actions/type";

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.recipes;

        default:
            return state;
    }
}

function favouritesRecipes(state = [], action) {
    switch (action.type) {
        case FAVOURITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favouritesRecipes });

export default rootReducer;