import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section className="article contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <div className="contact-form-box">

        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="input-wrapper">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-input"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
              required
            />

          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            className="form-input"
            required
          ></textarea>

          <button type="submit" className="form-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;