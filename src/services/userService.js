import { https } from "./config"

export const userServ = {
    loginUser: (values) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', values);
    }
}