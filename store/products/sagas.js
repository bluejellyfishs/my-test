import { put, takeLatest } from 'redux-saga/effects';

import {
  actionTypes,
  getProductsSuccessAction,
  getProductsFailureAction,
  getProductDetailSuccessAction,
  getProductDetailFailureAction,
} from './actions';
import { getProductsApi, getProductByIdApi } from '../../api/products';

function* getProducts(action) {
  try {
    const productsResult = yield getProductsApi(
      action.lifeTime,
      action.color,
      action.brand,
      action.dia,
      action.lensType
    );
    yield put(getProductsSuccessAction(productsResult));
  } catch (error) {
    yield put(getProductsFailureAction());
  }
}

function* getProduct(action) {
  try {
    const productResult = yield getProductByIdApi(action.id);
    yield put(getProductDetailSuccessAction(productResult));
  } catch (error) {
    yield put(getProductDetailFailureAction());
  }
}

const sagas = [
  takeLatest(actionTypes.GET_PRODUCTS, getProducts),
  takeLatest(actionTypes.GET_PRODUCT_DETAIL, getProduct),
];

export default sagas;
