import React from 'react'
import { Input, Button, message, Form, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userServ } from '../../services/userService';
import { closeFormSuccess, registerSuccess } from '../../Toolkits/formSuccessSlice';
import { localUserServ } from '../../services/localService';
import { checkEmail, checkFullName, checkPassword, checkPhoneVietNam, checkUserName } from './ValidationForm';


const { Option } = Select;
function RegisterPage() {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const onFinish = async (values) => {
        let info = { ...values, maNhom: 'GP10' };
        let { taiKhoan, matKhau, matKhauNhapLai, hoTen, email, soDt } = info;
        let fetchRegisterUser = async () => {
            let isValidation = checkUserName(taiKhoan) && checkPassword(matKhau, matKhauNhapLai) && checkFullName(hoTen) && checkEmail(email) && checkPhoneVietNam(soDt);
            if (isValidation) {
                try {
                    let response = await userServ.registerUser(values);
                    dispatch((registerSuccess()));
                    localUserServ.set(response.data)
                    message.success("Đăng ký thành công")

                    setTimeout(() => {
                        dispatch((closeFormSuccess()))
                    }, 2000);

                    setTimeout(() => {
                        navigate('/login');
                    }, 300);
                }

                catch (error) {
                    message.error(error.response.data);
                }
            }

        }
        fetchRegisterUser();
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Đăng ký</h1>
                    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={{
                        remember: true,
                    }} action="" className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="username" className="block text-black">Tài khoản</label>
                            <Form.Item name="taiKhoan" rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}>
                                <Input className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" prefix={<UserOutlined />} placeholder="Username" autoFocus />
                            </Form.Item>

                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Mật khẩu</label>
                            <Form.Item name="matKhau" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                                <Input.Password className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" prefix={<LockOutlined />} placeholder="Password" />
                            </Form.Item>

                            <label htmlFor="password" className="block text-black">Nhập lại Mật khẩu</label>
                            <Form.Item name="matKhauNhapLai" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                                <Input.Password className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" prefix={<LockOutlined />} placeholder="Password" />
                            </Form.Item>

                            <label for="HoTen" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nhập Họ Tên:</label>
                            <Form.Item name="hoTen" rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}>
                                <Input className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full' prefix={<UserOutlined />} placeholder="Nhập họ tên" />
                            </Form.Item>

                            <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nhập Email:</label>
                            <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                                <Input className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full' prefix={<MailOutlined />} placeholder="Nhập tài khoản" />
                            </Form.Item>

                            <label for="Phone" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nhập Số Điện Thoại:</label>
                            <Form.Item name="soDt" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                                <Input className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full' prefix={<PhoneOutlined />} placeholder="Nhập số điện thoại" />
                            </Form.Item>



                            <Form.Item name="maNhom" rules={[{ required: true, message: 'Vui chọn mã nhóm!' }]}>
                                <Select placeholder="Chọn mã nhóm">
                                    <Option value="GP01">Mã nhóm 1</Option>
                                    <Option value="GP02">Mã nhóm 2</Option>
                                    <Option value="GP03">Mã nhóm 3</Option>
                                    <Option value="GP04">Mã nhóm 4</Option>
                                    <Option value="GP05">Mã nhóm 5</Option>
                                    <Option value="GP06">Mã nhóm 6</Option>
                                    <Option value="GP07">Mã nhóm 7</Option>
                                    <Option value="GP08">Mã nhóm 8</Option>
                                    <Option value="GP09">Mã nhóm 9</Option>
                                    <Option value="GP010">Mã nhóm 10</Option>
                                </Select>
                            </Form.Item>



                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                                <NavLink to={'/login'}>Bạn đã có tài khoản?</NavLink>
                            </div>
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="flex w-full">
                            <Button type="primary" htmlType="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">Đăng ký</Button>
                        </div>

                    </Form>

                    <div className="flex justify-center items-center mt-6">
                        <a href="/" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <NavLink to={'/'} className="ml-2">Quay về trang chủ</NavLink>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage
