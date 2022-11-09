import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AddReview from "../pages/Reviews/AddReview";
import MyReviews from "../pages/Reviews/MyReviews";
import AddService from "../pages/Service/AddService";
import Services from "../pages/Service/Services";

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
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/addReview',
                element: <AddReview></AddReview>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
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
                element: <div>404 Page Not Found</div>
            }
        ]
    }
]);

export default router;