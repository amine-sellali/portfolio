import { useLanguage } from "../context/LanguageContext";
import "./LanguageToggle.css";

function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-toggle">
            <button
                className={`lang-btn ${language === "fr" ? "active" : ""}`}
                onClick={() => setLanguage("fr")}
                aria-label="Passer au français"
            >
                FR
            </button>
            <span className="lang-separator">|</span>
            <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}

export default LanguageToggle;
