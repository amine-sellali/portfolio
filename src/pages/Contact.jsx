import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {

  const form = useRef();
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ).then(
      () => {
        alert(t("contact.form.successMessage"));
        form.current.reset();
      },
      () => {
        alert(t("contact.form.errorMessage"));
      }
    );
  };

  return (
    <section className="article contact">

      <header>
        <h2 className="h2 article-title">{t("contact.title")}</h2>
      </header>

      <div className="contact-form-box">

        <h3 className="h3 form-title">{t("contact.formTitle")}</h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="input-wrapper">

            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              className="form-input"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              className="form-input"
              required
            />

          </div>

          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            className="form-input"
            required
          ></textarea>

          <button type="submit" className="form-btn">
            {t("contact.form.send")}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;