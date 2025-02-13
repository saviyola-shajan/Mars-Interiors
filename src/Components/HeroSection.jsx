import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Slides = [
  { image: "/images/slide 1.jpg", text: "We believe in aesthetic that works." },
  { image: "/images/slide2.jpg" },
  { image: "/images/slide3.jpg"},
  { image: "/images/slide4.jpg"},
  { image: "/images/slide5.jpg"},
];

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="bg-gradient-to-b from-[#C79900] to-[#F5BD02] bg-clip-text text-transparent text-5xl font-medium mt-96">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
