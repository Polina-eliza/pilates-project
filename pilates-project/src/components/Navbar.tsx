import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useMediaQuery } from "@material-ui/core";
import "../components/Navbar.css";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width: 1060px)");
    const [showLinks, setShowLinks] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);
  
    const handleHamburgerClick = () => {
      setShowLinks(!showLinks);
      setHamburgerActive(!hamburgerActive);
    };
  
    const handleLinkClick = (path: string) => {
      if (isMobile) {
        setShowLinks(false);
        setHamburgerActive(false);
      }
      setActiveLink(path);
    };
  
    const renderNavLink = (path: string, label: string) => (
      <Link
        to={path}
        className={`navbar-item${activeLink === path ? " active" : ""}`}
        onClick={() => handleLinkClick(path)}
      >
        {label}
      </Link>
    );
  
  

  return (
    <nav className="navbar">
    <div className={`navbar-container${isMobile ? " navbar-container-mob" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img className="logo-img" src={Logo} alt="logo" />
        </Link>
      </div>
      {isMobile && (
        <div
          className={`hamburger${hamburgerActive ? " active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}
      {(isMobile ? showLinks : true) && (
        <div className="navbar-links">
          {renderNavLink("/", "Home")}
          {renderNavLink("/benefits", "Benefits")}
          {renderNavLink("/classes", "Our Classes")}
          {renderNavLink("/contact", "Contact Us")}
        </div>
      )}
      {!isMobile && (
        <div className="navbar-buttons">
          <Link to="/signin" className="navbar-item">
            Sign In
          </Link>
          <button className="navbar-button">Become a Member</button>
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;
