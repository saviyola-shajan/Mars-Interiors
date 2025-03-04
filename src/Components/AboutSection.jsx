import image from "/images/drawing.jpg";

const AboutSection = () => {
  return (
    <div className="min-h-screen px-24 pt-24 flex flex-col items-center mt-10">
      <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center mb-10">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        <div className="md:w-1/2">
          <p className="text-2xl font-normal text-[#0B0B0B] leading-normal">
            At <span className="font-semibold text-[#17A396] text-justify">MARS INTERIORS</span>, 
            we are passionate about creating spaces that inspire, uplift, and reflect 
            the unique personality of each client. As a full-service interior design company, 
            we blend creativity with functionality to transform your vision into reality. 
            Whether it&apos;s a cozy home, a chic office, or a luxurious commercial space, 
            our designs are tailored to meet your needs and exceed your expectations.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={image}
            alt="About Us"
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
