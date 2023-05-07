import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

export default function Layout({ Component }) {
    const isSpinner = useSelector((state) => state.spinnerSlice.isSpinner)
    return (
        <Spin spinning={isSpinner}>
            <div className='min-h-screen flex flex-col'>
                <Header></Header>
                <div className="flex-gow">
                    <Component></Component>
                </div>
                <Footer></Footer>
            </div>

        </Spin>
    )
}
