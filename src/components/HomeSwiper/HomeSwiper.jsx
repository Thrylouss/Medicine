import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useState} from "react";
import SwiperCard from "../SwiperCard/SwiperCard.jsx";
import styles from './styles.module.css'



export default function HomeSwiper(){
    const [swiperSlides, setSwiperSlides] = useState([]);

    for (let i = 0; i < 5; i++) {
        swiperSlides.push(i);
    }


    return (
        <div className={styles.container}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
            >
                {swiperSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SwiperCard/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}