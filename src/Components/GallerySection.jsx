const images = [
  { src: "/images/hall1.jpg", alt: "Image 1" },
  { src: "/images/hall2.jpg", alt: "Image 2" },
  { src: "/images/hall5.jpg", alt: "Image 3" },
  { src: "/images/living3.jpg", alt: "Image 4" },
  { src: "/images/living1.jpg", alt: "Image 5" },
  { src: "/images/living7.jpg", alt: "Image 6" },
  { src: "/images/living8.jpg", alt: "Image 7" },
  { src: "/images/living13.jpg", alt: "Image 8" },
  { src: "/images/living15.jpg", alt: "Image 9" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 pb-20 pt-10">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent">
          Gallery
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg border-2 border-[#17A396] transition-all duration-300 rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
