import mockData from './mockData';
import t from './actionTypes';
import { LOCAL_STORAGE_RECIPES } from '../constants';

export const initRootState = {
  recipes: JSON.parse(localStorage.getItem(LOCAL_STORAGE_RECIPES)) || [...mockData],
};

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case t.ADD_RECIPE: {
      const recipes = [...state.recipes];
      recipes.unshift(payload);
      localStorage.setItem(LOCAL_STORAGE_RECIPES, JSON.stringify(recipes));
      return {
        ...state,
        recipes,
      };
    }
    case t.UPDATE_RECIPE: {
      const recipes = [...state.recipes];
      const recipeIndex = state.recipes.findIndex(
        ({ recipe }) => recipe.id === payload.recipe.id,
      );
      recipes.splice(recipeIndex, 1, payload);
      localStorage.setItem(LOCAL_STORAGE_RECIPES, JSON.stringify(recipes));
      return {
        ...state,
        recipes,
      };
    }

    case t.DELETE_RECIPE: {
      const recipes = state.recipes.filter(
        ({ recipe: { id } }) => id !== payload,
      );
      localStorage.setItem(LOCAL_STORAGE_RECIPES, JSON.stringify(recipes));

      return {
        ...state,
        recipes,
      };
    }
    default: {
      return state;
    }
  }
};
