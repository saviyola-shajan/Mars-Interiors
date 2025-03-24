import image from "/images/drawing.jpg";

const AboutSection = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 md:pt-24 pt-12 flex flex-col items-center my-10">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center mb-8 sm:mb-10">
        About Us
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 w-full max-w-6xl">
        {/* Text Section */}
        <div className="md:w-1/2 text-left px-4 sm:px-6">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#0B0B0B] text-justify">
            At <span className="font-semibold text-[#17A396]">MARS INTERIORS</span>, 
            we are passionate about creating spaces that inspire, uplift, and reflect 
            the unique personality of each client. As a full-service interior design company, 
            we blend creativity with functionality to transform your vision into reality. 
            Whether it&apos;s a cozy home, a chic office, or a luxurious commercial space, 
            our designs are tailored to meet your needs and exceed your expectations.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="About Us"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
