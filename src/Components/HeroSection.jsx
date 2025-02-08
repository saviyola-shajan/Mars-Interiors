import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slides = [
  { image: "/images/slide 1.jpg", text: "We believe in aesthetic that works." },
  { image: "/images/slide2.jpg", text: "Designing Interiors That Inspire." },
  { image: "/images/slide3.jpg", text: "Where Style Meets Comfort." },
  { image: "/images/slide4.jpg", text: "Creating Harmony in Every Detail." },
  { image: "/images/slide5.jpg", text: "Bringing Life to Every Space." },
];

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h2 className="text-[#FFFFFF] text-7xl font-medium ">{slide.text}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
