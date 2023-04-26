import React from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './itemCourseV1.module.scss'
export default function ItemCourseV1({item}) {
  return (
    <div className={styles.item}>
      <div className={styles.imageCourse}>
        <img src={item.hinhAnh} alt="" />
        <span>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
      </div>
      <div className={styles.body}>
        <h3>{item.moTa}</h3>
        <div className={styles.titleMaker}>
          <div className={styles.imageMaker}>
            <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="" />
          </div>
          <p className={styles.nameMaker}>Elon Musk</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>
          <p>800.000 <sup>đ</sup></p>
          <p>400.000 <sup>đ</sup></p>
        </div>
        <div className={styles.reviews}>
          <FaStar/>
          <span className={styles.textStar}>4.9</span>
          <span className={styles.quantity}>(7840)</span>
        </div>
      </div>
    </div>
  )
}
