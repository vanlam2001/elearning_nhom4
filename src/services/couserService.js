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


}