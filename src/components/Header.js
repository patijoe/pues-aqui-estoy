import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#conoceme" className="menu__link">Conóceme</a>
              </li>
            <li className="menu__item">
              <a href="#aptitudes" className="menu__link">Aptitudes</a>
            </li>
            <li className="menu__item">
              <a href="#queseyo" className="menu__link">Que se yo</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;