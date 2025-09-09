import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { GrContact } from "react-icons/gr";
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [ref, visible] = useFadeInOnScroll();

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mandaaly", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      form.reset();
    } else {
      setStatus({ type: "error", message: "❌ Oops! Something went wrong." });
    }

    // Hide after 4s
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div
      ref={ref}
      className={`min-h-screen p-10 pt-20 bg-[url(./assets/background/bg5.jpg)] bg-cover bg-no-repeat fade-in-section ${visible ? 'visible' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10 text-white">
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Have a project to discuss
        </span>
      </h2>
      {/* Main content */}
      <main className='w-full flex flex-col lg:flex-row justify-between items-start text-white'>
        {/* Left section */}
        <section className='w-full lg:w-[50%]'>
          <h3 className='flex items-center gap-x-2 text-2xl mb-8'>Get in touch {<GrContact className='text-lg' />} </h3>
          <div className='w-full flex justify-right'>
            <div className='w-full'>
              <h4 className='text-lg uppercase pb-3'>Contact</h4>
              <Link to="mailto:sodeeqadeosun@gmail.com" className='text-blue-500 hover:underline focus:underline'>sodeeqadeosun@gmail.com</Link>
            </div>

            <div className='w-full'>
              <h4>Social Media</h4>
              {/* social media icon section */}
              <div className='flex gap-3 py-4'>
                <Link to="https://www.linkedin.com/in/sodeeqadeosun" target='_blank'> {<FaLinkedin />} </Link>
                <Link to="https://github.com/Technology-World" target='_blank'> {<FaGithub />} </Link>
                <Link to="https://wa.me/+2348075327786" target='_blank'> {<FaWhatsapp />} </Link>
                <Link to="tel:+2348111341137"> {<FaPhone />} </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Right section */}
        <section className='w-full lg:w-[50%]'>
          <h4 className='text-lg uppercase pb-3'>Contact Form</h4>
          <p className="text-gray-800 mb-8">
            Have a question or want to work together? Send me a message!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-neutral-500 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-neutral-500 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 border border-neutral-500 rounded-lg h-32"
              required
            />
            <button
              type="submit"
              className="max-w-40 mt-8 inline-block px-6 py-3 text-white bg-transparent rounded-full border-2 border-t-pink-500 border-b-purple-500 border-x-blue-500 hover:bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Simple success/error alert */}
          {status && (
            <div
              className={`mt-4 px-4 py-2 rounded-lg flex text-white font-medium ${status.type === "success" ? "bg-blue-500" : "bg-red-600"
                }`}
            >
              <IoCheckmark /> {status.message}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Contact;
