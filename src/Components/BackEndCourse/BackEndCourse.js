import React from 'react'
import { useSelector } from 'react-redux'
import ItemCourseV2 from '../ItemCourseV2/ItemCourseV2'
import styles from './backEnd.module.scss'
export default function BackEndCourse() {
  const listCourse = useSelector((state => state.courseSlice?.listCourse))
  const listBackEndCourse = listCourse?.filter((item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'BackEnd')
  return (
    <div className={styles.backtendCourse}>
      <h2 className={styles.title}>Khóa học Back End</h2>
      <div className={styles.list}>
        {listBackEndCourse?.slice(2, 6).map((item, index) => {
          return <ItemCourseV2 key={index} item={item} />
        })}
      </div>
    </div>
  )
}
