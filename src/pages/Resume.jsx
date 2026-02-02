function Resume() {
  return (
    <section className="article resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <span>💼</span>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
            Software Developer – Chantiers de l’Atlantique
            </h4>
            <span>2024 — Present</span>
            <p className="timeline-text">
            Development of a web application using Python and Django to manage
            operational workflows. Implementation of CRUD features, business
            rules, and data persistence with a focus on code quality and
            maintainability.
            </p>
        </li>

        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
            Software Developer (TMA) – L’Oréal
            </h4>
            <span>2023 — 2024</span>
            <p className="timeline-text">
            Worked in application maintenance (TMA) on enterprise software.
            Bug fixing, feature enhancements, and collaboration with functional
            teams to ensure application stability and performance.
            </p>
        </li>

        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
            Embedded Software Intern – Aerospace Embedded Solutions (Germany)
            </h4>
            <span>2022</span>
            <p className="timeline-text">
            Tested and validated software architectures using MATLAB System
            Composer. Participated in modeling, verification, and documentation
            of embedded systems in an aerospace context.
            </p>
        </li>

        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
            Research Intern – CRIStAL Laboratory (Lille)
            </h4>
            <span>2021</span>
            <p className="timeline-text">
            Internship at the Computer Science, Signal, and Automatic Control
            Research Center. Studied embedded systems and participated in
            research-oriented software and hardware experimentation.
            </p>
        </li>
        </ol>
      </section>

        {/* Education */}
        <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box">
            <span>🎓</span>
            </div>
            <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
                MBA – Business School of Management, Lille
            </h4>
            <span>2025</span>
            <p className="timeline-text">
                Master of Business Administration with a focus on management,
                strategy, and organizational performance.
            </p>
            </li>

            <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
                Master Degree in Embedded Systems – Polytech Lille
            </h4>
            <span>2022 — 2024</span>
            <p className="timeline-text">
                Engineering degree specialized in embedded systems, combining
                software development, electronics, and system-level design.
            </p>
            </li>

            <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
                Preparatory Classes for Engineering Schools (CPGE)
            </h4>
            <span>2020 — 2021</span>
            <p className="timeline-text">
                Intensive scientific training in physics, technology, and
                engineering sciences.
            </p>
            </li>

            <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
                Scientific Baccalaureate
            </h4>
            <span>2019</span>
            <p className="timeline-text">
                Scientific high school diploma with a strong foundation in
                mathematics and sciences.
            </p>
            </li>
        </ol>
        </section>

        {/* Skills */}
        <section className="skill">
        <h3 className="h3 skills-title">Skills</h3>

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
