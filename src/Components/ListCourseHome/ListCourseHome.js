import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { courseService } from '../../services/couserService';
import { setListCourse } from '../../Toolkits/courseSlice';
import BackEndCourse from '../BackEndCourse/BackEndCourse';
import FrontEndCourse from '../FrontEndCourse/FrontEndCourse';
import PopularCourse from '../PopularCourse/PopularCourse';

export default function ListCourseHome() {
  let dispath = useDispatch();
  useEffect(() => {
    courseService.getCourseList()
      .then((res) => {
        dispath(setListCourse(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <div className="myContainer">
        <PopularCourse />
        <FrontEndCourse />
        <BackEndCourse />
      </div>
    </div>
  )
}
