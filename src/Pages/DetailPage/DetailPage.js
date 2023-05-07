import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { courseService } from '../../services/couserService';
import styles from './detailPage.module.scss'
import InfoCourse from './InfoCourse/InfoCourse';
import RegisterCourse from './RegisterCourse/RegisterCourse';


export default function DetailPage() {
    const params = useParams();
    const [course, setCourse] = useState({})

    useEffect(() => {
        courseService.getDetailCourse(params.id)
            .then((res) => {
                setCourse(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.detailCourse}>
            <div className={styles.titlePage}>
                <div className="myContainer">
                    <h3>Thông tin khóa học</h3>
                    <p>Tiến lên và không chần chừ !!!</p>
                </div>
            </div>
            <div className="myContainer">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <InfoCourse course={course} />
                    </div>
                    <div className={styles.right}>
                        <RegisterCourse course={course} />
                    </div>
                </div>
            </div>
        </div>
    )
}
