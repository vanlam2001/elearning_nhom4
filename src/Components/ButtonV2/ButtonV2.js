import React from 'react'
import styles from './buttonV2.module.scss';

export default function ButtonV2(props) {
  return (
    <button onClick={props.onclick} className={styles.btnStyle}>{props.children}</button>
  )
}
