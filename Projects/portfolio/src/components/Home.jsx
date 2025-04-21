import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Creating responsive and performant web applications with modern frameworks and tools.",
    },
    {
      icon: "fas fa-globe",
      title: "API Integration Services",
      description:
        "Third-party API integrations (payment gateways, maps, chat). Third-party API integrations (payment gateways, maps, chat)",
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description:
        "Designing efficient database schemas and implementing robust data management solutions.",
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description:
        "Creating scalable APIs and server-side applications with Node.js and Express.",
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "Project Deployment & Hosting",
      description:
        "Deploy apps on Render, Vercel, Netlify. Environment configuration and optimization",
    },
    {
      icon: "fas fa-vector-square",
      title: "Custom Dashboard/Admin Panel Development",
      description:
        "Build interactive dashboards using React & Chart libraries. Integration with analytics or third-party APIs",
    },
  ];

  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "250+", label: "Learning Hours" },
    { value: "8+", label: "Technologies Used" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      content:
        "Delivered a portfolio website that was professional, fast, and well-designed. Very easy to communicate with and open to feedback!",
      author: "Atul Joshi",
      position: "Freelance Client (UI/UX Designer)",
      avatar:
        "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    },
    {
      content:
        "Great grasp of the MERN stack and clean coding practices. His GitHub activity and dedication to continuous learning are impressive.",
      author: "Riya Mehra",
      position: "Technical Mentor",
      avatar:
        "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    },
    {
      content:
        "Working with Dharmendra was a great experience. He quickly understood the project requirements and delivered a responsive full-stack app.",
      author: "Amit Sinha",
      position: "Startup Founder",
      avatar:
        "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1>Hi, I'm Dharmendra</h1>
              <p className="hero-description">
                I design and develop full-stack web applications using MongoDB,
                Express.js, React, and Node.js that are fast, scalable, and
                user-friendly.
              </p>
              <div className="hero-buttons">
                <Link
                  to="https://drive.google.com/file/d/1bRiMIP4D2FEK-_lhO9LzWonsPN13f4yG/view?usp=drive_link"
                  className="btn btn-primary"
                  target="_blank"
                >
                  My Resume
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image"
            >
              <div className="tech-stack">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2>My Services</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-grid"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-item"
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-title">
            <h2>My Work Process</h2>
          </div>
          <div className="process-steps">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="process-step"
            >
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>
                Understanding your requirements, goals, and vision for the
                project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="process-step"
            >
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>
                Developing a comprehensive strategy and roadmap for
                implementation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="process-step"
            >
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>
                Building the solution with clean, maintainable code and best
                practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="process-step"
            >
              <div className="step-number">4</div>
              <h3>Deployment</h3>
              <p>
                Launching your project and ensuring everything runs smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Ready to start your project?</h2>
            <p>Let's work together to bring your ideas to life.</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
