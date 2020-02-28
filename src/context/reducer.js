import mockData from './mockData';
import t from './actionTypes';

export const initRootState = {
  recipes: [...mockData],
};

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case t.ADD_RECIPE: {
      const recipes = [...state.recipes];
      recipes.unshift(payload);
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
      return {
        ...state,
        recipes,
      };
    }

    case t.DELETE_RECIPE: {
      const recipes = state.recipes.filter(
        ({ recipe: { id } }) => id !== payload,
      );

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
