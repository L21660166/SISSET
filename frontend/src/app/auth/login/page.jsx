'use client';

import { useState } from 'react';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleIndicator, setShowRoleIndicator] = useState(false);
  const [roleIcon, setRoleIcon] = useState('person');
  const [roleText, setRoleText] = useState('Administrador');

  const handleUsernameChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setUsername(value);
    
    let icon = '';
    let text = '';

    switch(value) {
      case 'admin':
        text = 'Administrador';
        setShowRoleIndicator(true);
        break;
      case 'supervisor':
        text = 'Supervisor';
        setShowRoleIndicator(true);
        break;
      case 'empleado':
        text = 'Empleado';
        setShowRoleIndicator(true);
        break;
      default:
        setShowRoleIndicator(false);
        return;
    }

    setRoleIcon(icon);
    setRoleText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      switch(username) {
        case 'admin':
          window.location.href = '/dashboard/administrador';
          break;
        case 'supervisor':
          window.location.href = '/dashboard/supervisor';
          break;
        case 'empleado':
          window.location.href = '/dashboard/trabajador';
          break;
        default:
          alert('Usuario no válido. Use: admin, supervisor o auditor');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <div className="logo-icon">SET</div>
        <h1>Sistema de Entrega de Turno</h1>
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Ingrese admin, supervisor o auditor" 
            required 
            autoComplete="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Ingrese su contraseña" 
            required 
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={`role-indicator ${showRoleIndicator ? 'show' : ''}`}>
          <span className="material-icons">{roleIcon}</span>
          <span>{roleText}</span>
        </div>

        <button type="submit" className="btn-login">Iniciar Sesión</button>

        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </div>
  );
}