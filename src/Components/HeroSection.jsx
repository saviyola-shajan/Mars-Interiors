import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slides = [
  { image: "/images/slide1.jpg", text: "We believe in aesthetics that work." },
  { image: "/images/slide2.jpg" },
  { image: "/images/slide3.jpg" },
  { image: "/images/slide4.jpg" },
  { image: "/images/slide5.jpg" },
];

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            {slide.text && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="lg:bg-[#C79900] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center px-4 md:px-8">
                  {slide.text}
                </h2>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
