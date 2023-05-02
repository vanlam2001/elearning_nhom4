import React from 'react'
import { Tabs } from 'antd';
import styles from './tabsInfo.module.scss'
import TabUser from './TabUser/TabUser';
import TabListCourse from './TabListCourse/TabListCourse';

export default function TabsInfo() {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: (<div className={styles.titleInfo}>Thông tin cá nhân</div>),
            children: <TabUser/>,
        },
        {
            key: '2',
            label: (<div className={styles.titleInfo}>Khóa học</div>),
            children: <TabListCourse/>,
        },
    ];
  return (
    
    <Tabs className={styles.tabsInfo}
    defaultActiveKey="1" 
    type='card' 
    items={items} 
    onChange={onChange} />
  )
}
