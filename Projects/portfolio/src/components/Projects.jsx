import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Quill AI",
      description: "AI chatbot application fetch real time data from google.",
      technologies: ["HTML", "CSS", "React.js", "API"],
      image:
        "https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200",
      github: "https://github.com/imdharmendra/QuillAI",
      demo: "https://quill-ai.netlify.app/",
    },
    {
      title: "SnapSoft",
      description:
        "A Blog application with real-time updates and sorting features.",
      technologies: ["HTML", "CSS", "React.js", "API"],
      image:
        "https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg",
      github: "https://github.com/imdharmendra/SnapSoft",
      demo: "https://snapsoft.netlify.app/",
    },
    {
      title: "Unispark",
      description:
        "A web application for represent the courses of an institute.",
      technologies: ["HTML", "CSS", "React.js"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3oHcTzHajFdOT5ymRaUU35Rgedjk3M2iSA&s",
      github: "https://github.com/imdharmendra/Unispark",
      demo: "https://unispark.netlify.app/",
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
