import "../styles/about.css";

function About() {
    return (
        <section className="article about">
            <header>
                <h2 className="h2 article-title">About</h2>
            </header>

            <section className="about-text">
                <p>
                    I’m Amine Sellali, a software developer based in France.
                    I enjoy building clean, maintainable applications and learning
                    new technologies along the way.
                </p>

                <p>
                    My background is in software engineering, with experience in
                    fullstack development and a strong interest in scalable systems
                    and well-structured codebases.
                </p>
            </section>

            <section className="highlights">
                <h3 className="h3 highlights-title">Highlights</h3>

                <ul className="highlights-list has-scrollbar">
                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">3+</h2>
                        <p className="service-item-text">YEARS OF EXPERIENCE</p>
                    </li>

                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">10+</h2>
                        <p className="service-item-text">PROJECTS COMPLETED</p>
                    </li>

                    <li className="highlights-item">
                        <h2 className="h2 service-item-title">5+</h2>
                        <p className="service-item-text">TECH STACKS USED</p>
                    </li>
                </ul>
            </section>

            <section className="showcase-posts">
                <header className="showcase-header">
                    <h3 className="h3 showcase-title">Featured Projects</h3>
                    <p className="showcase-text">
                        A selection of projects that reflect my technical journey.
                    </p>
                </header>

                <ul className="showcase-posts-list">
                    <li className="showcase-post-item">
                        <a href="https://github.com/TON_USERNAME" target="_blank" rel="noopener noreferrer">
                            <div className="showcase-content">
                                <h3 className="h3 showcase-item-title">Portfolio Website</h3>
                                <p className="showcase-text">
                                    Personal portfolio built with React, focusing on clean architecture
                                    and modern UI.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="showcase-post-item">
                        <a href="https://github.com/TON_USERNAME" target="_blank" rel="noopener noreferrer">
                            <div className="showcase-content">
                                <h3 className="h3 showcase-item-title">Side Project</h3>
                                <p className="showcase-text">
                                    A personal project to experiment with new technologies and patterns.
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
