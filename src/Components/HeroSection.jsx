import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slides = [
  { image: "/images/slide1.jpg", text: "/images/MARS-logo.png" },
  { image: "/images/slide2.jpg" },
  { image: "/images/slide3.jpg" },
  { image: "/images/slide4.jpg" },
  { image: "/images/slide5.jpg" },
];

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-opacity-30">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full "
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-screen object-cover ${
                index === 0 ? "opacity-100" : ""
              }`}
            />
            {index === 0 && (
              <div className="absolute inset-0 bg-black/35"></div>
            )}{" "}
            {slide.text && (
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={slide.text} className="md:w-[700px] md:h-[700px] w-96 h-96" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
