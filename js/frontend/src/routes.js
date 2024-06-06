import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, PAY_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Order from "./pages/Order"
import Pay from "./pages/Pay"

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    // {
    //     path:ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path:BASKET_ROUTE,
    //     Component: Basket
    // },
    {
        path:SHOP_ROUTE,
        Component: Shop
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:ORDER_ROUTE,
        Component: Order
    },
    {
        path:PAY_ROUTE,
        Component: Pay
    },
    {
        path:DEVICE_ROUTE + '/:id',
        Component:DevicePage
    }
]