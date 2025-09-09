import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // lucide-react

function Navbar({
  onAboutClick,
  onServicesClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
  activeSection
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (callback) => {
    callback();
    setIsOpen(false);
  };

  const getLinkClass = (section) =>
    `relative text-sm md:text-base transition-all pb-1 ${
      activeSection === section
        ? 'text-blue-600 font-semibold underline-anim'
        : 'text-gray-700 hover:text-blue-500'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md p-4 flex items-center justify-between">
      <div>
        <button onClick={() => handleClick(onAboutClick)} className="font-bold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Adeosun Sodeeq Olalekan
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <button onClick={() => handleClick(onAboutClick)} className={getLinkClass('about')}>
          About
        </button>
        <button onClick={() => handleClick(onServicesClick)} className={getLinkClass('services')}>
          Services
        </button>
        <button onClick={() => handleClick(onSkillsClick)} className={getLinkClass('skills')}>
          Skills
        </button>
        <button onClick={() => handleClick(onProjectsClick)} className={getLinkClass('projects')}>
          Projects
        </button>
        <button onClick={() => handleClick(onContactClick)} className={getLinkClass('contact')}>
          Contact
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <button onClick={() => handleClick(onAboutClick)} className={getLinkClass('about')}>
            About
          </button>
          <button onClick={() => handleClick(onServicesClick)} className={getLinkClass('services')}>
            Services
          </button>
          <button onClick={() => handleClick(onSkillsClick)} className={getLinkClass('skills')}>
            Skills
          </button>
          <button onClick={() => handleClick(onProjectsClick)} className={getLinkClass('projects')}>
            Projects
          </button>
          <button onClick={() => handleClick(onContactClick)} className={getLinkClass('contact')}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
