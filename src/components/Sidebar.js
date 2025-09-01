import React, { useState } from 'react';
// ADIÇÃO 1: Importar o arquivo JSON com os itens do menu
import menuItems from '../data/sidebar-items.json'; // <-- ATENÇÃO: ajuste o caminho para o seu arquivo!

// ADIÇÃO 2: A função agora precisa receber 'props' para ter acesso ao setCurrentPage
function Sidebar(props) { 
  const [isActive, setIsActive] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const handleSubmenuClick = (submenuName) => {
    setOpenSubmenu(openSubmenu === submenuName ? null : submenuName);
  };

  // =====================================================
  // renderLink atualizado para suportar Table.jsx
  // =====================================================
  const renderLink = (item) => {
    if (item.url && !item.url.includes('.html') && !item.url.startsWith('http')) {
      return (
        <a
          href="#"
          className="sidebar-link"
          onClick={(e) => {
            e.preventDefault();
            props.setCurrentPage(item.url); // agora passa "table" corretamente
          }}
        >
          {item.icon && <i className={`bi bi-${item.icon}`}></i>}
          <span>{item.name}</span>
        </a>
      );
    }
    return (
      <a href={item.url} className="sidebar-link">
        {item.icon && <i className={`bi bi-${item.icon}`}></i>}
        <span>{item.name}</span>
      </a>
    );
  };

  return (
    <div id="sidebar" className={isActive ? 'active' : ''}>
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              {/* Logo volta pro Dashboard */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  props.setCurrentPage('dashboard');
                }}
              >
                <img
                  src="/assets/images/logo/logo.png.png"
                  alt="Logo"
                  style={{ width: '120px', height: '40px' }}
                />
              </a>
            </div>
            <div className="toggler">
              <a
                href="#"
                className="sidebar-hide d-xl-none d-block"
                onClick={toggleSidebar}
              >
                <i className="bi bi-x bi-middle"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul className="menu">
            {menuItems.map((item, index) => {
              if (item.isTitle) {
                return (
                  <li key={index} className="sidebar-title">
                    {item.name}
                  </li>
                );
              }
              if (item.submenu) {
                return (
                  <li
                    key={index}
                    className={`sidebar-item has-sub ${
                      openSubmenu === item.key ? 'active' : ''
                    }`}
                  >
                    <a
                      href="#"
                      className="sidebar-link"
                      onClick={() => handleSubmenuClick(item.key)}
                    >
                      <i className={`bi bi-${item.icon}`}></i>
                      <span>{item.name}</span>
                    </a>
                    <ul
                      className={`submenu ${
                        openSubmenu === item.key ? 'active' : ''
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu-item">
                          {renderLink(subItem)}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={index} className="sidebar-item">
                  {renderLink(item)}
                </li>
              );
            })}
          </ul>
        </div>

        <button className="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
