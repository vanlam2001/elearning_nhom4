import React from 'react'
import styles from './NumberCountUp.module.scss'
import student from '../../images/studentsNumber.png'
import timeTable from '../../images/timetableNumber.png'
import hourglass from '../../images/hourglassNumber.png'
import teacher from '../../images/teacherNumber.png'
import CountUp from 'react-countup';

export default function NumberCountUp() {
  return (
    <div className={styles.numberCountUp}>
        <div className="myContainer">
            <dir className={styles.numberContainer}>
                <dir className={styles.numberItem}>
                    <div>
                        <img src={student} alt="" />
                    </div>
                    <div>
                        <span className={styles.textNumber}>
                            <CountUp 
                            end={9000} 
                            duration={3}
                            enableScrollSpy={true}
                            />
                        </span>
                    </div>
                    <p className={styles.textNumberTitle}>Học viên</p>
                </dir>
                <dir className={styles.numberItem}>
                    <div>
                        <img src={timeTable} alt="" />
                    </div>
                    <div>
                        <span className={styles.textNumber}>
                        <CountUp 
                            end={1000} 
                            duration={3}
                            enableScrollSpy={true}
                            />
                        </span>
                    </div>
                    <p className={styles.textNumberTitle}>Khóa học</p>
                </dir>
                <dir className={styles.numberItem}>
                    <div>
                        <img src={hourglass} alt="" />
                    </div>
                    <div>
                        <span className={styles.textNumber}>
                            <CountUp 
                            end={33200} 
                            duration={3}
                            enableScrollSpy={true}
                            />
                        </span>
                    </div>
                    <p className={styles.textNumberTitle}>Giờ học</p>
                </dir>
                <dir className={styles.numberItem}>
                    <div>
                        <img src={teacher} alt="" />
                    </div>
                    <div>
                        <span className={styles.textNumber}>
                            <CountUp 
                            end={400} 
                            duration={3}
                            enableScrollSpy={true}
                            />
                        </span>
                    </div>
                    <p className={styles.textNumberTitle}>Giảng viên</p>
                </dir>
            </dir>
        </div>
    </div>
  )
}
