import React from 'react'
import { useSelector } from 'react-redux'
import ItemCourseV1 from '../ItemCourseV1/ItemCourseV1'
import styles from './popularCourse.module.scss'
export default function PopularCourse() {
  const listCourse = useSelector((state => state.courseSlice?.listCourse))
  return (
    <div className={styles.popularCourse}>
      <h2 className={styles.title}>Khóa học phổ biến</h2>
      <div className={styles.list}>
        {listCourse?.slice(10, 14).map((item, index) => {
          return <ItemCourseV1 key={index} item={item} />
        })}
      </div>
    </div>
  )
}
