import React from 'react'
import { FaRegClock, FaRegCalendarAlt, FaSignal, FaTag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './itemCourseV2.module.scss'
export default function ItemCourseV2({item}) {
  return (
    <NavLink to={`/detail/${item.maKhoaHoc}`}>
      <div className={styles.item}>
        <div className={styles.sale}><span>Yêu thích</span></div>
        <div className={styles.imageCourse}>
          <img src={item.hinhAnh} alt="" />
          <span>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
        </div>
        <div className={styles.body}>
          <h3>{item.moTa}</h3>
          <div className={styles.itemIcon}>
            <div><FaRegClock/><span>8 giờ</span></div>
            <div><FaRegCalendarAlt/><span>4 tuần</span></div>
            <div><FaSignal/><span>Tất cả</span></div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.titleMaker}>
            <div className={styles.imageMaker}>
              <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="" />
            </div>
            <p className={styles.nameMaker}>Elon Musk</p>
          </div>
          <div className={styles.price}>
            <p>800.000 <sup>đ</sup></p>
            <p>400.000 <sup>đ</sup><FaTag/></p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
