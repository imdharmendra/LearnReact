import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML/CSS",
    "Bootstrap",
    "Git",
    "RESTful APIs",
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <h3>Passionate about building efficient and scalable web apps.</h3>
            <p>
              With a strong foundation in web development and a passion for
              creating efficient, scalable applications, I specialize in
              building modern web solutions using the MERN stack.
            </p>
            <p>
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep understanding of
              full-stack development. I enjoy solving complex problems and
              creating user-friendly applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="skills"
          >
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="skill-item"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
