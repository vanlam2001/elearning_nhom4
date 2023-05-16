import { https } from "./config"

export const courseService = {
    getCourseMenu: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    getCourseList: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    },
    getDetailCourse: (id) => {
        return https.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
    },
    postRegisterCourse: (data) => {
        return https.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc', data)
    },
    getCourseMenu: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    getCategoryCourse: (id) => {
        return https.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`)
    },
    postCancelCourse: (data) => {
        return https.post('/api/QuanLyKhoaHoc/HuyGhiDanh', data)
    },
    getListCourseSearch: (value) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${value}&MaNhom=GP01`)
    },
    getListCoursePageSplit: (page) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=12&MaNhom=GP01`)
    }

}