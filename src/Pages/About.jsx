import image from "/images/slide2.jpg";
const About = () => {
  const uspData = [
    { id: 50, img: "/vectors/completed-task.png", text: "Completed Projects" },
    { id: 5, img: "/vectors/experience.png", text: "Years Of Experience" },
    { id: "100+", img: "/vectors/costumer.png", text: "Satisfied Clients" },
  ];
  return (
    <div className="min-h-screen w-full p-20">
      <div>
        <img src={image} alt="about img" />
        <div className="py-24 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
            {uspData.map((usp) => (
              <div
                key={usp.id}
                className="flex flex-col items-center mx-10 p-6 bg-white  shadow-lg rounded-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={usp.img}
                  alt={usp.text}
                  className="h-20 w-20 object-cover"
                />
                <div className="text-5xl font-semibold text-[#000000] mt-6">
                  {usp.id}
                </div>
                <p className="text-lg font-semibold text-[#121212] mt-4">
                  {usp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-20 p-24 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-white rounded-2xl w-full md:w-1/2">
              <h2 className="text-5xl font-semibold mb-6 text-[#17A396] text-left">
                MISSION
              </h2>
              <p className="text-[#0B0B0B] text-lg font-medium text-left">
                Our mission is to create personalized, stylish, and functional
                interiors that seamlessly blend aesthetics with practicality. We
                strive to design spaces that not only reflect individuality but
                also enhance the way people live, work, and interact with their
                surroundings. Through innovation, attention to detail, and a
                client-focused approach, we transform interiors into inspiring,
                comfortable, and highly functional environments that elevate
                everyday experiences.
              </p>
            </div>
            <img
              src={image}
              alt="Mission"
              className="w-full md:w-1/2 h-80 object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="bg-white rounded-2xl w-full md:w-1/2">
              <h2 className="text-5xl font-semibold mb-6 text-[#17A396] text-left">
                VISION
              </h2>
              <p className="text-[#0B0B0B] text-lg font-medium text-left">
                Our vision is to be a leading interior design company recognized
                for innovation, superior quality, and exceptional client
                experiences. We aspire to set new standards in the industry by
                transforming spaces with creativity, functionality, and
                sustainability. Through a commitment to excellence and a deep
                understanding of our clients&apos; needs. Our goal is to be the
                go-to choice for those seeking extraordinary design solutions
                that blend elegance, comfort, and practicality.
              </p>
            </div>
            <img
              src={image}
              alt="Vision"
              className="w-full md:w-1/2 h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="py-16 bg-black/5 rounded-lg mb-16">
          <h2 className="text-center text-4xl font-bold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-16">
            Why Choose Us?
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-16 text-lg text-[#0B0B0B]">
            <div className="flex items-start space-x-6">
              <span className="font-semibold text-5xl text-[#0B0B0BCC]">01</span>
              <div>
                <h3 className="font-semibold text-2xl text-[#17A396]">
                Expert Team
                </h3>
                <p className="mt-2">
                A blend of seasoned designers and fresh talent brings diverse
                perspectives to every project.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="font-semibold text-5xl text-[#0B0B0BCC]">02</span>
              <div>
                <h3 className="font-semibold text-2xl text-[#17A396]">
                Client-Centric Approach
                </h3>
                <p className="mt-2 ">
                We listen, collaborate, and prioritize your preferences at every
                step.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="font-semibold text-5xl text-[#0B0B0BCC]">03</span>
              <div>
                <h3 className="font-semibold text-2xl text-[#17A396]">
                Attention to Detail
                </h3>
                <p className="mt-2">
                Meticulous planning and execution to ensure every element is
              perfect.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="font-semibold text-5xl text-[#0B0B0BCC]">04</span>
              <div>
                <h3 className="font-semibold text-2xl text-[#17A396]">
                Sustainable Practices
                </h3>
                <p className="mt-2">
                End-to-end solutions for seamless execution of your design
                projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <h2 className="text-2xl">Testimonials</h2>
        </div> */}
      </div>
    </div>
  );
};

export default About;
