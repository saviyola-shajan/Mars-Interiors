import servicesMain from "/images/hall11.jpg";
import image5 from "/images/hall9.jpg";
import image2 from "/images/hall3.jpg";
import image3 from "/images/hall4.jpg";
import image4 from "/images/hall7.jpg";
import image1 from "/images/living6.jpg";
import projectmanage from "/images/living2.jpg";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Services = () => {
  const services = [
    {
      heading: "Residential Design",
      points: [
        {
          title: "Space Planning & Layout",
          description: "Optimizing room layouts for functionality and flow.",
        },
        {
          title: "Furniture Selection",
          description:
            "Choosing stylish and comfortable furniture to your style.",
        },
        {
          title: "Color & Material Selection",
          description: "Picking the perfect colors, textures, and materials.",
        },
        {
          title: "Lighting Design",
          description: "Enhancing ambiance with proper lighting solutions.",
        },
        {
          title: "Custom Decor & Styling",
          description:
            "Adding personalized decor elements to reflect your taste.",
        },
      ],
      image: image1,
    },
    {
      heading: "Custom Furniture & Decor",
      points: [
        {
          title: "Bespoke Furniture Design",
          description: "Tailor-made furniture to match your style and space",
        },
        {
          title: "Material Selection",
          description: "High-quality wood, metal, glass, and fabric options.",
        },
        {
          title: "Space Optimization",
          description: "Smart designs that maximize functionality.",
        },
        {
          title: "Handcrafted Details",
          description: "Unique craftsmanship with intricate detailing.",
        },
        {
          title: "Decor & Accessories",
          description:
            "Handpicked decor elements like lighting, rugs, and artwork",
        },
      ],
      image: image2,
    },
    {
      heading: "Commercial Spaces",
      points: [
        {
          title: "Office Design & Layout",
          description:
            "Creating functional and stylish workspaces that boost productivity.",
        },
        {
          title: "Retail Store Interiors",
          description:
            "Designing engaging and customer-friendly shopping environments.",
        },
        {
          title: "Restaurant & Café Ambience",
          description: "Crafting inviting and comfortable dining experiences.",
        },
        {
          title: "Hotel & Hospitality Interiors",
          description:
            "Enhancing guest experiences with elegant and cozy designs.",
        },
        {
          title: "Co-Working Spaces",
          description: "Designing flexible, collaborative work environments.",
        },
      ],
      image: image3,
    },
    {
      heading: "Space Planning",
      points: [
        {
          title: "Optimized Layouts",
          description:
            "Arranging furniture and elements for best functionality.",
        },
        {
          title: "Maximizing Space",
          description: "Making the most of every inch, whether small or large",
        },
        {
          title: "Zoning & Functionality",
          description:
            "Dividing areas for specific purposes like work, relaxation, or storage.",
        },
        {
          title: "Lighting & Ventilation",
          description:
            "Positioning lights and windows for a bright, airy feel.",
        },
        {
          title: "Aesthetic & Comfort",
          description: "Balancing beauty with practical, cozy living spaces.",
        },
      ],
      image: image4,
    },
    {
      heading: "Lighting Design",
      points: [
        {
          title: "Ambient Lighting",
          description: "Soft, overall lighting that sets the mood of a space",
        },
        {
          title: "Task Lighting",
          description:
            "Focused lighting for specific activities like reading, cooking, or working.",
        },
        {
          title: "Accent Lighting",
          description:
            "Highlights art, architectural features, or décor elements.",
        },
        {
          title: "Smart Lighting Solutions",
          description:
            "Automated, energy-efficient lighting with dimmers and sensors.",
        },
        {
          title: "Custom Lighting Plans",
          description: "Tailored designs to match your space and style.",
        },
      ],
      image: image5,
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-20">
      <div>
        <img
          src={servicesMain}
          alt="service img"
          className="w-full h-auto object-cover pt-24"
        />
        <h2 className="text-4xl sm:text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mt-10 text-center">
          Services
        </h2>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center my-16 md:my-20 p-4 md:p-14 hover:bg-black/5 rounded-lg`}
          >
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#17A396]">
                {service.heading}
              </h2>
              <ul className="text-sm sm:text-lg font-medium">
                {service.points.map((point, i) => (
                  <li key={i} className="mb-4 flex items-start gap-3">  
                    <RiArrowRightDoubleFill className="w-6 sm:w-7 h-6 sm:h-7 text-[#17A396]" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#0B0B0B]">
                        {point.title}
                      </h3>
                      <p className="text-[#0B0B0BCC]">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
              <div className="border-2 border-[#3A3A3A] p-4  md:w-96 md:h-96 absolute top-6 left-36 rounded-lg hidden md:block "></div>
              <img
                src={service.image}
                alt={service.heading}
                className="w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-lg z-10"
              />
            </div>
          </div>
        ))}

        {/* Project Management Section */}
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent text-center mb-8">
          Project Management
        </h2>
        <div className="relative">
          {/* Text Overlay Above Image */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-end z-10 p-4 md:p-6 ">
            <div className="w-full md:w-1/2 md:bg-white/20 bg-[#FFFFFF]  p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-md">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#17A396] mb-6">
                Project Management Services
              </h2>
              <ul className="text-sm sm:text-lg">
                {[
                  {
                    title: "Budgeting and Cost Estimation",
                    desc: "Establishing project budgets and estimating costs.",
                  },
                  {
                    title: "Scheduling and Timeline Management",
                    desc: "Coordinating project timelines and ensuring timely completion.",
                  },
                  {
                    title: "Permitting and Code Compliance",
                    desc: "Obtaining necessary permits and ensuring compliance with local building codes.",
                  },
                  {
                    title: "Quality Control and Assurance",
                    desc: "Monitoring project quality and addressing any issues that arise.",
                  },
                ].map((item, i) => (
                  <li key={i} className="mb-4 flex gap-2">
                    <RiArrowRightDoubleFill className="w-6 h-6 text-[#17A396]" />
                    <div>
                      <p className="font-semibold text-lg sm:text-xl">
                        {item.title}
                      </p>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={projectmanage}
            alt="Project Management"
            className="w-full h-[80vh] object-cover rounded-lg md:rounded-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
