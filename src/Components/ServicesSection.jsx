import image1 from "/vectors/house.png";
import image2 from "/vectors/furniture.png";
import image3 from "/vectors/skyline.png";
import image4 from "/vectors/planning-strategy.png";
import image5 from "/vectors/roof-lamp.png";

const ServicesSection = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 pt-24">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-12 text-center">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {[
          {
            image: image1,
            title: "Residential Design",
            description:
              "From modern minimalism to timeless classics, we design homes that fit your lifestyle.",
          },
          {
            image: image2,
            title: "Custom Furniture & Decor",
            description:
              "Bespoke pieces that add personality and uniqueness to your space.",
          },
          {
            image: image3,
            title: "Commercial Spaces",
            description:
              "Sophisticated, efficient, and brand-aligned designs for offices, retail spaces, and hospitality.",
          },
          {
            image: image4,
            title: "Space Planning",
            description:
              "Expert layouts to maximize functionality and aesthetic appeal.",
          },
          {
            image: image5,
            title: "Lighting Design",
            description:
              "Perfectly balanced lighting to enhance aesthetics and mood.",
          },
        ].map(({ image, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md"
          >
            <img src={image} alt={title} className="w-20 h-20 mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-4">
              {title}
            </h3>
            <p className="text-sm sm:text-lg text-[#0B0B0B]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
