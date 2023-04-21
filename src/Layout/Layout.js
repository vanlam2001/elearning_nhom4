import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Layout({ Component }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header></Header>
            <div className="flex-gow">
                <Component></Component>
            </div>
            <Footer></Footer>
        </div>
    )
}
