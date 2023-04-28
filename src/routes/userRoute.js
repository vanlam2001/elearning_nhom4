import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

export const userRoute = [
    {
        path: '/',
        component: <Layout Component={HomePage}></Layout>
    },

    {
        path: '/login',
        component: <Layout Component={LoginPage}></Layout>
    },

    {
        path: '/register',
        component: <Layout Component={RegisterPage}></Layout>
    }


]