import React from 'react'
import styles from './infoCourse.module.scss'
import imgInstrutor from '../../../images/instrutor3.jpg'
import { FaGraduationCap, FaStar, FaCheck, FaRegPlayCircle, FaClock } from 'react-icons/fa'
import ButtonV2 from '../../../Components/ButtonV2/ButtonV2'

export default function InfoCourse({ course }) {
  return (
    <div className={styles.infoCourse}>
      <h2 className={styles.title}>{course.tenKhoaHoc}</h2>
      <div className={styles.courseInfo}>
        <div>
          <img src={imgInstrutor} alt="" />
          <div className={styles.instrutorInfo}>
            <p>Giảng viên</p>
            <p>{course?.nguoiTao?.hoTen}</p>
          </div>
        </div>
        <div>
          <FaGraduationCap />
          <div>
            <p>Lĩnh vực</p>
            <p>{course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
          </div>
        </div>
        <div className={styles.star}>
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className={styles.textStar}>5</span>
          </span>
          <p>100 đánh giá</p>
        </div>
      </div>
      <p className={styles.description}>
        React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và
        tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng
        cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước
        đi sâu vào tất cả các kiến thức cơ bản cốt lõi, khám phá rất nhiều ví dụ
        và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất
        cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng
        như vô số kiến thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng,
        có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm
        chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng
        cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với
        tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích
        TẠI SAO điều đó lại quan trọng!
      </p>
      <div className={styles.boxCourseLearn}>
        <h4>Những gì bạn sẽ học</h4>
        <div>
          <ul>
            <li>
              <FaCheck />
              <span>
                Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
                người dùng và phản ứng nhanh
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong
                những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web
                dev ngay bây giờ
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của
                JavaScript một cách dễ dàng
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Tìm hiểu tất cả về React Hooks và React Components
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <FaCheck />
              <span>
                Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript
                NPM, Webpack, Babel và ES6 / ES2015
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi
                vì bạn biết rất rõ các nguyên tắc cơ bản
              </span>
            </li>
            <li>
              <FaCheck />
              <span>
                Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.courseContent}>
        <h4>Nội dung khóa học</h4>
        <div className={styles.courseItem}>
          <div className={styles.sectionItem}>
            <span>MỤC 1: GIỚI THIỆU</span>
            <ButtonV2>Xem trước</ButtonV2>
          </div>
          <p>Bài học</p>
          <div className={styles.lessonContainer}>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Giới thiệu khoá học</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Các khái niệm về React Component</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Thiết lập môi trường cho Windows</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Tạo ứng dụng React - React-Scripts</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Ghi chú nhanh về dấu ngoặc kép cho string interpolation</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.courseItem}>
          <div className={styles.sectionItem}>
            <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
            <ButtonV2>Xem trước</ButtonV2>
          </div>
          <p>Bài học</p>
          <div className={styles.lessonContainer}>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Trang chủ và thành phần thư mục</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Hướng dẫn khóa học + Liên kết Github</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Trang chủ thương mại điện tử + thiết lập SASS</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Tệp CSS và SCSS</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>React 17: Cập nhật các gói + Phiên bản React mới nhất</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseItem}>
          <div className={styles.sectionItem}>
            <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
            <ButtonV2>Xem trước</ButtonV2>
          </div>
          <p>Bài học</p>
          <div className={styles.lessonContainer}>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>connect() and mapStateToProps</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Trạng thái thư mục vào Redux</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Thành phần Tổng quan về Bộ sưu tập</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
            <div className={styles.lessonContent}>
              <div>
                <FaRegPlayCircle />
                <span>Tổng kết khoá học</span>
              </div>
              <div>
                <FaClock />
                <span>14:35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
