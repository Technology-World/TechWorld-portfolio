import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import myImage from '../assets/images/myImage.png';

function About({ onProjectsClick }) {
  const [ref, visible] = useFadeInOnScroll();

  // resume handler
  const handleClick = () => {
    window.open(
      "https://docs.google.com/document/d/12WF8F3hScuRo4jN5uD6Bg6wL9TCkJnhCiU2NRSqcrkI/edit?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      ref={ref}
      className={`bg-[url(./assets/background/bg1.jpg)] bg-cover bg-no-repeat fade-in-section ${visible ? 'visible' : ''} flex flex-col md:flex-row w-full text-white p-10 pt-20 lg:px-44`}
    >
      <section className="w-full flex flex-col md:justify-center gap-4">
        {/* Gradient Heading */}
        <div className="flex flex-col gap-2 text-2xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          <h1 className=''>
            Frontend Developer &
          </h1>
          <h1 className=''>
            IT Support Specialist
          </h1>
          <h1 className='text-sm italic mb-10 font-light'>
            “Turning ideas into sleek, responsive web apps—while keeping tech running seamlessly.”
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl max-w-xl">
          I build fast, responsive web apps with React and modern tools—while providing reliable IT support to keep everything running smoothly.
        </p>

        {/* Button */}
        <div className='flex flex-col md:flex-row md:gap-3'>
          <button
            onClick={onProjectsClick}
            className="w-[50%] md:w-[30%] mt-8 inline-block p-2 lg:px-6 lg:py-3 text-white rounded-full border-2 border-t-pink-500 border-b-purple-500 border-x-blue-500 hover:bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 transition duration-300 lg:uppercase"
          >
            View my work
          </button>
          <button
            onClick={handleClick}
            className="w-[50%] md:w-[30%] mt-8 inline-block p-2 lg:px-6 lg:py-3 text-white rounded-full border-2 border-t-pink-500 border-b-purple-500 border-x-blue-500 hover:bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 transition duration-300 lg:uppercase"
          >
            View my resume
          </button>
        </div>

      </section>

      <section className='w-[50%] justify-center items-center text-center hidden md:flex'>
        <img src={myImage} alt="Frontend Developer" className="h-auto object-contain" />
      </section>
    </div>
  );
}

export default About;
