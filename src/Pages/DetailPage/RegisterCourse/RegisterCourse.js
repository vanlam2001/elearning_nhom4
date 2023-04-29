import { message } from 'antd'
import React from 'react'
import { FaBolt, FaGraduationCap, FaClock, FaBook, FaPhotoVideo, FaDatabase } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ButtonV2 from '../../../Components/ButtonV2/ButtonV2'
import { courseService } from '../../../services/couserService'
import { localUserServ } from '../../../services/localService'

import styles from './registerCourse.module.scss'
export default function RegisterCourse({course}) {
  const params = useParams();
  let data = {
    "maKhoaHoc": params.id,
    "taiKhoan": localUserServ.get()?.taiKhoan
  }
  const handleRegister = (data) => {
    if(localUserServ.get()) {
      courseService.postRegisterCourse(data)
      .then((res) => {
        message.success("Đăng kí thành công!")
      })
      .catch((err) => {
        message.error(err.response.data)
      });
    }
    else {
      message.error("Bạn chưa đang nhập")
    }
    
    

  }
  
  return (
    <div className={styles.registerCourse}>
      <div className={styles.imageCourse}>
        <img src={course.hinhAnh} alt="" />
      </div>
      <div className={styles.price}>
        <FaBolt/>
        <span>500.000<sup>đ</sup></span>
      </div>
      <div className={styles.btnRegister}>
        <ButtonV2 onclick={() => {handleRegister(data)}}>Đăng ký</ButtonV2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <p>
              Ghi danh:
              <span> 10 học viên</span>
            </p>
            <FaGraduationCap/>
          </li>
          <li>
            <p>
              Thời gian:
              <span> 18 giờ</span>
            </p>
            <FaClock/>
          </li>
          <li>
            <p>
              Bài học:
              <span> 10</span>
            </p>
            <FaBook/>
          </li>
          <li>
            <p>
              Video:
              <span> 14</span>
            </p>
            <FaPhotoVideo/>
          </li>
          <li>
            <p>
              Trình độ:
              <span> Người mới bắt đầu</span>
            </p>
            <FaDatabase/>
          </li>
        </ul>
      </div>
    </div>
  )
}
