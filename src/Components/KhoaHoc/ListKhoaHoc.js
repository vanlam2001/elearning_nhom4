import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { courseService } from '../../services/couserService';
import { Pagination } from 'antd';
import ListCourseHome from '../ListCourseHome/ListCourseHome';
import { setListCourse } from '../../Toolkits/courseSlice';


export default function ListKhoaHoc() {
    let dispath = useDispatch();
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    const [numPage] = useState(0)

    useEffect(() => {
        courseService.getCourseList()
            .then((res) => {
                dispath(setListCourse(res.data))
                let newListKhoaHoc = pageSplitListKhoaHoc(res.data, 1)
                setListKhoaHoc(newListKhoaHoc);
            })

            .catch((err) => {
                console.log(err)
            })
    }, [])


    let pageSplitListKhoaHoc = (arr, quantity) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i += quantity) {
            newArr.push(arr.slice(i, i + quantity))
        }
        return newArr;
    }

    let renderListKhoaHoc = () => {
        return listKhoaHoc[numPage]?.map((khoahoc) => {
            return (
                <div>
                    <ListCourseHome key={khoahoc.maKhoaHoc} khoahoc={khoahoc}></ListCourseHome>

                </div>
            )
        })
    }


    return (
        <div className='container mx-auto mt-20 px-5'>
            <div className='
         '>
                {renderListKhoaHoc()}

            </div>
        </div>
    )
}
