const ServicesSection = () => {
  return (
    <div className="min-h-screen p-24">
      <h2 className="text-6xl font-medium text-[#17A396] mb-16 text-left">
        OUR SERVICES
      </h2>

      <div className="grid gap-16 mx-40">
        {/* First Row - 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Residential Design</h3>
            <p className="text-lg">
              From modern minimalism to timeless classics, we design homes that fit your lifestyle.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Custom Furniture & Decor</h3>
            <p className="text-lg">
              Bespoke pieces that add personality and uniqueness to your space.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Commercial Spaces</h3>
            <p className="text-lg">
              Sophisticated, efficient, and brand-aligned designs for offices, retail spaces, and hospitality.
            </p>
          </div>
        </div>

        {/* Second Row - 2 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Card 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Space Planning</h3>
            <p className="text-lg">
              Expert layouts to maximize functionality and aesthetic appeal.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Lighting Design</h3>
            <p className="text-lg">
              Perfectly balanced lighting to enhance aesthetics and mood.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow h-96 w-80">
            <h3 className="text-2xl font-semibold text-[#17A396] mb-4">Lighting Design</h3>
            <p className="text-lg">
              Perfectly balanced lighting to enhance aesthetics and mood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
