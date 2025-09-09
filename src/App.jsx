import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const [scrollPercent, setScrollPercent] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update footer height dynamically
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.onsetHeight);
    }
  }, []);

  // Smooth scroll
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Track active section + update URL
  useEffect(() => {
    const sections = [
      { ref: aboutRef, id: "about" },
      { ref: servicesRef, id: "services" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setActiveSection(id);

            // 🔹 Update the URL hash without reloading
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.setAttribute("data-id", section.id);
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Navbar */}
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
        activeSection={activeSection}
      />

      {/* Main content (with dynamic bottom padding) */}
      <main className="flex flex-col flex-grow" style={{ paddingBottom: footerHeight }}>
        <section ref={aboutRef}>
          <About onProjectsClick={() => scrollToSection(projectsRef)} />
        </section>

        <section ref={servicesRef}>
          <Services />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      {/* Footer measured with ref */}
      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full text-white text-center z-50"
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
