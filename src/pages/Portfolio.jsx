import "../styles/portfolio.css";
import { useLanguage } from "../context/LanguageContext";

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section className="article portfolio">
      <header>
        <h2 className="h2 article-title">{t("portfolio.title")}</h2>
      </header>

      <section className="portfolio-posts">
        <ul className="portfolio-posts-list">
          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/portfolio" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">{t("portfolio.projects.project1.category")}</p>
                <h3 className="h3 portfolio-item-title">{t("portfolio.projects.project1.title")}</h3>
                <p className="portfolio-text">
                  {t("portfolio.projects.project1.description")}
                </p>
              </div>
            </a>
          </li>

          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/django-project" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">{t("portfolio.projects.project2.category")}</p>
                <h3 className="h3 portfolio-item-title">{t("portfolio.projects.project2.title")}</h3>
                <p className="portfolio-text">
                  {t("portfolio.projects.project2.description")}
                </p>
              </div>
            </a>
          </li>

          <li className="portfolio-post-item">
            <a href="https://github.com/TON_USERNAME/embedded-project" target="_blank" rel="noopener noreferrer">
              <div className="portfolio-content">
                <p className="portfolio-category">{t("portfolio.projects.project3.category")}</p>
                <h3 className="h3 portfolio-item-title">{t("portfolio.projects.project3.title")}</h3>
                <p className="portfolio-text">
                  {t("portfolio.projects.project3.description")}
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
