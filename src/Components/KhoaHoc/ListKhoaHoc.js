import React, { useEffect, useState } from 'react'
import TitlePage from '../TitlePage/TitlePage'
import { FaLaptop, FaCamera, FaBriefcase, FaBook, FaPlay, FaDiceD20, FaBookmark } from 'react-icons/fa';
import { Pagination } from 'antd';
import ItemCourseV2 from '../ItemCourseV2/ItemCourseV2';
import styles from './listCoursePage.module.scss'
import { courseService } from '../../services/couserService';
import { useDispatch } from 'react-redux';
import { setSpinnerOff, setSpinnerOn } from '../../Toolkits/spinnerSlice';

export default function ListKhoaHoc() {
    const dispatch = useDispatch();
    const [listCourse, setlistCourse] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(setSpinnerOn());
        courseService.getListCoursePageSplit(page)
        .then((res) => {
            dispatch(setSpinnerOff());
            setlistCourse(res.data.items)
        })
        .catch((err) => {
            dispatch(setSpinnerOff());
            console.log(err);
        });
    }, [page])
    let onChange = (page) => {
        setPage(page)
    }
  return (
    <div className={styles.listCoursePage}>
        <TitlePage title='KHÓA HỌC' text='BẮT ĐẦU HÀNH TRÌNH NÀO!!!'/>
        <div className="myContainer">
            <div className={styles.listBoxCourse}>
                <div className={styles.itemBoxCourse}>
                    <h3>Chương trình học</h3>
                    <FaLaptop/>
                    <p>300</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>NHÀ SÁNG TẠO</h3>
                    <FaCamera/>
                    <p>10000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>NHÀ THIẾT KẾ</h3>
                    <FaBriefcase/>
                    <p>400</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>BÀI GIẢNG</h3>
                    <FaBook/>
                    <p>3000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>VIDEO</h3>
                    <FaPlay/>
                    <p>40000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>LĨNH VỰC</h3>
                    <FaDiceD20/>
                    <p>200</p>
                </div>
            </div>
            <div className={styles.listContainer}>
                <h3><FaBookmark/> <span>Danh sách khóa học</span></h3>
                <div className={styles.listContent}>
                    {listCourse?.map((item, index) => {
                        return <ItemCourseV2 item={item} key={index}/>
                    })}
                </div>
            </div>
            <div className={styles.btnPage}>
                <Pagination onChange={onChange} defaultCurrent={1} total={40} />
            </div>
        </div>
    </div>
  )
}
