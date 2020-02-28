import mockData from './mockData';
import t from './actionTypes';

export const initRootState = {
  recipes: [...mockData],
};

console.log(initRootState.recipes);

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case t.UPDATE_RECIPE: {
      const updatedRecipes = [...state.recipes];
      const recipeIndex = state.recipes.findIndex(({ recipe }) => recipe.id === payload.recipe.id);
      updatedRecipes.splice(recipeIndex, 1, payload);
      return {
        ...state,
        recipes: updatedRecipes,
      };
    }
    case t.ADD_RECIPE: {
      const recipes = [...state.recipes];
      recipes.unshift(payload);
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
