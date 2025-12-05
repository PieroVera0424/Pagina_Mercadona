import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoMercadona from "../assets/mercadona.svg";
import "./header.css";

type Language =
  | "Español"
  | "Valencià"
  | "Català"
  | "Galego"
  | "Euskara"
  | "English"
  | "Deutsch";

const Header: React.FC = () => {
  const links = [
    { name: "Conocénos", slug: "conocénos" },
    { name: "Supermercados", slug: "supermercados" },
    { name: "Trabaja con nosotros", slug: "trabaja con nosotros" },
    { name: "Atención al cliente", slug: "atención al cliente" },
  ];

  const availableLanguages: Language[] = [
    "Español",
    "Valencià",
    "Català",
    "Galego",
    "Euskara",
    "English",
    "Deutsch",
  ];

  // Cargar idioma guardado o Español por defecto
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "Español";
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        
        {/* IZQUIERDA: LOGO */}
        <div className="header-left">
          <Link to="/">
            <img src={logoMercadona} alt="Mercadona" className="mercadona-logo" />
          </Link>
        </div>

        {/* CENTRO: ENLACES */}
        <nav className="header-center">
          {links.map((link) => (
            <Link
              key={link.slug}
              to={`/productos/${link.slug}`}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DERECHA: SELECTOR DE IDIOMA */}
        <div className="header-right language-selector">
          <div
            className="dropdown"
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="dropdown-btn"
              onClick={() => setOpen(!open)}
            >
              {language} ▾
            </button>

            {open && (
              <div className="dropdown-menu">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleSelect(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;