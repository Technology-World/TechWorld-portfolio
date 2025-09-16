import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import furniture from "../assets/images/furniture.png";
import weather from "../assets/images/weather.png";
import socialMedia from "../assets/images/socialMedia.png";
import ticketing from "../assets/images/e-ticketing.png";
import todo from "../assets/images/todo.png";
import { Link } from "react-router-dom";

function Projects() {
  const [ref, visible] = useFadeInOnScroll();

  const data = [
    {
      id: 1,
      image: furniture,
      name: "Web Development (API Integration)",
      description: "A website with a focus on minimal design, mobile responsiveness, and engaging product displays.",
      tools: "HTML, CSS, React JS, Tailwind",
      link: "https://furniture-app-umber.vercel.app/"
    },
    {
      id: 2,
      image: weather,
      name: "Weather Forecast App (API Integration)",
      description: "Responsive weather app showing live forecasts",
      tools: "HTML, CSS, Vanilla JS",
      link: "https://weather-api-orpin-sigma.vercel.app/"
    },
    {
      id: 3,
      image: ticketing,
      name: "E-Ticketing Platform (API Integration)",
      description: "A responsive web app for seamless online ticket booking, featuring secure checkout, and smooth user experience.",
      tools: "HTML, CSS, React JS, Taiwind",
      link: "https://e-ticketing-wheat.vercel.app/"
    },
    {
      id: 4,
      image: socialMedia,
      name: "My Social Media Hub",
      description: "A simple hub with my social and professional links",
      tools: "HTML, CSS",
      link: "https://mysocialmedia-roan.vercel.app/"
    },
    {
      id: 5,
      image: todo,
      name: "Minimal React Todo App",
      description: "A clean and responsive React Todo app for managing tasks effortlessly. Add, complete, and delete tasks with a smooth, modern UI",
      tools: "HTML, CSS, React JS",
      link: "https://todo-app-cyan-nine-55.vercel.app/"
    },
  ]

  return (
    <div
      ref={ref}
      className={`p-10 pt-20 bg-[url(./assets/background/bg4.jpg)] bg-cover bg-no-repeat fade-in-section ${visible ? 'visible' : ''}`}
    >
      {/* Section header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10 text-white">
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto my-7 items-center'>

        {/* Content mapping */}
        {data.map(data => (
          <div
            key={data.id}
            className='border border-neutral-600 rounded-xl bg-neutral-800 text-white'
          >

            <Link to={data.link} target='blank' className="flex flex-col">
              <img
                src={data.image}
                alt="weather API img"
                className="w-full lg:h-[250px] object-cover rounded-t-xl hidden md:block"
                aria-label={data.name}
              />

              <div className="lg:h-[170px] p-3 lg:text-center space-y-2">
                <p className="text-lg font-semibold text-pink-400">{data.name}</p>
                <p className="text-medium text-gray-300 italic">{data.description}</p>
                <p className="text-medium text-blue-400">{"{ "}{data.tools}{" }"}</p>
              </div>
            </Link>

          </div>
        ))}</div>
    </div>
  );
}

export default Projects;
