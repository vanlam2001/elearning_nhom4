import BlogPage from "../Components/BlogPage/BlogPage";
import Info from "../Components/Info/Info";
import ListKhoaHoc from "../Components/KhoaHoc/ListKhoaHoc";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import CategoryCoursePage from "../Pages/CategoryCoursePage/CategoryCoursePage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import InfoUserPage from "../Pages/InfoUserPage/InfoUserPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
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

    {
        path: '/user',
        component: <Layout Component={InfoUserPage}></Layout>
    },

    {
        path: '*',
        component: <Layout Component={NotFoundPage}></Layout>
    },

    {
        path: '/info',
        component: <Layout Component={Info}></Layout>
    },




]