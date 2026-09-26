import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { siteConfig } from "../config";
import { storeLang, useLang, type Lang } from "../i18n";

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LANGS: { lang: Lang; path: string; label: string }[] = [
  { lang: "ja", path: "/", label: "JA" },
  { lang: "en", path: "/en", label: "EN" },
];

const LangSwitch: React.FC = () => {
  const current = useLang();

  return (
    <div className="lang-switch" aria-label="Language">
      {LANGS.map(({ lang, path, label }, index) => (
        <React.Fragment key={lang}>
          {index > 0 && (
            <span className="lang-switch-divider" aria-hidden="true">
              /
            </span>
          )}
          <Link
            to={path}
            className={`lang-switch-link${lang === current ? " is-active" : ""}`}
            onClick={() => storeLang(lang)}
            aria-current={lang === current ? "true" : undefined}
            lang={lang}
          >
            {label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header glass-card">
      <div className="container header-content">
        <div className="logo serif">{siteConfig.nameEn}</div>
        <div className="header-actions">
          <nav className="nav">
            <ul>
              <li>
                <a href="/" onClick={scrollTo("top")}>
                  <span className="nav-en">TOP</span>
                </a>
              </li>
              <li>
                <a href="/" onClick={scrollTo("biography")}>
                  <span className="nav-en">BIOGRAPHY</span>
                </a>
              </li>
              <li>
                <a href="/" onClick={scrollTo("awards")}>
                  <span className="nav-en">AWARDS</span>
                </a>
              </li>
              <li>
                <a href="/" onClick={scrollTo("publications")}>
                  <span className="nav-en">PUBLICATIONS</span>
                </a>
              </li>
            </ul>
          </nav>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
