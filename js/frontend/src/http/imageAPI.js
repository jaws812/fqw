import { $host } from "./index";

export const createImage = async (image) => {
  const { data } = await $host.post("http://localhost:5000/image", image);
  return data;
};

export const fetchImage = async () => {
  const { data } = await $host.get("http://localhost:5000/image");
  return data;
};
