import React from 'react'
import styles from './resultSearch.module.scss'
import {
  FaClock, 
  FaRegCalendar, 
  FaSignal,
  FaStar,
} from 'react-icons/fa';
import ButtonV1 from '../../../Components/ButtonV1/ButtonV1';
import { NavLink } from 'react-router-dom';
export default function ResultSearch({listResult}) {
  return (
    <div className={styles.resultSearch}>
      <h4>Hiển thị <span>{listResult.length}</span> kết quả</h4>
      <div className={styles.listResult}>
        {listResult?.map((item) => {
          return (
            <div className={styles.itemResult}>
          <div className={styles.imageCourse}>
            <img src={item.hinhAnh} alt="" />
          </div>
          <div className={styles.courseContent}>
            <h4>{item.tenKhoaHoc}</h4>
            <p className={styles.courseDes}>{item.moTa}</p>
            <div className={styles.iconTime}>
              <div>
                <FaClock/>
                <span>8 giờ</span>
              </div>
              <div>
                <FaRegCalendar/>
                <span>23 giờ</span>
              </div>
              <div>
                <FaSignal/>
                <span>All level</span>
              </div>
            </div>
            <div className={styles.iconStar}>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className={styles.infoMaker}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="" />
              <p>{item.nguoiTao.hoTen}</p>
            </div>
          </div>
          <div className={styles.btnInfo}>
            <NavLink to={`/detail/${item.maKhoaHoc}`}>
              <ButtonV1>Xem chi tiết</ButtonV1>
            </NavLink>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}
