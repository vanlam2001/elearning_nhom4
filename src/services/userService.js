import { https } from "./config"

export const userServ = {
    loginUser: (values) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', values);
    },
    registerUser: (userInfo) => {
        return https.post('/api/QuanLyNguoiDung/DangKy', userInfo);
    },
    getInfoAccountUser: (data) => {
        return https.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', data)
    },
    putInfoUpdate: (data) => {
        return https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    }

}