import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2422c43a-fe8f-41eb-86fa-1a90880af28d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>ds1489352@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 7906655492</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Hapur, Uttar Pradesh <br /> India
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message here"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit now
            </button>
            <span>{result}</span>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
