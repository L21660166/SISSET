// components/ConfiguracionAdmin.jsx
'use client';
import NavbarAdmin from '@/app/components/navbar/navbarAdmin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog,
  faSave,
  faUndo,
  faShieldAlt,
  faBell,
  faPalette,
  faDatabase,
  faUsersCog,
  faGlobe,
  faKey,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faUserShield,
  faHistory,
  faChartBar,
  faMobileAlt,
  faDesktop,
  faCloud,
  faNetworkWired,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import styles from './ConfiguracionAdmin.module.css';

const ConfiguracionAdmin = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // Configuración General
    companyName: 'Mi Empresa S.A. de C.V.',
    companyEmail: 'informacion@miempresa.com',
    companyPhone: '+52 55 1234 5678',
    companyAddress: 'Av. Principal #123, Col. Centro, CDMX',
    language: 'es',
    timezone: 'America/Mexico_City',
    dateFormat: 'DD/MM/YYYY',
    currency: 'MXN',
    
    // Seguridad
    twoFactorAuth: true,
    sessionTimeout: 45,
    passwordMinLength: 10,
    requireSpecialChars: true,
    maxLoginAttempts: 5,
    autoLogout: true,
    
    // Notificaciones
    emailNotifications: true,
    pushNotifications: false,
    salesAlerts: true,
    lowStockAlerts: true,
    securityAlerts: true,
    systemUpdates: true,
    
    // Apariencia
    theme: 'light',
    sidebarCollapsed: false,
    compactMode: false,
    fontSize: 'large',
    animations: true,
    highContrast: false,
    
    // Avanzado
    cacheEnabled: true,
    debugMode: false,
    analytics: true,
    performanceMode: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  // Estadísticas del sistema
  const systemStats = [
    { label: 'Uso de CPU', value: '24%', color: '#10b981' },
    { label: 'Memoria RAM', value: '62%', color: '#f59e0b' },
    { label: 'Almacenamiento', value: '78%', color: '#ef4444' },
    { label: 'Usuarios Activos', value: '12', color: '#3b82f6' }
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    setSaveStatus('saving');
    // Simular guardado en API
    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(''), 3000);
    }, 1500);
  };

  const handleResetSettings = () => {
    if (confirm('¿Estás seguro de que deseas restaurar todos los ajustes a sus valores por defecto? Esta acción no se puede deshacer.')) {
      setSettings({
        companyName: 'Mi Empresa S.A. de C.V.',
        companyEmail: 'informacion@miempresa.com',
        companyPhone: '+52 55 1234 5678',
        companyAddress: 'Av. Principal #123, Col. Centro, CDMX',
        language: 'es',
        timezone: 'America/Mexico_City',
        dateFormat: 'DD/MM/YYYY',
        currency: 'MXN',
        twoFactorAuth: true,
        sessionTimeout: 45,
        passwordMinLength: 10,
        requireSpecialChars: true,
        maxLoginAttempts: 5,
        autoLogout: true,
        emailNotifications: true,
        pushNotifications: false,
        salesAlerts: true,
        lowStockAlerts: true,
        securityAlerts: true,
        systemUpdates: true,
        theme: 'light',
        sidebarCollapsed: false,
        compactMode: false,
        fontSize: 'large',
        animations: true,
        highContrast: false,
        cacheEnabled: true,
        debugMode: false,
        analytics: true,
        performanceMode: false
      });
      setSaveStatus('reset');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const tabs = [
    { id: 'general', label: 'General', icon: faCog, description: 'Configuración básica del sistema' },
    { id: 'security', label: 'Seguridad', icon: faShieldAlt, description: 'Ajustes de seguridad y acceso' },
    { id: 'notifications', label: 'Notificaciones', icon: faBell, description: 'Preferencias de alertas' },
    { id: 'appearance', label: 'Apariencia', icon: faPalette, description: 'Personalización visual' },
    { id: 'advanced', label: 'Avanzado', icon: faCogs, description: 'Configuraciones técnicas' }
  ];

  return (
    <>
      <NavbarAdmin />
      <div className={styles.configContainer}>
        <div className={styles.mainContent}>
          
          {/* Header de Configuración Mejorado */}
          <div className={styles.configHeader}>
            <div className={styles.headerContent}>
              <h1 className={styles.pageTitle}>
              </h1>
              
              
            </div>
            
            <div className={styles.headerActions}>
              <button 
                className={`${styles.actionBtn} ${styles.resetBtn}`}
                onClick={handleResetSettings}
              >
                <FontAwesomeIcon icon={faUndo} />
                Restablecer Todo
              </button>
              <button 
                className={`${styles.actionBtn} ${styles.saveBtn}`}
                onClick={handleSaveSettings}
                disabled={saveStatus === 'saving'}
              >
                <FontAwesomeIcon icon={faSave} />
                {saveStatus === 'saving' ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </div>

          {/* Estado del guardado */}
          {saveStatus && (
            <div className={`${styles.saveStatus} ${styles[saveStatus]}`}>
              <FontAwesomeIcon icon={
                saveStatus === 'success' ? faCheckCircle : 
                saveStatus === 'reset' ? faUndo : faExclamationTriangle
              } />
              {saveStatus === 'success' && '¡Configuración guardada exitosamente! Los cambios están ahora activos.'}
              {saveStatus === 'reset' && 'Configuración restablecida a valores por defecto.'}
              {saveStatus === 'saving' && 'Guardando configuración, por favor espere...'}
            </div>
          )}

          <div className={styles.configLayout}>
            
            {/* Navegación lateral mejorada */}
            <div className={styles.sidebarNav}>
              <div className={styles.navHeader}>
                <FontAwesomeIcon icon={faCog} />
                <span>Menú de Configuración</span>
              </div>
              <nav className={styles.navMenu}>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`${styles.navItem} ${activeTab === tab.id ? styles.navItemActive : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className={styles.navIcon}>
                      <FontAwesomeIcon icon={tab.icon} />
                    </div>
                    <div className={styles.navText}>
                      <span className={styles.navLabel}>{tab.label}</span>
                      <span className={styles.navDescription}>{tab.description}</span>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Información de la última actualización */}
              <div className={styles.lastUpdate}>
                <div className={styles.updateHeader}>
                  <FontAwesomeIcon icon={faHistory} />
                  <span>Última Actualización</span>
                </div>
                <div className={styles.updateInfo}>
                  <div className={styles.updateDate}>15 Ene 2024, 14:30</div>
                  <div className={styles.updateUser}>por: Admin Principal</div>
                </div>
              </div>
            </div>

            {/* Contenido principal mejorado */}
            <div className={styles.configContent}>
              
              {/* Configuración General Expandida */}
              {activeTab === 'general' && (
                <div className={styles.settingsSection}>
                  <h2 className={styles.sectionTitle}>
                    <FontAwesomeIcon icon={faCog} />
                    Configuración General del Sistema
                  </h2>
                  <p className={styles.sectionDescription}>
                    Configura la información básica de tu empresa y las preferencias globales del sistema.
                  </p>
                  
                  <div className={styles.settingsGrid}>
                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>
                        Nombre de la Empresa
                        <span className={styles.required}>*</span>
                      </label>
                      <p className={styles.settingHelp}>
                        Este nombre aparecerá en facturas, reportes y comunicaciones oficiales.
                      </p>
                      <input
                        type="text"
                        className={styles.settingInput}
                        value={settings.companyName}
                        onChange={(e) => handleSettingChange('companyName', e.target.value)}
                        placeholder="Ingresa el nombre legal de la empresa"
                      />
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>
                        Email Corporativo Principal
                        <span className={styles.required}>*</span>
                      </label>
                      <p className={styles.settingHelp}>
                        Dirección de email para comunicaciones oficiales y notificaciones del sistema.
                      </p>
                      <input
                        type="email"
                        className={styles.settingInput}
                        value={settings.companyEmail}
                        onChange={(e) => handleSettingChange('companyEmail', e.target.value)}
                        placeholder="correo@empresa.com"
                      />
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Teléfono de Contacto</label>
                      <p className={styles.settingHelp}>
                        Número telefónico principal para contacto con clientes y proveedores.
                      </p>
                      <input
                        type="tel"
                        className={styles.settingInput}
                        value={settings.companyPhone}
                        onChange={(e) => handleSettingChange('companyPhone', e.target.value)}
                        placeholder="+52 55 1234 5678"
                      />
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Dirección Fiscal</label>
                      <p className={styles.settingHelp}>
                        Dirección oficial para documentos fiscales y legales.
                      </p>
                      <textarea
                        className={styles.settingTextarea}
                        value={settings.companyAddress}
                        onChange={(e) => handleSettingChange('companyAddress', e.target.value)}
                        placeholder="Ingresa la dirección completa"
                        rows="3"
                      />
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Idioma del Sistema</label>
                      <p className={styles.settingHelp}>
                        Selecciona el idioma principal para la interfaz de usuario.
                      </p>
                      <select
                        className={styles.settingSelect}
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                      >
                        <option value="es">Español (Latinoamérica)</option>
                        <option value="en">English (United States)</option>
                        <option value="pt">Português (Brasil)</option>
                        <option value="fr">Français (France)</option>
                      </select>
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Zona Horaria</label>
                      <p className={styles.settingHelp}>
                        Configura la zona horaria para fechas y horas en el sistema.
                      </p>
                      <select
                        className={styles.settingSelect}
                        value={settings.timezone}
                        onChange={(e) => handleSettingChange('timezone', e.target.value)}
                      >
                        <option value="America/Mexico_City">Ciudad de México (UTC-6)</option>
                        <option value="America/New_York">New York (UTC-5)</option>
                        <option value="America/Los_Angeles">Los Angeles (UTC-8)</option>
                        <option value="Europe/Madrid">Madrid (UTC+1)</option>
                      </select>
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Formato de Fecha</label>
                      <p className={styles.settingHelp}>
                        Define cómo se mostrarán las fechas en todo el sistema.
                      </p>
                      <select
                        className={styles.settingSelect}
                        value={settings.dateFormat}
                        onChange={(e) => handleSettingChange('dateFormat', e.target.value)}
                      >
                        <option value="DD/MM/YYYY">DD/MM/AAAA (15/01/2024)</option>
                        <option value="MM/DD/YYYY">MM/DD/AAAA (01/15/2024)</option>
                        <option value="YYYY-MM-DD">AAAA-MM-DD (2024-01-15)</option>
                        <option value="DD MMM YYYY">DD MMM AAAA (15 Ene 2024)</option>
                      </select>
                    </div>

                    <div className={styles.settingGroup}>
                      <label className={styles.settingLabel}>Moneda Principal</label>
                      <p className={styles.settingHelp}>
                        Selecciona la moneda para transacciones y reportes financieros.
                      </p>
                      <select
                        className={styles.settingSelect}
                        value={settings.currency}
                        onChange={(e) => handleSettingChange('currency', e.target.value)}
                      >
                        <option value="MXN">Peso Mexicano (MXN)</option>
                        <option value="USD">Dólar Americano (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="BRL">Real Brasileño (BRL)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Configuración de Seguridad Expandida */}
              {activeTab === 'security' && (
                <div className={styles.settingsSection}>
                  <h2 className={styles.sectionTitle}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Configuración de Seguridad y Acceso
                  </h2>
                  <p className={styles.sectionDescription}>
                    Gestiona las políticas de seguridad, autenticación y control de acceso al sistema.
                  </p>
                  
                  <div className={styles.securityGrid}>
                    <div className={styles.securityCard}>
                      <div className={styles.cardHeader}>
                        <FontAwesomeIcon icon={faUserShield} />
                        <h3>Autenticación y Sesiones</h3>
                      </div>
                      <div className={styles.cardContent}>
                        <div className={styles.toggleGroup}>
                          <label className={styles.toggleLabel}>
                            Autenticación de Dos Factores (2FA)
                            <div className={styles.toggleDescription}>
                              Requiere un código adicional por SMS o app para iniciar sesión
                            </div>
                          </label>
                          <label className={styles.toggleSwitch}>
                            <input
                              type="checkbox"
                              checked={settings.twoFactorAuth}
                              onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                            />
                            <span className={styles.slider}></span>
                          </label>
                        </div>

                        <div className={styles.settingGroup}>
                          <label className={styles.settingLabel}>
                            Tiempo de Espera de Sesión (minutos)
                          </label>
                          <p className={styles.settingHelp}>
                            Tiempo de inactividad antes de cerrar sesión automáticamente
                          </p>
                          <input
                            type="number"
                            className={styles.settingInput}
                            value={settings.sessionTimeout}
                            onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                            min="5"
                            max="240"
                          />
                        </div>

                        <div className={styles.toggleGroup}>
                          <label className={styles.toggleLabel}>
                            Cierre Automático de Sesión
                            <div className={styles.toggleDescription}>
                              Cierra sesiones automáticamente después del tiempo configurado
                            </div>
                          </label>
                          <label className={styles.toggleSwitch}>
                            <input
                              type="checkbox"
                              checked={settings.autoLogout}
                              onChange={(e) => handleSettingChange('autoLogout', e.target.checked)}
                            />
                            <span className={styles.slider}></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className={styles.securityCard}>
                      <div className={styles.cardHeader}>
                        <FontAwesomeIcon icon={faKey} />
                        <h3>Políticas de Contraseñas</h3>
                      </div>
                      <div className={styles.cardContent}>
                        <div className={styles.settingGroup}>
                          <label className={styles.settingLabel}>
                            Longitud Mínima de Contraseña
                          </label>
                          <p className={styles.settingHelp}>
                            Número mínimo de caracteres requeridos para las contraseñas
                          </p>
                          <input
                            type="number"
                            className={styles.settingInput}
                            value={settings.passwordMinLength}
                            onChange={(e) => handleSettingChange('passwordMinLength', parseInt(e.target.value))}
                            min="8"
                            max="20"
                          />
                        </div>

                        <div className={styles.toggleGroup}>
                          <label className={styles.toggleLabel}>
                            Requerir Caracteres Especiales
                            <div className={styles.toggleDescription}>
                              Las contraseñas deben incluir al menos un carácter especial (!@#$%^&*)
                            </div>
                          </label>
                          <label className={styles.toggleSwitch}>
                            <input
                              type="checkbox"
                              checked={settings.requireSpecialChars}
                              onChange={(e) => handleSettingChange('requireSpecialChars', e.target.checked)}
                            />
                            <span className={styles.slider}></span>
                          </label>
                        </div>

                        <div className={styles.settingGroup}>
                          <label className={styles.settingLabel}>
                            Intentos Máximos de Login
                          </label>
                          <p className={styles.settingHelp}>
                            Número de intentos fallidos antes de bloquear la cuenta temporalmente
                          </p>
                          <input
                            type="number"
                            className={styles.settingInput}
                            value={settings.maxLoginAttempts}
                            onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
                            min="3"
                            max="10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tarjeta adicional de seguridad */}
                    <div className={styles.securityCard}>
                      <div className={styles.cardHeader}>
                        <FontAwesomeIcon icon={faHistory} />
                        <h3>Registro de Actividad</h3>
                      </div>
                      <div className={styles.cardContent}>
                        <div className={styles.settingGroup}>
                          <label className={styles.settingLabel}>
                            Retención de Logs (días)
                          </label>
                          <p className={styles.settingHelp}>
                            Tiempo que se conservan los registros de actividad del sistema
                          </p>
                          <select className={styles.settingSelect}>
                            <option value="30">30 días</option>
                            <option value="90">90 días</option>
                            <option value="180">180 días</option>
                            <option value="365">1 año</option>
                          </select>
                        </div>
                        
                        <button className={styles.secondaryBtn}>
                          <FontAwesomeIcon icon={faChartBar} />
                          Ver Reporte de Actividad
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Las demás pestañas seguirían con el mismo patrón de expansión */}
              {/* ... (código para notifications, appearance, advanced) ... */}
              
              {/* Mensaje para pestañas no implementadas */}
              {(activeTab === 'notifications' || activeTab === 'appearance' || activeTab === 'advanced') && (
                <div className={styles.settingsSection}>
                  <h2 className={styles.sectionTitle}>
                    <FontAwesomeIcon icon={tabs.find(t => t.id === activeTab)?.icon || faCog} />
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h2>
                  <div className={styles.comingSoon}>
                    <FontAwesomeIcon icon={faCogs} className={styles.comingSoonIcon} />
                    <h3>Configuración en Desarrollo</h3>
                    <p>Esta sección de configuración está siendo desarrollada y estará disponible pronto.</p>
                    <button className={styles.secondaryBtn}>
                      <FontAwesomeIcon icon={faBell} />
                      Notificarme cuando esté disponible
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Panel inferior de información del sistema */}
          <div className={styles.systemInfo}>
            <div className={styles.infoCard}>
              <FontAwesomeIcon icon={faInfoCircle} />
              <div className={styles.infoContent}>
                <h4>Estado del Sistema</h4>
                <p>Todos los servicios funcionando correctamente. Última verificación: Hoy 10:30 AM</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <FontAwesomeIcon icon={faCloud} />
              <div className={styles.infoContent}>
                <h4>Versión de la Plataforma</h4>
                <p>v2.4.1 - Estable | Última actualización: 10 Ene 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfiguracionAdmin;