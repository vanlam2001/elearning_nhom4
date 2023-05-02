import React from 'react'
import styles from './titlePage.module.scss'
export default function TitlePage(props) {
  return (
    <div className={styles.titlePage}>
        <div className="myContainer">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
