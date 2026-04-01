import React from "react";
import "./Header.css";
import { siteConfig } from "../config";

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC = () => {
  return (
    <header className="header glass-card">
      <div className="container header-content">
        <div className="logo serif">{siteConfig.nameEn}</div>
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
              <a href="/" onClick={scrollTo("publications")}>
                <span className="nav-en">PUBLICATIONS</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
