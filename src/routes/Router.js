import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AddReview from "../pages/Reviews/AddReview";
import MyReviews from "../pages/Reviews/MyReviews";
import UpdateReview from "../pages/Reviews/UpdateReview";
import AddService from "../pages/Service/AddService";
import Service from "../pages/Service/Service";
import Services from "../pages/Service/Services";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://food-melodies-server.vercel.app/services')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/serviceDetails/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://food-melodies-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/addReview/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-melodies-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myReviewUpdate/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-melodies-server.vercel.app/getReview/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <div className="my-3 text-center">404 Page Not Found</div>
            }
        ]
    }
]);

export default router;