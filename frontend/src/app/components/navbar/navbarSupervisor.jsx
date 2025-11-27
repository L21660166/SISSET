// components/NavbarSupervisor.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie,
  faHome,
  faHistory,
  faChartBar,
  faCog,
  faBell,
  faUser,
  faSignOutAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './NavbarSupervisor.module.css';

const NavbarSupervisor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('resumen');
  const userDropdownRef = useRef(null);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      alert('Sesión cerrada correctamente');
      // Aquí iría la lógica para cerrar sesión
      //router.push('/logout');
    }
  };

  const navItems = [
    { id: 'resumen', href: '#', icon: faHome, text: 'Resumen' },
    { id: 'evidencias', href: '#', icon: faHistory, text: 'Evidencias' },
    { id: 'reportes', href: '#', icon: faChartBar, text: 'Reportes' },
    { id: 'configuracion', href: '#', icon: faCog, text: 'Configuración' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <div className={styles.logoIcon}>
          <FontAwesomeIcon icon={faUserTie} />
        </div>
        <div className={styles.logoText}>Supervisor</div>
      </div>
      
      <button className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      
      <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <Link 
              href={item.href} 
              className={`${styles.navLink} ${activeNav === item.id ? styles.navLinkActive : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} className={styles.navIcon} />
              <span className={styles.navText}>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      <div className={styles.navActions}>
        <button className={styles.notificationBtn}>
          <FontAwesomeIcon icon={faBell} />
          <span className={styles.notificationBadge}>3</span>
        </button>
        
        <div className={styles.userInfo} ref={userDropdownRef}>
          <div className={styles.userAvatar} onClick={toggleUserDropdown}>AD</div>
          <div className={styles.userName} onClick={toggleUserDropdown}>Administrador</div>
          
          {/* Menú desplegable de usuario */}
          <div className={`${styles.userDropdown} ${isUserDropdownOpen ? styles.userDropdownActive : ''}`}>
            <button className={styles.dropdownItem}>
              <FontAwesomeIcon icon={faUser} />
              Mi Perfil
            </button>
            <button className={styles.dropdownItem}>
              <FontAwesomeIcon icon={faCog} />
              Configuración
            </button>
            <div className={styles.dropdownDivider}></div>
            <button className={styles.dropdownItem} onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSupervisor;