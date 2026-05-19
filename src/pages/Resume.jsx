import "../styles/resume.css";
import { useLanguage } from "../context/LanguageContext";

function Resume() {
    const { t } = useLanguage();
    return (
        <section className="article resume">
            <header>
                <h2 className="h2 article-title">{t("resume.title")}</h2>
            </header>

            {/* Experience */}
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suitcase-lg" viewBox="0 0 16 16">
                            <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
                        </svg>
                    </div>
                    <h3 className="h3">{t("resume.experience.title")}</h3>
                </div>

                <ul className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.experience.job1.title")}
                        </h4>
                        <span>{t("resume.experience.job1.period")}</span>
                        <p className="timeline-text">
                            {t("resume.experience.job1.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.experience.job2.title")}
                        </h4>
                        <span>{t("resume.experience.job2.period")}</span>
                        <p className="timeline-text">
                            {t("resume.experience.job2.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.experience.job3.title")}
                        </h4>
                        <span>{t("resume.experience.job3.period")}</span>
                        <p className="timeline-text">
                            {t("resume.experience.job3.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.experience.job4.title")}
                        </h4>
                        <span>{t("resume.experience.job4.period")}</span>
                        <p className="timeline-text">
                            {t("resume.experience.job4.description")}
                        </p>
                    </li>
                </ul>
            </section>

            {/* Education */}
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                        </svg>
                    </div>
                    <h3 className="h3">{t("resume.education.title")}</h3>
                </div>

                <ul className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.education.degree1.title")}
                        </h4>
                        <span>{t("resume.education.degree1.period")}</span>
                        <p className="timeline-text">
                            {t("resume.education.degree1.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.education.degree2.title")}
                        </h4>
                        <span>{t("resume.education.degree2.period")}</span>
                        <p className="timeline-text">
                            {t("resume.education.degree2.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.education.degree3.title")}
                        </h4>
                        <span>{t("resume.education.degree3.period")}</span>
                        <p className="timeline-text">
                            {t("resume.education.degree3.description")}
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            {t("resume.education.degree4.title")}
                        </h4>
                        <span>{t("resume.education.degree4.period")}</span>
                        <p className="timeline-text">
                            {t("resume.education.degree4.description")}
                        </p>
                    </li>
                </ul>
            </section>

            {/* Skills */}
            <section className="skill">
                <h3 className="h3 skills-title">{t("resume.skills.title")}</h3>

                <ul className="skills-list content-card">
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Python / Django</h5>
                            <data value="85">85%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "85%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">C / C++</h5>
                            <data value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Java / Spring</h5>
                            <data value="70">70%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">JavaScript / React</h5>
                            <data value="65">65%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "65%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Embedded Systems</h5>
                            <data value="75">75%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "75%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Git / GitHub</h5>
                            <data value="90">90%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                        </div>
                    </li>
                </ul>
            </section>


        </section>
    );
}

export default Resume;
