import React from 'react'
import styles from './reviewStudent.module.scss'
import imgStudent from '../../images/reviewstudent.png'
export default function ReviewStudent() {
  return (
    <div className={styles.reviewStudent}>
        <div className="myContainer">
            <div className={styles.reviewImg}>
            <div className={styles.triangleLeftRight}></div>
                <div className={styles.smallboxLeftTop}></div>
                <div className={styles.smallboxRightTop}></div>
                <div className={styles.smallboxRightBottom}></div>
                <img src={imgStudent} alt="" />
            </div>
            <div className={styles.quote}>
                <blockquote>
                <p>
                    Chương trình giảng dạy được biên soạn dành riêng cho 
                    các bạn Lập trình từ trái ngành hoặc đã có kiến thức 
                    theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa 
                    theo thời gian bởi các thành viên sáng lập và giảng 
                    viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                </p>
                </blockquote>
                <p className={styles.reviewName}>Nhi Dev</p>
                <span>Học viên xuất sắc</span>
            </div>
        </div>
    </div>
  )
}
