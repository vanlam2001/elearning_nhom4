import BackEndCourse from "../Components/BackEndCourse/BackEndCourse";
import BlogPage from "../Components/BlogPage/BlogPage";
import FrontEndCourse from "../Components/FrontEndCourse/FrontEndCourse";
import ListCourseHome from "../Components/ListCourseHome/ListCourseHome";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import DetailPage from "../Pages/DetailPage/DetailPage";
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
    },

    {
        path: '/blog',
        component: <Layout Component={BlogPage}></Layout>
    },
    {
        path: '/detail/:id',
        component: <Layout Component={DetailPage}></Layout>
    },

    {
        path: '/khoahoc',
        component: <Layout Component={ListCourseHome}></Layout>
    },

]