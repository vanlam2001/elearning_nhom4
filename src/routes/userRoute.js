import BackEndCourse from "../Components/BackEndCourse/BackEndCourse";
import BlogPage from "../Components/BlogPage/BlogPage";
import FrontEndCourse from "../Components/FrontEndCourse/FrontEndCourse";
import ListKhoaHoc from "../Components/KhoaHoc/ListKhoaHoc";
import ListCourseHome from "../Components/ListCourseHome/ListCourseHome";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import CategoryCoursePage from "../Pages/CategoryCoursePage/CategoryCoursePage";
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
        component: <Layout Component={ListKhoaHoc}></Layout>
    },

    {
        path: '/categorycourse/:id',
        component: <Layout Component={CategoryCoursePage}></Layout>
    },

]