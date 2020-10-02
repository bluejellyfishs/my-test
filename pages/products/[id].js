import React from 'react';
import { END } from 'redux-saga';
import { getProductDetailAction } from '../../store/products/actions';
import { wrapper } from '../../store';

import ProductPage from '../../views/product-page';

const Product = () => {
  return <ProductPage />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    store.dispatch(getProductDetailAction(query.id));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Product;
