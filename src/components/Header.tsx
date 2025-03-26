import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-bracket">{"{"}</span>
            <span className="logo-name">Sliense</span>
            <span className="logo-bracket">{"}"}</span>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#about">关于</a></li>
              <li><a href="#projects">项目</a></li>
              <li><a href="#skills">技能</a></li>
              <li><a href="#contact">联系</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 