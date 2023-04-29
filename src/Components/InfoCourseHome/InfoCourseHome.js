import React from "react";
import styles from "./infoCourseHome.module.scss";
import { GiCheckMark } from "react-icons/gi";
import bgInfo from '../../images/bgInfoCourse.png'
export default function InfoCourseHome() {
  return (
    <div className={styles.infoCourseHome}>
      <div className="myContainer">
        <div className={styles.infoItemHome} style={{ backgroundImage: `url(${bgInfo})` }}>
          <h3>Khóa học</h3>
          <p>
            <b>Học qua dự án thực tế</b>, học đi đôi với hành, không lý thuyết
            lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ
            đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm
            được ngay
          </p>
          <ul>
            <li>
              <GiCheckMark />
              <span>Hơn 1000 bài tập và dự án thực tế</span>
            </li>
            <li>
              <GiCheckMark />
              <span>Công nghệ cập nhật mới nhất</span>
            </li>
            <li>
              <GiCheckMark />
              <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
            </li>
            <li>
              <GiCheckMark />
              <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
            </li>
            <li>
              <GiCheckMark />
              <span>
                Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự
                án
              </span>
            </li>
            <li>
              <GiCheckMark />
              <span>
                Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.infoItemHome}>
          <h3>LỘ TRÌNH PHÙ HỢP</h3>
          <ul>
            <li>
              <GiCheckMark />
              <span>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
            </li>
            <li>
              <GiCheckMark />
              <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
            </li>
            <li>
              <GiCheckMark />
              <span>
                Huấn luyện để phát triển năng lực và niềm đam mê lập trình
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.infoItemHome}>
          <h3>HỆ THỐNG HỌC TẬP</h3>
          <ul>
            <li>
              <GiCheckMark />
              <span>
                Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học
                viên
              </span>
            </li>
            <li>
              <GiCheckMark />
              <span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
            </li>
            <li>
              <GiCheckMark />
              <span>
                Thống kê, so sánh khả năng học của các học viên cùng level để
                đưa ra mục tiêu học tập
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.infoItemHome}>
          <h3>GIẢNG VIÊN</h3>
          <ul>
            <li>
              <GiCheckMark />
              <span>
                Tương tác cùng mentor và giảng viên qua phần thảo luận
              </span>
            </li>
            <li>
              <GiCheckMark />
              <span>Review code và đưa ra các nhận xét góp ý</span>
            </li>
            <li>
              <GiCheckMark />
              <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
            </li>
          </ul>
        </div>
        <div className={styles.infoItemHome}>
          <h3>CHỨNG NHẬN</h3>
          <ul>
            <li>
              <GiCheckMark />
              <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
            </li>
            <li>
              <GiCheckMark />
              <span>
                Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc
                đáo
              </span>
            </li>
            <li>
              <GiCheckMark />
              <span>Kết nối CV của bạn đến với các đối tác của V learning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
