import servicesMain from "/images/living14.jpg";
import image5  from "/images/hall9.jpg";
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
          title: "Handcrafted Details ",
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
          title: "Zoning & Functionality ",
          description:
            "Dividing areas for specific purposes like work, relaxation, or storage..",
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
          title: "Task Lighting ",
          description:
            "Focused lighting for specific activities like reading, cooking, or working.",
        },
        {
          title: "Accent Lighting ",
          description:
            "Highlights art, architectural features, or décor elements.",
        },
        {
          title: "mart Lighting Solutions",
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
    <div className="min-h-screen w-full p-20">
      <img src={servicesMain} alt="service img" />
      <h2 className="text-6xl font-medium bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mt-10 text-center ">
        Services
      </h2>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } items-center justify-between my-20 px-4 py-14 hover:bg-black/5 rounded-lg`}
        >
          <div className="w-1/2 px-8">
            <h2 className="text-4xl font-semibold mb-8 text-[#17A396]">
              {service.heading}
            </h2>
            <ul className="pl-5 text-xl font-medium">
              {service.points.map((point, i) => (
                <li key={i} className="mb-4 flex items-start gap-4">
                  <RiArrowRightDoubleFill className=" w-7 h-7 text-[#17A396]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B0B0B]">
                      {point.title}
                    </h3>
                    <p className="text-[#0B0B0BCC] text-lg">
                      {point.description}
                    </p>
                  </div>
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
            src={projectmanage}
            alt="Project Management"
            className="w-full h-[80vh] object-cover"
          />
        </div>
        <div className="relative z-10 flex justify-end mb-20 p-6">
  <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-[#17A396] mb-8">
      Project Management Services
    </h2>
    <ul className="pl-6 space-y-4 text-[#0B0B0B] text-lg leading-relaxed">
      <li className="flex gap-2">
        <RiArrowRightDoubleFill className="w-7 h-7 text-[#17A396] mt-1" />
        <div>
          <p className="font-semibold text-xl">Budgeting and Cost Estimation</p>
          <p>Establishing project budgets and estimating costs.</p>
        </div>
      </li>

      <li className="flex gap-2">
        <RiArrowRightDoubleFill className="w-7 h-7 text-[#17A396] mt-1" />
        <div>
          <p className="font-semibold text-xl">Scheduling and Timeline Management</p>
          <p>Coordinating project timelines and ensuring timely completion.</p>
        </div>
      </li>

      <li className="flex gap-2">
        <RiArrowRightDoubleFill className="w-9 h-9 text-[#17A396] mt-1" />
        <div>
          <p className="font-semibold text-xl">Permitting and Code Compliance</p>
          <p>Obtaining necessary permits and ensuring compliance with local building codes.</p>
        </div>
      </li>

      <li className="flex gap-2">
        <RiArrowRightDoubleFill className="w-7 h-7 text-[#17A396] mt-1" />
        <div>
          <p className="font-semibold text-xl">Quality Control and Assurance</p>
          <p>Monitoring project quality and addressing any issues that arise.</p>
        </div>
      </li>
    </ul>
  </div>
</div>
      </div>
    </div>
  );
};

export default Services;
