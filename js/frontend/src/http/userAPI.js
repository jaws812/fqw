import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, password)=>{
    const {data} = await $host.post('http://localhost:5000/auth/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email,password)=>{
    const {data} = await $host.post('http://localhost:5000/auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const token = localStorage.getItem("token");
    const decodeToken= jwtDecode(token);
    const { data } = await $authHost.get('http://localhost:5000/auth/check', { params: { 
        email:decodeToken.email,
        id:decodeToken.id,
     }
     });
     

    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}


// это работает но только с определенным пользователем
// export const check = async () => {
//     const { data } = await $authHost.get('/auth/check', {
//       params: {
//         email: 'n@m.r',
//         id: 3,
//       },
//     });
  
//     localStorage.setItem('token', data.token);
//     return jwtDecode(data.token);
//   };


// export const check = async ()=>{
//     const {data} = await $authHost.get('http://localhost:5000/users')
//     localStorage.setItem('token', data.token)
//     return jwtDecode(data.token)
// }

// export const check = async () => {
//     const token = localStorage.getItem('token');
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     };
//     try {
//         const { data } = await $authHost.get('http://localhost:5000/users', config);
//         localStorage.setItem('token', data.token);
//         return jwtDecode(data.token);
//     } catch (error) {
//         console.error(error);
//     }
// }


// export const check = async () => {
//     const token = localStorage.getItem('token');
//     if (token === null) {
//         // Handle the case when the token is null
//         console.error('Token is null');
//         return null;
//     }
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     };
//     try {
//         const { data } = await $authHost.get('http://localhost:5000/auth/auth', config);
//         localStorage.setItem('token', data.token);
//         return jwtDecode(data.token);
//     } catch (error) {
//         console.error(error);
//     }
// }


//'http://localhost:5000/users'