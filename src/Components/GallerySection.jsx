const images = [
  { src: "/images/kitchen.jpg", alt: "Image 1" },
  { src: "/images/slide2.jpg", alt: "Image 2" },
  { src: "/images/slide3.jpg", alt: "Image 3" },
  { src: "/images/slide4.jpg", alt: "Image 4" },
  { src: "/images/slide5.jpg", alt: "Image 5" },
  { src: "/images/family living 2.jpg", alt: "Image 6" },
  { src: "/images/PRAYER 1.jpg", alt: "Image 8" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen px-24 pb-20">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent">Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
    <div key={index} className="relative group overflow-hidden shadow-lg border-2 border-[#17A396] group-hover:border-[#FF5733] transition-all duration-300">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-72 object-cover transition-transform duration-300 transform group-hover:scale-110"
    />
  </div>  
        ))}
      </div>
    </div>
  );
};

export default Gallery;
