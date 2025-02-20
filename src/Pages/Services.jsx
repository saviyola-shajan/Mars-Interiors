import image1 from "/images/slide 1.jpg";
import image2 from "/images/slide2.jpg";
import image3 from "/images/slide3.jpg";
import image4 from "/images/slide4.jpg";
import image5 from "/images/slide5.jpg";

const Services = () => {
  const services = [
    {
      heading: "Service 1",
      points: ["Point 1.1", "Point 1.2", "Point 1.3"],
      image: image1,
    },
    {
      heading: "Service 2",
      points: ["Point 2.1", "Point 2.2", "Point 2.3"],
      image: image2,
    },
    {
      heading: "Service 3",
      points: ["Point 3.1", "Point 3.2", "Point 3.3"],
      image: image3,
    },
    {
      heading: "Service 4",
      points: ["Point 4.1", "Point 4.2", "Point 4.3"],
      image: image4,
    },
    {
      heading: "Service 5",
      points: ["Point 5.1", "Point 5.2", "Point 5.3"],
      image: image5,
    },
  ];

  return (
    <div className="min-h-screen w-full p-20 mb-40">
      <img src={image1} alt="service img" />
        <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mt-10 text-center ">Services</h2>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } items-center justify-between my-28 px-4 py-14 hover:bg-black/5 rounded-lg`}
        >
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">{service.heading}</h2>
            <ul className="list-disc pl-5">
              {service.points.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 relative">
            <div className="border-2 border-[#3A3A3A] p-4 w-96 h-96 absolute top-6 left-28 rounded-lg "></div>
            <img
              src={service.image}
              alt={service.heading}
              className="w-96 h-96 rounded-lg relative z-10 ml-40"
            />
          </div>
        </div>
      ))}
      <h2 className="text-4xl font-bold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center mb-8">
        Project Management
      </h2>
      <div className="relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={image5}
            alt="Project Management"
            className="w-full h-[80vh] object-cover"
          />
        </div>
        <div className="relative z-10 flex justify-end mb-40 p-10">
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              Efficient project management is key to delivering successful
              projects on time and within budget. Our team uses the latest tools
              and methodologies to ensure your project runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
