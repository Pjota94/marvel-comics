import { BoxSlider, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardComicTest from "../CardComicTest";
import { useContext } from "react";
import { AuthMarvelContext } from "../../context/MarvelContext";

const CardSlider = () => {
  const { comicsCharacter } = useContext(AuthMarvelContext);
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
          {comicsCharacter.map((elem, index) => (
            <SwiperSlide>
              <CardComicTest
                thumbnail={elem.thumbnail}
                key={index}
                id={elem.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </BoxSlider>
    </Container>
  );
};

export default CardSlider;
