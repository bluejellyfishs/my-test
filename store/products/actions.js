export const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  GET_PRODUCT_DETAIL_SUCCESS: 'GET_PRODUCT_DETAIL_SUCCESS',
  GET_PRODUCT_DETAIL_FAILURE: 'GET_PRODUCT_DETAIL_FAILURE',
};

export const getProductsAction = () => {
  return {
    type: actionTypes.GET_PRODUCTS,
  };
};

export const getProductsSuccessAction = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    products,
  };
};

export const getProductsFailureAction = () => {
  return {
    type: actionTypes.GET_PRODUCTS_FAILURE,
  };
};

export const getProductDetailAction = (id) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL,
    id,
  };
};

export const getProductDetailSuccessAction = (product) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
    product,
  };
};

export const getProductDetailFailureAction = () => {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_FAILURE,
  };
};
