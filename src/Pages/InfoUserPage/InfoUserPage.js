import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import TitlePage from '../../Components/TitlePage/TitlePage'
import { localUserServ } from '../../services/localService'
import { userServ } from '../../services/userService'
import { setSpinnerOff, setSpinnerOn } from '../../Toolkits/spinnerSlice'
import { setInfoAccountUser } from '../../Toolkits/userSlice'
import FormUpdateInfo from './FormUpdateInfo/FormUpdateInfo'
import styles from './infoUserPage.module.scss'
import TabsInfo from './TabsInfo/TabsInfo'
export const fetchInfoAccount = (dispatch) => {
    let data = {
        "taiKhoan": localUserServ.get()?.taiKhoan
    }
    dispatch(setSpinnerOn())
    userServ.getInfoAccountUser(data)
    .then((res) => {
        dispatch(setSpinnerOff())
        dispatch(setInfoAccountUser(res.data))
    })
    .catch((err) => {
        dispatch(setSpinnerOff())
        console.log(err);
    });
}
export default function InfoUserPage() {
    const dispatch = useDispatch();
    const infoAccount = useSelector((state) => state.userSlice.infoAccountUser)
    useEffect(() => {
        let data = {
            "taiKhoan": localUserServ.get()?.taiKhoan
        }
        dispatch(setSpinnerOn())
        userServ.getInfoAccountUser(data)
        .then((res) => {
            dispatch(setSpinnerOff())
            dispatch(setInfoAccountUser(res.data))
        })
        .catch((err) => {
            dispatch(setSpinnerOff())
            console.log(err);
        });
    // eslint-disable-next-line
    }, [])
    
  return (
    <div className={styles.infoUserPage}>
        <TitlePage title='THÔNG TIN CÁ NHÂN' text='THÔNG TIN HỌC VIÊN'/>
        <div className="myContainer">
            <dir className={styles.infoContent}>
                <div className={styles.infoLeft}>
                    <div className={styles.contentLeft}>
                        <img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" alt="" />
                        <h4>{infoAccount?.hoTen}</h4>
                        <p>Lập trình viên Front-end</p>
                        <button className={styles.btnInfo}>Hồ sơ cá nhân</button>
                    </div>
                </div>
                <div className={styles.infoRingh}>
                    <TabsInfo/>
                </div>
            </dir>
        </div>
        <FormUpdateInfo/>
    </div>
  )
}
