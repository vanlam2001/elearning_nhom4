import React, { useState } from 'react'
import styles from './tabsListCourse.module.scss'
import ButtonV1 from '../../../../Components/ButtonV1/ButtonV1';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchInfoAccount } from '../../InfoUserPage';
import {
    FaClock, 
    FaRegCalendar, 
    FaSignal,
    FaStar,
} from 'react-icons/fa';
import { localUserServ } from '../../../../services/localService';
import { courseService } from '../../../../services/couserService';
const { Search } = Input;
export default function TabListCourse() {
    const dispatch = useDispatch()
    const infoAccount = useSelector((state) => state.userSlice.infoAccountUser)
    const [listCourse, setListCourse] = useState(infoAccount.chiTietKhoaHocGhiDanh)
    const handleCancelCourse = (idCourse) => {
        const data = {
            "maKhoaHoc": idCourse,
            "taiKhoan": localUserServ.get().taiKhoan
        }
        courseService.postCancelCourse(data)
        .then((res) => {
            fetchInfoAccount(dispatch)
            deleteCourse(idCourse)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    let deleteCourse = (idCourse) => {
        let cloneListCourse = [...listCourse]
        let index = cloneListCourse.findIndex((item) => {
            return item.maKhoaHoc === idCourse;
        })
        cloneListCourse.splice(index, 1)
        setListCourse(cloneListCourse)
    }
    const onChangeSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let newList = [...infoAccount.chiTietKhoaHocGhiDanh]
        let newSearch = newList.filter((item) => {
            return item.tenKhoaHoc.toLowerCase().includes(value);
        })
        setListCourse(newSearch)
    }


  return (
    <div className={styles.courseUSer}>
                    <div className={styles.courseUSerTitle}>
                        <h3>Khóa học của tôi</h3>
                        <Search className={styles.search}
                        placeholder="Tìm kiếm"
                        onChange={onChangeSearch}
                        style={{
                            width: 200,
                        }}
                        />
                    </div>
                    <div className={styles.listMyCourse}>
                        {listCourse.map((item, index) => {
                            return (
                                <div key={index} className={styles.itemMyCourse}>
                                    <div className={styles.imageCourse}>
                                        <img src={item.hinhAnh} alt="" />
                                    </div>
                                    <div className={styles.courseContent}>
                                        <h4>{item.tenKhoaHoc}</h4>
                                        <p className={styles.courseDes}>{item.moTa}</p>
                                        <div className={styles.iconTime}>
                                            <div>
                                                <FaClock/>
                                                <span>8 giờ</span>
                                            </div>
                                            <div>
                                                <FaRegCalendar/>
                                                <span>23 giờ</span>
                                            </div>
                                            <div>
                                                <FaSignal/>
                                                <span>All level</span>
                                            </div>
                                        </div>
                                        <div className={styles.iconStar}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className={styles.infoMaker}>
                                            <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="" />
                                            <p>Nguyễn Nam</p>
                                        </div>
                                    </div>
                                    <div className={styles.btnCancel}>
                                        <ButtonV1 onClick={() => {handleCancelCourse(item.maKhoaHoc)}}>Hủy khóa học</ButtonV1>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
  )
}
