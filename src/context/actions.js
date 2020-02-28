import t from './actionTypes';

export const addRecipe = (dispatch, payload) => {
  dispatch({ type: t.ADD_RECIPE, payload });
};

export const updateRecipe = (dispatch, payload) => {
  dispatch({ type: t.UPDATE_RECIPE, payload });
};

export const deleteRecipe = (dispatch, payload) => {
  dispatch({ type: t.DELETE_RECIPE, payload });
};
