import { Routes, Route, Navigate } from "react-router-dom";
// import Shop from '../pages/Shop';
// import Auth from '../pages/Auth';
// import Admin from '../pages/Admin';
// import Basket from '../pages/Basket';
// import DevicePage from '../pages/DevicePage';
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { Context } from "../index";
// import { SHOP_ROUTE } from '../utils/consts';
// import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.Component />}
              key={route.path}
            ></Route>
          );
        })}

      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.Component />}
            key={route.path}
          ></Route>
        );
      })}
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
    // <Routes>
    // <Route path='/' element={<Shop />}  ></Route>
    // <Route path='/shop' element={<Shop />}  ></Route>
    // <Route path='/auth' element={<Auth />}  ></Route>
    // <Route path='/admin' element={<Admin />}  ></Route>
    // <Route path='/basket' element={<Basket />}  ></Route>
    // <Route path='/device' element={<DevicePage />}  ></Route>
    // </Routes>
  );
};

export default AppRouter;
