import React from 'react'
import styles from './buttonV1.module.scss';

export default function ButtonV1(props) {
  return (
    <button onClick={props.onClick} className={styles.btnStyle}>{props.children}</button>
  )
}
