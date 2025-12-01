import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hand Sign Interpreter",
    description:
      "Built an AI-powered interpreter for SIBI to support the deaf-mute community.",
    image: "/projects/Hand_Sign_Interpreter_Port.png",
    tags: ["Python", "Mediapipe", "OpenCV"],
    URL: "https://github.com/claytonkoh/Hand-Sign-Interpreter",
    Github: "https://github.com/claytonkoh/Hand-Sign-Interpreter",
  },
  {
    id: 2,
    title: "Real Time Weather Classification using Machine Learning",
    description:
      "Developed a multi-page Streamlit web application for real-time weather prediction using classification models.",
    image: "/projects/Weather_Prediction.jpg",
    tags: ["Python", "Streamlit", "Machine Learning"],
    URL: "https://github.com/claytonkoh/weather_app",
    Github: "https://github.com/claytonkoh/weather_app",
  },
  {
    id: 3,
    title: "Catering Website Prototype",
    description:
      "Designed and developed a responsive static website for Catering,\
      Implemented modular layouts, performance optimization, and user-centered design principles,",
    image: "/projects/Catering.png",
    tags: ["HTML", "CSS", "JavaScript"],
    URL: "https://github.com/claytonkoh/CateringZ",
    Github: "https://github.com/claytonkoh/CateringZ",
  },
  {
    id: 4,
    title: "Full Stack E-Commerce Website",
    description:
      "A full-stack online shopping platform with product browsing, user authentication, and a smooth cart-to-checkout flow built using the MERN stack.",
      image: "/projects/MERN.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    URL: "https://github.com/claytonkoh/MERN-Ecommerce",
    Github: "https://github.com/claytonkoh/MERN-Ecommerce",
  },
  
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Welcome to my portfolio!! Here you will see some recent projects/research that I
          have done, ranging from AI Software, Web Development to UI/UX Design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 pb-14"> {/* tambah padding bawah agar tidak tertutup icon */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>

              {/* Icon di pojok kiri bawah */}
              <div className="absolute bottom-3 left-3 flex space-x-3">
                <a
                  href={project.URL}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                <a href={project.Github} target="_blank">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/claytonkoh"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
