import { $host } from "./index";

export const createCart = async (idProduct) => {
  const { data } = await $host.post("http://localhost:5000/cart", idProduct);
  return data;
};

export const fetchOneCart = async (idUser) => {
  const { data } = await $host.get("http://localhost:5000/cart/"+idUser);
  return data;
};
export const createCartProduct = async (idCart,idProduct) => {
  const { data } = await $host.post("http://localhost:5000/cart-product", {
    idCart,
    idProduct,
  });
  return data;
};

export const fetchCartProduct = async () => {
  const { data } = await $host.get("http://localhost:5000/cart-product");
  return data;
};
