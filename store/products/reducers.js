import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';

export const initialState = {
  productList: [],
  product: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...{ productList: action.payload.products.productList },
        ...{ product: action.payload.products.product },
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...{
          productList: action.products,
        },
      };

    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        ...{
          product: action.product,
        },
      };

    default:
      return state;
  }
};

export default reducers;
