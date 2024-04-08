import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";
import NotFound from "./views/notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Navigate to= "/home" />
            },
        ]
    },



    {
        path: '/',
        element: <GuestLayout />,
        children:[
            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/register',
                element: <Register />
            },
        ]
    },

   
   


    {
        path: '*',
        element: <NotFound />
    },
])


export default router;