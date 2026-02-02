function Contact() {
  return (
    <section className="article contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-details-wrapper">
        <div className="contact-details">
          <h3 className="h3">Get in touch</h3>

          <ul className="contact-info-list">
            <li>
              <div className="icon-box">
                <span>📧</span>
              </div>
              <div>
                <h5 className="h5">Email</h5>
                <a href="mailto:amine.sellali@email.com" className="contact-text">
                  amine.sellali@email.com
                </a>
              </div>
            </li>

            <li>
              <div className="icon-box">
                <span>📍</span>
              </div>
              <div>
                <h5 className="h5">Location</h5>
                <p className="contact-text">France</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Contact;
