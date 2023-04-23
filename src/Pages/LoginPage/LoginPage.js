import React from 'react'
import { Input, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default function LoginPage() {
    return (
        <div>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Đăng nhập</h1>
                    <form action="" className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="username" className="block text-black">Tài khoản</label>
                            <FormItem name="taiKhoan" rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}>
                                <Input className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" prefix={<UserOutlined />} placeholder="Username" autoFocus />
                            </FormItem>

                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Mật khẩu</label>
                            <FormItem name="matKhau" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                                <Input.Password className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" prefix={<LockOutlined />} placeholder="Password" />
                            </FormItem>

                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                                <a href="#">Forget Password?</a>
                            </div>
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="flex w-full">
                            <Button type="primary" htmlType="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">Đăng nhập</Button>
                        </div>

                    </form>

                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12" />
                        <p className="md:mx-2 text-sm font-light text-gray-400"> Đăng nhập với mạng xã hội </p>
                        <div style={{ height: '1px' }} className="bg-gray-300 md:block hidden w-4/12" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-7">
                        <div>
                            <button type="primary" className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                        </div>
                        <div>
                            <button type="primary" className="text-center w-full text-white bg-red-500 p-3 duration-300 hover:bg-red-600 rounded-sm ">Google</button>
                        </div>
                    </div>

                    <p className="mt-12 text-xs text-center font-light text-gray-400"> Chưa có tài khoản? <a href="#" className="text-black font-medium"> Đăng ký </a>  </p>

                </div>
            </div>
        </div>
    )
}
