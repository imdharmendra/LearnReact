import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let s Talk</h1>
          <p>
            I m currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ds1489352@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 123-456-7890</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida, UP India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
