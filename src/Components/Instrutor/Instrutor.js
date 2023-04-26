import React from 'react'
import styles from './instrutor.module.scss'
import instrutor1 from '../../images/instrutor1.jpg'
import instrutor2 from '../../images/instrutor2.jpg'
import instrutor3 from '../../images/instrutor3.jpg'
import instrutor4 from '../../images/instrutor4.jpg'
import instrutor5 from '../../images/instrutor5.jpg'
import instrutor6 from '../../images/instrutor6.jpg'
import instrutor7 from '../../images/instrutor7.jpg'
import ItemInstrutor from './ItemInstrutor/ItemInstrutor'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Instrutor() {
    const listInstrutor = [
        {
            image: instrutor1,
            name: 'Big DadMoon',
            reviewRole: 'Chuyên gia lĩnh vực lập trình',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor2,
            name: 'IcarDi MenBor',
            reviewRole: 'Chuyên gia ngôn ngữ Vue Js',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor3,
            name: 'Bladin Slaham',
            reviewRole: 'Chuyên gia hệ thống máy tính',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor4,
            name: 'Chris Andersan',
            reviewRole: 'Chuyên gia lĩnh vực Full Skill',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor5,
            name: 'VueLo Gadi',
            reviewRole: 'Chuyên gia lĩnh vực Phân tích',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor6,
            name: 'Hoàng Nam',
            reviewRole: 'Chuyên gia lĩnh vực PHP',
            reviewMentor: 4.9,
            reviews: 100
        },
        {
            image: instrutor7,
            name: 'David Ngô Savani',
            reviewRole: 'Chuyên gia lĩnh vực Front End',
            reviewMentor: 4.9,
            reviews: 100
        },
    ]
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                }
            }
        ]
    
    };
  return (
    <div className={styles.instrutor}>
        <div className="myContainer">
            <h2>Giảng viên hàng đầu</h2>
            <Slider {...settings} className={styles.slickContainer}>
                {listInstrutor.map((item, index) => {
                    return (
                        <div key={index}>
                            <ItemInstrutor item={item}/>
                        </div>
                    )
                })}
                </Slider>
        </div>
    </div>
  )
}
