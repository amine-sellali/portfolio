import "../styles/portfolio.css";

function Portfolio() {
  return (
    <section className="article portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="portfolio-posts">
        <ul className="portfolio-posts-list">
          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/portfolio" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">Web</p>
                <h3 className="h3 portfolio-item-title">Personal Portfolio</h3>
                <p className="portfolio-text">
                  Portfolio website built with React and Vite to showcase my
                  background, experience, and projects.
                </p>
              </div>
            </a>
          </li>

          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/django-project" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">Backend</p>
                <h3 className="h3 portfolio-item-title">Django Web Application</h3>
                <p className="portfolio-text">
                  Web application developed with Python and Django for
                  business workflow management.
                </p>
              </div>
            </a>
          </li>

          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/embedded-project" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">Embedded</p>
                <h3 className="h3 portfolio-item-title">Embedded Systems Project</h3>
                <p className="portfolio-text">
                  Embedded software project involving system modeling,
                  testing, and validation.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Portfolio;
