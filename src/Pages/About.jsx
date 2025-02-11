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
              <div key={usp.id} className="flex flex-col items-center bg-white">
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
        <div className="flex flex-col gap-20 p-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-white rounded-2xl w-full md:w-1/2 text-center p-10">
              <h2 className="text-5xl font-semibold mb-6 text-[#17A396]">
                MISSION
              </h2>
              <p className="text-[#121212] text-lg font-medium">
                To create personalized, stylish, and functional interiors that
                enhance the way people live, work, and interact with their
                surroundings.
              </p>
            </div>
            <img
              src={image}
              alt="Mission"
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="bg-white rounded-2xl w-full md:w-1/2 text-center p-10">
              <h2 className="text-5xl font-semibold mb-6 text-[#17A396]">
                VISION
              </h2>
              <p className="text-[#121212] text-lg font-medium">
                To be a leading interior design company known for innovation,
                quality, and exceptional client experiences.
              </p>
            </div>
            <img
              src={image}
              alt="Vision"
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="text-4xl text-[#17A396] font-bold mr-4">✓</div>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Expert Team:</span> A blend of seasoned designers and fresh talent brings diverse perspectives to every project.
          </p>
        </div>
        <div className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="text-4xl text-[#17A396] font-bold mr-4">✓</div>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Client-Centric Approach:</span> We listen, collaborate, and prioritize your preferences at every step.
          </p>
        </div>
        <div className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="text-4xl text-[#17A396] font-bold mr-4">✓</div>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Attention to Detail:</span> Meticulous planning and execution to ensure every element is perfect.
          </p>
        </div>
        <div className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="text-4xl text-[#17A396] font-bold mr-4">✓</div>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Sustainable Practices:</span> Eco-conscious designs for a greener future.
          </p>
        </div>
        <div className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="text-4xl text-[#17A396] font-bold mr-4">✓</div>
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Project Management:</span> End-to-end solutions for seamless execution of your design projects.
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default About;
