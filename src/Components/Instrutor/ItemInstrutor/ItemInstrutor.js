import React from 'react'
import styles from './itemInstrutor.module.scss'
import { FaStar } from 'react-icons/fa';

export default function ItemInstrutor({item}) {
  return (
    <div className={styles.instrutorItem}>
        <div className={styles.instrutorcontent}>
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
            <p className={styles.reviewRole}>{item.reviewRole}</p>
            <p className={styles.reviewMentor}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                {item.reviewMentor}
                </p>
            <p className={styles.reviews}>{item.reviews} Đánh giá</p>
        </div>
    </div>
  )
}
