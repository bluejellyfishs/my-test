import api from './api';

export const getProductsApi = async () => {
  const productsResult = await api.get(`/product`).then((res) => res.data);
  return productsResult;
};

export const getProductByIdApi = async (id) => {
  const productsResult = await api
    .get(`/product/${id}`)
    .then((res) => res.data);

  return productsResult;
};
