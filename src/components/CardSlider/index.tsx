import { BoxSlider, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardComicTest from "../CardComicTest";

const CardSlider = () => {
  return (
    <Container>
      <BoxSlider>
        <Swiper
          grab-cursor="true"
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]}
        >
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
          <SwiperSlide>
            <CardComicTest />
          </SwiperSlide>
        </Swiper>
      </BoxSlider>
    </Container>
  );
};

export default CardSlider;
