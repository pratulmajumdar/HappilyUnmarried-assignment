import { GET_CATEGORIES, GET_CATEGORY_DATA, CATEGORY_NAME } from '../actions/types';

const initialState = {
    categories: [],
    categoryData: [],
    categoryName: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
        return {
            ...state,
            categories: action.payload.category_list
        }
    case GET_CATEGORY_DATA:
        return {
            ...state,
            categoryData: action.payload.products
        }
    case CATEGORY_NAME:
        return {
            ...state,
            categoryName: action.payload
        }
    default:
      return state;
  }
};
