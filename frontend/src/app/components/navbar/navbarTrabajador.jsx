// components/NavbarTrabajador.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExchangeAlt,
  faHome,
  faClipboardList,
  faTasks,
  faExclamationTriangle,
  faCamera,
  faCog,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './NavbarTrabajador.module.css';

const NavbarTrabajador = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('inicio');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', href: '/dashboard/trabajador', icon: faHome, text: 'Inicio' },
    { id: 'mis-turnos', href: '/dashboard/trabajador/turnos', icon: faClipboardList, text: 'Mis Turnos' },
    { id: 'tareas', href: '/dashboard/trabajador/actividades', icon: faTasks, text: 'Tareas' },
    { id: 'incidencias', href: '/dashboard/trabajador/incidencias', icon: faExclamationTriangle, text: 'Incidencias' },
    { id: 'evidencias', href: '/dashboard/trabajador/evidencias', icon: faCamera, text: 'Evidencias' },
    { id: 'configuracion', href: '/dashboard/trabajador/configuracion', icon: faCog, text: 'Configuración' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <div className={styles.logoIcon}>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </div>
        <div className={styles.logoText}>SET</div>
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
      
      <div className={styles.userInfo}>
        <div className={styles.userAvatar}>MH</div>
        <div className={styles.userName}>Maria Hernandez</div>
      </div>
    </nav>
  );
};

export default NavbarTrabajador;