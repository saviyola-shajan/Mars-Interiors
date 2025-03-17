import image1 from "/images/hall10.jpg";
import image2 from "/images/hall6.jpg";
import image3 from "/images/living11.jpg";

const CategoriesSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 pb-10 px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center py-6 lg:py-12">
        Design Choices
      </h2>

      {[
        {
          title: "Standard",
          description:
            "An affordable yet stylish solution, designed for comfort and practicality without compromising on quality.",
          price: "₹3.75 Lakhs",
          img: image2,
          reverse: false,
        },
        {
          title: "Classic",
          description:
            "A perfect blend of timeless aesthetics and modern functionality, offering refined interiors with quality finishes.",
          price: "₹4.35 Lakhs",
          img: image3,
          reverse: true,
        },
        {
          title: "Premium",
          description:
            "Experience luxury with high-end materials, bespoke designs, and superior craftsmanship for an elegant and sophisticated home.",
          price: "₹5.25 Lakhs",
          img: image1,
          reverse: false,
        },
      ].map(({ title, description, price, img, reverse }, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center w-full max-w-6xl bg-white shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8`}
        >
          <div className="w-full md:w-1/2 text-center md:text-left pb-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#17A396]">
              {title}
            </h3>
            <p className="text-[#0B0B0B] mt-2 text-sm text-left sm:text-base lg:text-lg">
              {description}
            </p>
            <p className="text-xl sm:text-2xl text-left font-bold text-[#C79900] mt-2">
              <span className="text-[#0B0B0B] font-medium text-base sm:text-lg">
                2 BHK Starts at
              </span>{" "}
              {price}
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt={title}
              className="w-full h-52 sm:h-64 md:h-72 xl:h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
