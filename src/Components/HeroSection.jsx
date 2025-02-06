import Slider from "react-slick";
import slide1 from "../../src/assets/images/slide 1.jpg";
import slide2 from "../../src/assets/images/slide 2.jpg";
import slide3 from "../../src/assets/images/slide 3.jpg";
import slide4 from "../../src/assets/images/slide 4.jpg";
import slide5 from "../../src/assets/images/slide 5.jpg";

const HeroSection = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
