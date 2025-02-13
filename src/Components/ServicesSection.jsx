import image1 from "/vectors/house.png"
import image2 from "/vectors/furniture.png"
import image3 from "/vectors/skyline.png"
import image4 from "/vectors/planning-strategy.png"
import image5 from "/vectors/roof-lamp.png"
const ServicesSection = () => {
  return (
    <div className="min-h-screen px-24 pt-24">
      <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#F5BD02] bg-clip-text text-transparent mb-16 text-center">
        Our Services
      </h2>

      <div className="grid gap-16 mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-80 w-96">
            <img src={image1} alt="residential" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">Residential Design</h3>  
            <p className="text-lg text-[#0B0B0B]">
              From modern minimalism to timeless classics, we design homes that fit your lifestyle.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-80 w-96">
          <img src={image2} alt="residential" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">Custom Furniture & Decor</h3>
            <p className="text-lg text-[#0B0B0B]">
              Bespoke pieces that add personality and uniqueness to your space.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-80 w-96">
          <img src={image3} alt="residential" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">Commercial Spaces</h3>
            <p className="text-lg text-[#0B0B0B]">
              Sophisticated, efficient, and brand-aligned designs for offices, retail spaces, and hospitality.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-80 w-96">
          <img src={image4} alt="residential" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">Space Planning</h3>
            <p className="text-lg text-[#0B0B0B]">
              Expert layouts to maximize functionality and aesthetic appeal.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-80 w-96">
          <img src={image5} alt="residential" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000] mb-4">Lighting Design</h3>
            <p className="text-lg text-[#0B0B0B]">
              Perfectly balanced lighting to enhance aesthetics and mood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
