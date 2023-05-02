import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input } from 'antd'
import { FaWindowClose } from 'react-icons/fa';
import styles from './formUpdateInfo.module.scss'
import { message } from 'antd'
import { setFormUpdateUser } from '../../../Toolkits/userSlice'
import { userServ } from '../../../services/userService';
import { fetchInfoAccount } from '../InfoUserPage';
export default function FormUpdateInfo() {
  const dispatch = useDispatch()
  const isUpdate = useSelector((state) => state.userSlice.isFormUpdate)
  const infoAccount = useSelector((state) => state.userSlice.infoAccountUser)
  const setFormUpdateOff = () => {
    dispatch(setFormUpdateUser(false))
  }
  const onFinish = (values) => {
    const data = {
      "taiKhoan": infoAccount.taiKhoan,
      "matKhau": values.matKhau,
      "hoTen": values.hoTen,
      "soDT": values.soDT,
      "maLoaiNguoiDung": infoAccount.maLoaiNguoiDung,
      "maNhom": infoAccount.maNhom,
      "email": values.email,
    }
    userServ.putInfoUpdate(data)
      .then((res) => {
        setFormUpdateOff()
        fetchInfoAccount(dispatch)
        message.success('Cập nhật thành công!')
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return isUpdate ? (
    <div className={styles.formUpdate}>
      <div className={styles.formContainer}>
        <div className={styles.titleForm}>
          <h3>Chỉnh sửa thông tin cá nhân</h3>
          <button onClick={setFormUpdateOff} className={styles.closeForm}><FaWindowClose /></button>
        </div>
        <div className={styles.formContent}>
          <Form
            className={styles.formBody}
            name="basic1"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
            requiredMark={false}
          >

            {/* username */}
            <Form.Item
              className={styles.formItem}
              // label="Họ và tên"
              name="hoTen"
              initialValue={infoAccount.hoTen}
              rules={[
                {
                  required: true,
                  message: 'Tên không được để trống!',
                },
                {
                  pattern: /^[a-zA-Z\s]{3,}$/,
                  message: "Tên phải là chữ và ít nhất 3 ký tự!",
                },
              ]}

            >
              <Input placeholder='Họ tên' className={styles.typeInput} />
            </Form.Item>

            {/* passs */}
            <Form.Item
              className={styles.formItem}
              // label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: 'Mật khẩu không được để trống',
                },
                {
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_#?!@$%^&*()-]).{8,}$/,
                  message: "Mật khẩu ít nhất 8 ký tự, ít nhất 1 kí tự, 1 chữ và 1 số!",
                },
              ]}
            >
              <Input.Password placeholder='Mật khẩu' className={styles.typeInput} />
            </Form.Item>

            {/* email */}
            <Form.Item
              className={styles.formItem}
              // label="Email"
              name="email"
              initialValue={infoAccount.email}
              rules={[
                {
                  required: true,
                  message: 'Email không được để trống!',
                },
                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email không hợp lệ!",
                },
              ]}
            >
              <Input placeholder='Email' className={styles.typeInput} />
            </Form.Item>

            {/* phonenumber */}
            <Form.Item
              className={styles.formItem}
              // label="Số điện thoại"
              name="soDT"
              initialValue={infoAccount.soDT}
              rules={[
                {
                  required: true,
                  message: 'Số điện thoại không được để trống!',
                },
                {
                  pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
            >
              <Input placeholder='Số điện thoại' className={styles.typeInput} />
            </Form.Item>

            {/* btn */}
            <Form.Item
              className={styles.formBtn}
              wrapperCol={{
                offset: 0,
                span: 24,
              }}
            >
              <Button type="primary" className={styles.btnUpdate} htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  ) : (<></>)
}
