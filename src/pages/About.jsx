import "../styles/about.css";
import { useLanguage } from "../context/LanguageContext";

function About() {
    const { t } = useLanguage();
    return (
        <section className="article about">
            <header>
                <h2 className="h2 article-title">{t("about.title")}</h2>
            </header>

            <section className="about-text">
                <p>
                    {t("about.intro1")}
                </p>

                <p>
                    {t("about.intro2")}
                </p>
            </section>

            <section className="highlights">
                <h3 className="h3 highlights-title">{t("about.highlights.title")}</h3>

                <ul className="highlights-list has-scrollbar">
                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">3+</h2>
                        <p className="service-item-text">{t("about.highlights.experience")}</p>
                    </li>

                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">10+</h2>
                        <p className="service-item-text">{t("about.highlights.projects")}</p>
                    </li>

                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">5+</h2>
                        <p className="service-item-text">{t("about.highlights.stacks")}</p>
                    </li>
                </ul>
            </section>

            <section className="showcase-posts">
                <header className="showcase-header">
                    <h3 className="h3 showcase-title">{t("about.featured.title")}</h3>
                    <p className="showcase-text">
                        {t("about.featured.text")}
                    </p>
                </header>

                <ul className="showcase-posts-list">
                    <li className="showcase-post-item">
                        <a href="https://github.com/TON_USERNAME" target="_blank" rel="noopener noreferrer">
                            <div className="showcase-content">
                                <h3 className="h3 showcase-item-title">{t("about.featured.project1.title")}</h3>
                                <p className="showcase-text">
                                    {t("about.featured.project1.description")}
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="showcase-post-item">
                        <a href="https://github.com/TON_USERNAME" target="_blank" rel="noopener noreferrer">
                            <div className="showcase-content">
                                <h3 className="h3 showcase-item-title">{t("about.featured.project2.title")}</h3>
                                <p className="showcase-text">
                                    {t("about.featured.project2.description")}
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>


        </section>
    );
}

export default About;
