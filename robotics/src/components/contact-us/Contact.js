import {} from "./contact.css";
import Button from "@mui/material/Button";
import contactbot from "../../images/PNG/contactbot.png";

const Contact = () => {
  const btnstyles = {
    background: "rgb(229,246,255)",
    "&:hover": {
      background: "rgb(28,203,200)",
    },
    width: "200px",
    borderradius: "30px",
    padding: "13px",
    boxshadow: "5px 5px #F8F3FC",
    fontweight: "500",
    color: "black",
    mt: "20px",
    alignSelf: "center",
  };

  return (
    <div>
      <div className="header">
        <img src={contactbot} width="300px" className="contact-img" />
        <div className="contact-header-content">
          <h1>We want to hear from you!</h1>
          <form className="contact-form">
            {/* <i class="fas fa-user"></i> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="contact-form-input"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="contact-form-input"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="contact-form-input"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Message"
              className="contact-form-input"
            ></textarea>
            <Button sx={btnstyles}>Send</Button>
          </form>
        </div>
      </div>
      <section className="map">
        <h1>You can find us here!</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.88367457688827!2d10.737576316396758!3d34.72864510018759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d179b20acfe7%3A0x7a82ded557c84c94!2sInstitut%20International%20de%20Technologie!5e0!3m2!1sen!2stn!4v1661181783537!5m2!1sen!2stn"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
