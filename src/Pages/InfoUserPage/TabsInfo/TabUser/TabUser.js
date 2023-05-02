import React from 'react'
import styles from './tabUser.module.scss'
import { Progress } from 'antd';
import { FaUserClock, FaLayerGroup, FaSwatchbook, FaSignal, FaGraduationCap, FaBook } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import ButtonV1 from '../../../../Components/ButtonV1/ButtonV1';
import { setFormUpdateUser } from '../../../../Toolkits/userSlice';
export default function TabUser() {
    const dispatch = useDispatch()
    const infoAccount = useSelector((state) => state.userSlice.infoAccountUser)

    const setFormUpdateOn = () => {
        dispatch(setFormUpdateUser(true))
    }
  return (
    <div className={styles.infoUser}>
        <div className={styles.infoTop}>
            <div className={styles.infoTopLeft}>
                <p>Email: <span>{infoAccount?.email}</span></p>
                <p>Họ và tên: <span>{infoAccount?.hoTen}</span></p>
                <p>Số điện thoại: <span>{infoAccount?.soDT}</span></p>
            </div>
            <div className={styles.infoTopRight}>
                <p>Tài khoản:  <span>{infoAccount?.taiKhoan}</span></p>
                <p>Nhóm: <span>{infoAccount?.maNhom}</span></p>
                <p>Đối tượng: <span>Học viên</span></p>
                <ButtonV1 onClick={setFormUpdateOn}>Cập nhật</ButtonV1>
            </div>
        </div>
        <div className={styles.infoBot}>
            <h4>KĨ NĂNG CỦA TÔI</h4>
            <div className={styles.infoBotContent}>
                <div className={styles.skillAll}>
                    <div className={styles.mySkill}>
                        <button className={styles.skillBtn}>HTML</button>
                        <Progress
                        showInfo={false}
                        percent={100}
                        strokeColor={{
                            '0%': '#41b294',
                            '100%': '#f9ca9a',
                        }}
                        />
                    </div>
                    <div className={styles.mySkill}>
                        <button className={styles.skillBtn}>CSS</button>
                        <Progress
                        showInfo={false}
                        percent={75}
                        strokeColor={{
                            '0%': '#41b294',
                            '100%': '#f8bebb',
                        }}
                        />
                    </div>
                    <div className={styles.mySkill}>
                        <button className={styles.skillBtn}>JS</button>
                        <Progress
                        showInfo={false}
                        percent={50}
                        strokeColor={{
                            '0%': '#41b294',
                            '100%': '#f0cc6b',
                        }}
                        />
                    </div>
                    <div className={styles.mySkill}>
                        <button className={styles.skillBtn}>REACT</button>
                        <Progress
                        showInfo={false}
                        percent={80}
                        strokeColor={{
                            '0%': '#41b294',
                            '100%': '#113d3c',
                        }}
                        />
                    </div>
                </div>
                <div className={styles.timeStudy}>
                    <div className={styles.timeStudyItem}>
                        <FaUserClock/>
                        <div>
                            <h6>Giờ học</h6>
                            <p>80</p>
                        </div>
                    </div>
                    <div className={styles.timeStudyItem}>
                        <FaLayerGroup/>
                        <div>
                            <h6>Điểm tổng</h6>
                            <p>80</p>
                        </div>
                    </div>
                    <div className={styles.timeStudyItem}>
                        <FaSwatchbook/>
                        <div>
                            <h6>Buổi học</h6>
                            <p>40</p>
                        </div>
                    </div>
                    <div className={styles.timeStudyItem}>
                        <FaSignal/>
                        <div>
                            <h6>Cấp độ</h6>
                            <p>Trung cấp</p>
                        </div>
                    </div>
                    <div className={styles.timeStudyItem}>
                        <FaGraduationCap/>
                        <div>
                            <h6>Học lực</h6>
                            <p>Khá</p>
                        </div>
                    </div>
                    <div className={styles.timeStudyItem}>
                        <FaBook/>
                        <div>
                            <h6>Bài tập</h6>
                            <p>100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
