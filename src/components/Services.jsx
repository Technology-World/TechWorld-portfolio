import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

function Services() {
    const [ref, visible] = useFadeInOnScroll();

    // Centralized data for all services
    const services = [
        {
            title: "Website Development",
            description:
                "I design and build fast, responsive, and user-friendly websites using React.js, JavaScript, HTML, CSS, TailwindCSS, and Bootstrap.",
            tagline: "Modern, Responsive Websites",
            icon: "💻",
        },
        {
            title: "IT Support & Troubleshooting",
            description:
                "With a background in IT support, I provide hardware/software troubleshooting, technical assistance, and maintenance for businesses and individuals.",
            tagline:"Reliable Tech Assistance",
            icon: "🛠",
        },
        {
            title: "API Integration & State Management",
            description:
                "I integrate REST APIs and manage data efficiently using Redux Toolkit, React Query, and Context API to deliver smooth, dynamic experiences.",
            tagline: "Seamless Data Handling",
            icon: "🔗",
        },
        {
            title: "Backend & Database Knowledge",
            description:
                "Intermediate experience with PHP, MySQL, Java, and Python allows me to support backend processes and enhance full-stack projects when needed.",
            tagline: "Full-Stack Understanding",
            icon: "⚙️",
        },
        {
            title: "Debugging & Optimization",
            description:
                "I write maintainable, scalable code and excel in debugging and optimizing applications for performance and reliability.",
            tagline:"Clean, Scalable Code",
            icon: "⚡",
        },
        {
            title: "Resume Writing & Career Branding",
            description:
                "I help craft clear, compelling, and ATS-friendly resumes tailored to your skills and experience. With a strong understanding of the tech industry, I highlight your strengths, optimize for keywords, and create a professional profile that boosts your chances of landing interviews.",
            tagline: "Professional Resumes That Get You Noticed",
            icon: "📄",
        },
    ];

    return (
        <div
            ref={ref}
            className={`relative min-h-screen p-10 pt-20 bg-[url(./assets/background/bg2.jpg)] bg-cover bg-no-repeat fade-in-section ${visible ? "visible" : ""
                }`}
        >
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-5 text-white">
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                    My Services
                </span>
            </h2>

            {/* Services Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full bg-black/50 border border-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 shadow-md text-white hover:scale-105 transition-transform"
                    >
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            {service.tagline && (
                                <p className="text-sm text-pink-400 font-medium mb-1 italic">{service.tagline}</p>
                            )}
                            <p className="text-sm text-gray-300">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
