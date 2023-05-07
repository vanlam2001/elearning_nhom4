import React from 'react'
import styles from './filterSearch.module.scss'
import { FaCheck, FaStar } from 'react-icons/fa';

export default function FilterSearch() {
  return (
    <div className={styles.filterSearch}>
        <h2>Lọc</h2>
        <div className={styles.filterItem}>
          <h4>Khóa học</h4>
          <ul>
            <li>
              <label className={styles.BoxSearch}>
                Tất cả
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                Front End
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                Back End
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                HTML / CSS
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.filterItem}>
          <h4>Cấp độ</h4>
          <ul>
            <li>
              <label className={styles.BoxSearch}>
                Tất cả
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                Mới bắt đầu
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                Trung cấp
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                Cao cấp
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                    <FaCheck/>
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.filterItem}>
          <h4>Đánh giá</h4>
          <ul>
            <li>
              <label className={styles.BoxSearch}>
                <FaStar/>
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                  <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                <FaStar/>
                <FaStar/>
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                  <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                  <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                  <FaCheck/>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.BoxSearch}>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <input type='checkbox'/>
                <span className={styles.checkMark}>
                  <FaCheck/>
                </span>
              </label>
            </li>
          </ul>
        </div>
    </div>
  )
}
