import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("http://localhost:5000/auth/registration", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("http://localhost:5000/auth/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);

  return jwtDecode(data.token);
};

// export const check = async () => {
//   let token = localStorage.getItem("token");

//   // Проверяем, есть ли уже токен в localStorage
  
//     const decodeToken = jwtDecode(token);
//     console.log("decode token =  ", decodeToken);
//     console.log("token is  =  ", token);
// // eslint-disable-next-line
//     const { data } = await $authHost.get("http://localhost:5000/auth/check", {
//       params: {
//         email: decodeToken.email,
//         id: decodeToken.roles[0].UserRoles.idUser,
//       },
//     });

//     // Сохраняем новый токен в localStorage
//     localStorage.setItem("token", token);
  
//   return jwtDecode(token);
// };

export const check = async () => {
  const token = localStorage.getItem("token");

  const decodeToken = jwtDecode(token);

  console.log("decode token =  ", decodeToken);
  console.log("token is  =  ", token);
  const { data } = await $authHost.get("http://localhost:5000/auth/check", {
    params: {
      email: decodeToken.email,
      id: decodeToken.id, //      id: decodeToken.roles[0].UserRoles.idUser,
    },
  });

  localStorage.setItem("token", data.token);

  return jwtDecode(data.token);
};
