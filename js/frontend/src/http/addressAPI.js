import { $host } from "./index";

export const createOrderAddress = async (
  idUser,
  city,
  street,
  house,
  apartment
) => {
  const { data } = await $host.post("http://localhost:5000/users-addres", {
    idUser,
    city,
    street,
    house,
    apartment,
  });
  return data;
};

export const fetchOrderAddress = async () => {
  const { data } = await $host.get("http://localhost:5000/users-addres");
  return data;
};
