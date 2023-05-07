import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FilterSearch from './FilterSearch/FilterSearch'
import ResultSearch from './ResultSearch/ResultSearch'
import styles from './searchPage.module.scss'
import TitlePage from '../../Components/TitlePage/TitlePage'
import { courseService } from '../../services/couserService'
import { useDispatch } from 'react-redux'
import { setSpinnerOff, setSpinnerOn } from '../../Toolkits/spinnerSlice'
export default function SearchPage() {
    const dispatch = useDispatch();
    const params = useParams()
    const [listResult, setListResult] = useState([])
    useEffect(() => {
        dispatch(setSpinnerOn());
        courseService.getListCourseSearch(params.value)
        .then((res) => {
            dispatch(setSpinnerOff());
            setListResult(res.data)
        })
        .catch((err) => {
            dispatch(setSpinnerOff());
            setListResult([])
        });
    
    }, [params.value])
    
  return (
    <div className={styles.searchPage}>
        <TitlePage title='TÌM KIẾM' text='KẾT QUẢ TÌM KIẾM KHÓA HỌC!!!'/>
        <div className="myContainer">
            <div className={styles.searchContainer}>
                <div className={styles.item}>
                    <FilterSearch/>
                </div>
                <div className={styles.item}>
                    <ResultSearch listResult={listResult}/>
                </div>
            </div>
        </div>
    </div>
  )
}
