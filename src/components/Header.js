import React from 'react';

// O componente agora recebe a função `toggleSidebar` como uma prop.
function Header({ toggleSidebar }) {
  return (
    <header className="mb-3">
      <a href="#" className="burger-btn d-block d-xl-none" onClick={toggleSidebar}>
        <i className="bi bi-justify fs-3"></i>
      </a>
    </header>
  );
}

export default Header;
