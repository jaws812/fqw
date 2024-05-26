import { $authHost, $host } from "./index";

//типы

export const createType = async (type) => {
  const { data } = await $authHost.post("http://localhost:5000/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("http://localhost:5000/type");
  return data;
};

//бренды

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("http://localhost:5000/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("http://localhost:5000/brand");
  return data;
};

//товары

export const createProduct = async (device) => {
  const { data } = await $authHost.post(
    "http://localhost:5000/product",
    device
  );
  return data;
};

export const fetchProducts = async () => {
  const { data } = await $host.get("http://localhost:5000/product");
  return data;
};

//один товар

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get("http://localhost:5000/product" + id);
  return data;
};
