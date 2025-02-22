import image1 from "/images/slide2.jpg";
import image2 from "/images/slide3.jpg";
import image3 from "/images/slide4.jpg";

const CategoriesSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 pb-10">
        <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center py-12">Packages</h2>
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <div className="md:w-1/2 text-left p-6">
          <h3 className="text-3xl font-semibold text-[#17A396]">Standard</h3>
          <p className="text-[#0B0B0B] mt-2">
          An affordable yet stylish solution, designed for comfort and practicality without compromising on quality.
          </p>
          <p className="text-2xl font-bold text-[#C79900] mt-2"><span className="text-[#0B0B0B] font-medium text-lg">2 bhk Starts at</span> ₹3.75 Lakhs</p>
        </div>
        <div className="md:w-1/2">
          <img src={image1} alt="Standard" className="w-full h-64 object-cover rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <div className="md:w-1/2 text-left p-6">
          <h3 className="text-3xl font-semibold text-[#17A396]">Classic</h3>
          <p className="text-[#0B0B0B] mt-2">
          A perfect blend of timeless aesthetics and modern functionality, offering refined interiors with quality finishes.
          </p>
          <p className="text-2xl font-bold text-[#C79900] mt-2"><span className="text-[#0B0B0B] font-medium text-lg">2 bhk Starts at</span> ₹4.35 Lakhs</p>
        </div>
        <div className="md:w-1/2">
          <img src={image2} alt="Classic" className="w-full h-64 object-cover rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <div className="md:w-1/2 text-left p-6">
          <h3 className="text-3xl font-semibold text-[#17A396]">Premium</h3>
          <p className="text-[#0B0B0B] mt-2">
          Experience luxury with high-end materials, bespoke designs, and superior craftsmanship for an elegant and sophisticated home.
          </p>
          <p className="text-2xl font-bold text-[#C79900] mt-2"><span className="text-[#0B0B0B] font-medium text-lg">2 bhk Starts at</span> ₹5.25 Lakhs</p>
        </div>
        <div className="md:w-1/2">
          <img src={image3} alt="Premium" className="w-full h-64 object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
