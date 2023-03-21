import { BoxSlider, Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper";
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
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        >
          <div>
            {comicsCharacter.map((elem, index) => (
              <SwiperSlide>
                <CardComicTest
                  thumbnail={elem.thumbnail}
                  key={index}
                  id={elem.id}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </BoxSlider>
    </Container>
  );
};

export default CardSlider;
