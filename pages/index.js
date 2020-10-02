import React from 'react';
import { END } from 'redux-saga';
import { getProductsAction } from '../store/products/actions';
import { wrapper } from '../store';

import ProductListPage from '../views/product-list-page';

const ProductList = () => {
  return <ProductListPage />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getProductsAction());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default ProductList;
