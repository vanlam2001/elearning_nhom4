import React, { useEffect, useState } from 'react'
import { FaDesktop } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemCourseV2 from '../../Components/ItemCourseV2/ItemCourseV2';
import { courseService } from '../../services/couserService';
import { setSpinnerOff, setSpinnerOn } from '../../Toolkits/spinnerSlice';
import styles from './categoryCoursePage.module.scss'

export default function CategoryCoursePage() {
    const params = useParams();
    const dispatch = useDispatch();
    const [listCourse, setListCourse] = useState([])
    useEffect(() => {
        dispatch(setSpinnerOn())
        courseService.getCategoryCourse(params.id)
            .then((res) => {
                dispatch(setSpinnerOff())
                setListCourse(res.data)
            })
            .catch((err) => {
                dispatch(setSpinnerOff())
                console.log(err);
            });
    }, [params.id])

    return (
        <div className={styles.categoryCoursePage}>
            <div className="myContainer">
                <div className={styles.categoryTitle}>
                    <div>
                        <FaDesktop />
                        <span>{listCourse[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</span>
                    </div>
                </div>
                <div className={styles.listCourse}>
                    {listCourse?.map((item, index) => {
                        return <ItemCourseV2 key={index} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
