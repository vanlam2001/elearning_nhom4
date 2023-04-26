import React from 'react'
import { useSelector } from 'react-redux'
import ItemCourseV2 from '../ItemCourseV2/ItemCourseV2'
import styles from './frontEnd.module.scss'
export default function FrontEndCourse() {
  const listCourse = useSelector((state => state.courseSlice?.listCourse))
  const listFrontEndCourse = listCourse?.filter((item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === 'FrontEnd')
  return (
    <div className={styles.frontendCourse}>
        <h2 className={styles.title}>Khóa học Front End</h2>
        <div className={styles.list}>
            {listFrontEndCourse?.slice(2,6).map((item, index) => {
                return <ItemCourseV2 key={index} item={item}/>
            })}
        </div>
    </div>
  )
}
