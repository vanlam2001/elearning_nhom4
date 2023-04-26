import { https } from "./config"

export const courseService = {
    getCourseMenu: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    getCourseList: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    }
}