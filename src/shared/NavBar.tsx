import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen ] = useState(false);
    const { i18n,t } = useTranslation();
    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    function handleDropdownOpen() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <nav className="navigation nav">
            <Link to="/" className="nav-link active" aria-current="page">{t('nav.home')}</Link>
            <Link to="/users" className="nav-link">{t('nav.users')}</Link>
            <div className="dropdown">
            <a className="btn btn-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isDropdownOpen}
                onClick={handleDropdownOpen}>
                {t('nav.changeLanguage')}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"  onClick = {() => handleChangeLanguage("en")}>English</a></li>
                <li><a className="dropdown-item" href="#"  onClick = {() => handleChangeLanguage("es")}>Español</a></li>
            </ul>
            </div>
        </nav>
    );
}
  