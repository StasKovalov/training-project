import mockData from './mockData';
import t from './actionTypes';

export const initRootState = {
  allRecipes: [...mockData],
  recipes: [...mockData],
};

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case t.UPDATE_RECIPE: {
      const recipes = state.recipes.filter(
        ({ recipe }) => recipe.id !== payload.recipe.id,
      );
      recipes.unshift(payload);
      return {
        ...state,
        allRecipes: recipes,
        recipes,
      };
    }
    default: {
      return state;
    }
  }
};
