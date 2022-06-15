import { Swiper, SwiperProps, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';


export default function Slider() {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <div className='slide'>
                    <img
                    className="img"
                    src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
                    alt=""
                    />
                    <h1>Nome do produto</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide'>
                    <img
                    className="img"
                    src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
                    alt=""
                    />
                    <h1>Nome do produto</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide'>
                    <img
                    className="img"
                    src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
                    alt=""
                    />
                    <h1>Nome do produto</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide'>
                    <img
                    className="img"
                    src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
                    alt=""
                    />
                    <h1>Nome do produto</h1>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

