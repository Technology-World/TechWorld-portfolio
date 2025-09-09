import React from "react";

// const projects = [
//   {
//     title: "E-Ticketing Website",
//     description: "A responsive event ticket booking platform built with React.js.",
//     liveLink: "https://e-ticketing.vercel.app",
//     github: "https://github.com/yourusername/e-ticketing"
//   },
//   {
//     title: "Weather App",
//     description: "Weather app showing real-time weather using the OpenWeather API.",
//     liveLink: "https://weather-now.vercel.app",
//     github: "https://github.com/yourusername/weather-app"
//   }
// ];

function Portfolio() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#101622]">
      <header className="flex mt-[30px] border-[#282e3a] border-1 rounded-2xl justify-between mx-44 p-8 text-white">
        <h2 className="uppercase">Adeosun Sodeeq</h2>
        <div className="flex gap-8">
          <p>Services</p>
          <p>Skills</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
      </header>
    </div>
  );
}

export default Portfolio;