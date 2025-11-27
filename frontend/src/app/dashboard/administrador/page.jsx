"use client";

// app/admin/page.jsx
import NavbarAdmin from '@/app/components/navbar/navbarAdmin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faBuilding, 
  faExclamationTriangle,
  faUserPlus,
  faTasks,
  faShieldAlt,
  faCog,
  faEdit,
  faComment,
  faChartLine,
  faDatabase,
  faHistory,
  faBell,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('resumen');

  const handleLogout = () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      alert('Sesión cerrada correctamente');
    }
  };

  return (
    <>
      <NavbarAdmin />

      <div className="dashboard-container">
        {/* Contenido principal */}
        <div className="main-content">
          
          {/* Estadísticas rápidas mejoradas */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon users">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="stat-content">
                <div className="stat-number">42</div>
                <div className="stat-label">Usuarios Activos</div>
                <div className="stat-trend positive">+5 esta semana</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon branches">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="stat-content">
                <div className="stat-number">8</div>
                <div className="stat-label">Sucursales Activas</div>
                <div className="stat-trend">Todas operativas</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon incidents">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
              <div className="stat-content">
                <div className="stat-number">12</div>
                <div className="stat-label">Incidencias Hoy</div>
                <div className="stat-trend warning">3 pendientes</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon performance">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="stat-content">
                <div className="stat-number">98%</div>
                <div className="stat-label">Rendimiento</div>
                <div className="stat-trend positive">Óptimo</div>
              </div>
            </div>
          </div>
          
          {/* Botones principales mejorados */}
          <div className="main-actions">
            <button className="main-action-btn">
              <div className="action-icon">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <div className="action-content">
                <span className="action-title">Gestionar Usuarios</span>
                <span className="action-description">Administrar permisos y acceso</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="action-arrow" />
            </button>
            
            <button className="main-action-btn">
              <div className="action-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="action-content">
                <span className="action-title">Administrar Sucursales</span>
                <span className="action-description">Configurar ubicaciones</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="action-arrow" />
            </button>
            
            <button className="main-action-btn">
              <div className="action-icon">
                <FontAwesomeIcon icon={faTasks} />
              </div>
              <div className="action-content">
                <span className="action-title">Configurar Actividades</span>
                <span className="action-description">Gestionar tareas y checklists</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="action-arrow" />
            </button>
            
            <button className="main-action-btn">
              <div className="action-icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <div className="action-content">
                <span className="action-title">Auditoría y Seguridad</span>
                <span className="action-description">Monitorear accesos</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="action-arrow" />
            </button>
          </div>
          
          {/* Layout principal mejorado */}
          <div className="dashboard-layout">
            {/* Columna izquierda */}
            <div className="left-column">
              {/* Configuración del sistema mejorada */}
              <div className="section-card">
                <div className="section-header">
                  <div className="section-title">
                    <div className="section-icon">
                      <FontAwesomeIcon icon={faCog} />
                    </div>
                    <div>
                      <h2>Configuración del Sistema</h2>
                      <p>Parámetros globales y ajustes</p>
                    </div>
                  </div>
                  <button className="section-action">
                    Ver Todo
                  </button>
                </div>
                
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Parámetro</th>
                      <th>Valor Actual</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="parameter-name">Duración de turno</div>
                        <div className="parameter-desc">Horas por turno laboral</div>
                      </td>
                      <td>8 horas</td>
                      <td>
                        <span className="status-badge active">Activo</span>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-primary" title="Editar">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="parameter-name">Límite de incidencias</div>
                        <div className="parameter-desc">Máximo por turno</div>
                      </td>
                      <td>3 incidencias</td>
                      <td>
                        <span className="status-badge active">Activo</span>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-primary" title="Editar">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="parameter-name">Backup automático</div>
                        <div className="parameter-desc">Frecuencia de respaldo</div>
                      </td>
                      <td>Cada 24 horas</td>
                      <td>
                        <span className="status-badge active">Activo</span>
                      </td>
                      <td className="action-buttons">
                        <button className="btn btn-primary" title="Editar">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Actividad reciente */}
              <div className="section-card">
                <div className="section-header">
                  <div className="section-title">
                    <div className="section-icon">
                      <FontAwesomeIcon icon={faHistory} />
                    </div>
                    <div>
                      <h2>Actividad Reciente</h2>
                      <p>Últimas acciones en el sistema</p>
                    </div>
                  </div>
                </div>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon success">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </div>
                    <div className="activity-content">
                      <div className="activity-title">Nuevo usuario registrado</div>
                      <div className="activity-details">Juan Pérez - Operador</div>
                      <div className="activity-time">Hace 15 minutos</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon warning">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                    <div className="activity-content">
                      <div className="activity-title">Incidencia reportada</div>
                      <div className="activity-details">Sucursal Centro - Equipo A</div>
                      <div className="activity-time">Hace 2 horas</div>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon info">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <div className="activity-content">
                      <div className="activity-title">Backup completado</div>
                      <div className="activity-details">Respaldo automático del sistema</div>
                      <div className="activity-time">Hace 4 horas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna derecha */}
            <div className="right-column">
              {/* Auditoría y logs mejorados */}
              <div className="section-card">
                <div className="section-header">
                  <div className="section-title">
                    <div className="section-icon">
                      <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <div>
                      <h2>Auditoría del Sistema</h2>
                      <p>Registro de actividades de seguridad</p>
                    </div>
                  </div>
                  <button className="section-action">
                    Exportar
                  </button>
                </div>
                
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Usuario</th>
                      <th>Acción</th>
                      <th>Fecha/Hora</th>
                      <th>IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="user-info">
                          <div className="user-name">admin</div>
                          <div className="user-role">Administrador</div>
                        </div>
                      </td>
                      <td>Inicio de sesión exitoso</td>
                      <td>15/11/2024 08:30</td>
                      <td>192.168.1.100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user-info">
                          <div className="user-name">supervisor1</div>
                          <div className="user-role">Supervisor</div>
                        </div>
                      </td>
                      <td>Actualizó checklist diario</td>
                      <td>15/11/2024 09:15</td>
                      <td>192.168.1.101</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user-info">
                          <div className="user-name">admin</div>
                          <div className="user-role">Administrador</div>
                        </div>
                      </td>
                      <td>Creó nuevo usuario operador</td>
                      <td>15/11/2024 10:05</td>
                      <td>192.168.1.100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user-info">
                          <div className="user-name">operador2</div>
                          <div className="user-role">Operador</div>
                        </div>
                      </td>
                      <td>Registró incidencia técnica</td>
                      <td>15/11/2024 11:20</td>
                      <td>192.168.1.102</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Notificaciones del sistema */}
              <div className="section-card">
                <div className="section-header">
                  <div className="section-title">
                    <div className="section-icon">
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div>
                      <h2>Notificaciones</h2>
                      <p>Alertas y mensajes importantes</p>
                    </div>
                  </div>
                </div>
                <div className="notifications-list">
                  <div className="notification-item urgent">
                    <div className="notification-icon">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">Alerta de Seguridad</div>
                      <div className="notification-message">Múltiples intentos de acceso fallidos detectados</div>
                      <div className="notification-time">Hace 5 minutos</div>
                    </div>
                  </div>
                  <div className="notification-item info">
                    <div className="notification-icon">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">Mantenimiento Programado</div>
                      <div className="notification-message">Backup del sistema esta noche a las 2:00 AM</div>
                      <div className="notification-time">Hace 2 horas</div>
                    </div>
                  </div>
                  <div className="notification-item success">
                    <div className="notification-icon">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">Reporte Mensual</div>
                      <div className="notification-message">El reporte de noviembre está listo para revisión</div>
                      <div className="notification-time">Ayer, 16:45</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón de chat flotante mejorado */}
        <button className="chat-btn" onClick={() => alert('Función de chat activada')}>
          <FontAwesomeIcon icon={faComment} />
          <span className="chat-badge">3</span>
        </button>

        <style jsx>{`
          .dashboard-container {
            background: #f8fafc;
            color: #1e293b;
            min-height: 100vh;
            line-height: 1.6;
          }
          
          .main-content {
            flex: 1;
            padding: 30px;
            margin: 0 auto;
            width: 100%;

          }
          
          /* Header del Dashboard */
          .dashboard-header {
            margin-bottom: 30px;
          }
          
          .dashboard-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin: 0 0 10px 0;
          }
          
          .dashboard-subtitle {
            font-size: 1.3rem;
            color: #64748b;
            margin: 0;
            line-height: 1.5;
          }
          
          /* Estadísticas rápidas mejoradas */
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .stat-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            display: flex;
            align-items: center;
            gap: 20px;
            transition: all 0.3s ease;
            border: 1px solid #f1f5f9;
            position: relative;
            overflow: hidden;
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%);
          }
          
          .stat-icon {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
            flex-shrink: 0;
          }
          
          .stat-icon.users {
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          }
          
          .stat-icon.branches {
            background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          }
          
          .stat-icon.incidents {
            background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          }
          
          .stat-icon.performance {
            background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
          }
          
          .stat-content {
            flex: 1;
          }
          
          .stat-number {
            font-size: 2.8rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 5px;
            line-height: 1;
          }
          
          .stat-label {
            color: #475569;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .stat-trend {
            font-size: 1rem;
            font-weight: 500;
          }
          
          .stat-trend.positive {
            color: #10b981;
          }
          
          .stat-trend.warning {
            color: #f59e0b;
          }
          
          /* Botones principales mejorados */
          .main-actions {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .main-action-btn {
            display: flex;
            align-items: center;
            padding: 25px;
            background: #ffffff;
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
            gap: 20px;
          }
          
          .main-action-btn:hover {
            background: #2563eb;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
            border-color: #2563eb;
          }
          
          .action-icon {
            width: 70px;
            height: 70px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
            color: white;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3);
            flex-shrink: 0;
          }
          
          .main-action-btn:hover .action-icon {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: none;
          }
          
          .action-content {
            flex: 1;
          }
          
          .action-title {
            display: block;
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .action-description {
            display: block;
            font-size: 1.1rem;
            color: #64748b;
          }
          
          .main-action-btn:hover .action-description {
            color: rgba(255, 255, 255, 0.8);
          }
          
          .action-arrow {
            font-size: 1.2rem;
            opacity: 0.7;
            transition: all 0.3s ease;
          }
          
          .main-action-btn:hover .action-arrow {
            transform: translateX(5px);
            opacity: 1;
          }
          
          /* Layout principal */
          .dashboard-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: start;
          }
          
          .left-column {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          
          .right-column {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          
          /* Tarjetas de sección mejoradas */
          .section-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid #f1f5f9;
          }
          
          .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 25px;
          }
          
          .section-title {
            display: flex;
            align-items: flex-start;
            gap: 15px;
          }
          
          .section-title h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1e293b;
            margin: 0 0 5px 0;
          }
          
          .section-title p {
            font-size: 1.1rem;
            color: #64748b;
            margin: 0;
          }
          
          .section-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
            color: white;
            box-shadow: 0 6px 15px rgba(37, 99, 235, 0.2);
            flex-shrink: 0;
          }
          
          .section-action {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            padding: 10px 20px;
            font-size: 1.1rem;
            font-weight: 600;
            color: #475569;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .section-action:hover {
            background: #2563eb;
            color: white;
            border-color: #2563eb;
          }
          
          /* Tablas mejoradas */
          .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }
          
          .data-table th {
            background-color: #f8fafc;
            padding: 18px 20px;
            text-align: left;
            font-weight: 600;
            color: #475569;
            font-size: 1.2rem;
            border-bottom: 2px solid #e2e8f0;
          }
          
          .data-table td {
            padding: 18px 20px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 1.1rem;
          }
          
          .data-table tr:last-child td {
            border-bottom: none;
          }
          
          .data-table tr:hover {
            background-color: #f8fafc;
          }
          
          /* Información de parámetros */
          .parameter-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 1.1rem;
          }
          
          .parameter-desc {
            font-size: 1rem;
            color: #64748b;
            margin-top: 4px;
          }
          
          /* Badges de estado */
          .status-badge {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 1rem;
            font-weight: 600;
            display: inline-block;
          }
          
          .status-badge.active {
            background: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
          }
          
          /* Información de usuario */
          .user-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          
          .user-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 1.1rem;
          }
          
          .user-role {
            font-size: 1rem;
            color: #64748b;
          }
          
          /* Botones de acción */
          .action-buttons {
            display: flex;
            gap: 8px;
          }
          
          .btn {
            padding: 10px 14px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .btn-primary {
            background: #2563eb;
            color: white;
          }
          
          .btn-primary:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
          }
          
          /* Lista de actividad */
          .activity-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          
          .activity-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 12px;
            border-left: 4px solid #2563eb;
          }
          
          .activity-icon {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
          }
          
          .activity-icon.success {
            background: #f0fdf4;
            color: #10b981;
          }
          
          .activity-icon.warning {
            background: #fffbeb;
            color: #f59e0b;
          }
          
          .activity-icon.info {
            background: #eff6ff;
            color: #3b82f6;
          }
          
          .activity-content {
            flex: 1;
          }
          
          .activity-title {
            font-weight: 600;
            color: #1e293b;
            font-size: 1.1rem;
            margin-bottom: 4px;
          }
          
          .activity-details {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 4px;
          }
          
          .activity-time {
            font-size: 0.95rem;
            color: #94a3b8;
          }
          
          /* Lista de notificaciones */
          .notifications-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          
          .notification-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid;
          }
          
          .notification-item.urgent {
            background: #fef2f2;
            border-left-color: #dc2626;
          }
          
          .notification-item.info {
            background: #eff6ff;
            border-left-color: #3b82f6;
          }
          
          .notification-item.success {
            background: #f0fdf4;
            border-left-color: #10b981;
          }
          
          .notification-icon {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
          }
          
          .notification-item.urgent .notification-icon {
            background: #fecaca;
            color: #dc2626;
          }
          
          .notification-item.info .notification-icon {
            background: #bfdbfe;
            color: #3b82f6;
          }
          
          .notification-item.success .notification-icon {
            background: #bbf7d0;
            color: #10b981;
          }
          
          .notification-content {
            flex: 1;
          }
          
          .notification-title {
            font-weight: 600;
            color: #1e293b;
            font-size: 1.1rem;
            margin-bottom: 4px;
          }
          
          .notification-message {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 4px;
          }
          
          .notification-time {
            font-size: 0.95rem;
            color: #94a3b8;
          }
          
          /* Botón de chat flotante mejorado */
          .chat-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            transition: all 0.3s ease;
            z-index: 100;
          }
          
          .chat-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 30px rgba(37, 99, 235, 0.6);
          }
          
          .chat-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #ef4444;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 600;
          }
          
          /* Responsividad */
          @media (max-width: 1200px) {
            .dashboard-layout {
              grid-template-columns: 1fr;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .main-actions {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .main-content {
              padding: 20px;
            }
            
            .dashboard-title {
              font-size: 2rem;
            }
            
            .dashboard-subtitle {
              font-size: 1.1rem;
            }
            
            .main-actions {
              grid-template-columns: 1fr;
            }
            
            .stats-grid {
              grid-template-columns: 1fr;
            }
            
            .stat-card {
              padding: 20px;
            }
            
            .stat-number {
              font-size: 2.2rem;
            }
            
            .chat-btn {
              bottom: 20px;
              right: 20px;
              width: 60px;
              height: 60px;
              font-size: 1.5rem;
            }
          }
          
          @media (max-width: 480px) {
            .section-title h2 {
              font-size: 1.5rem;
            }
            
            .stat-number {
              font-size: 2rem;
            }
            
            .action-title {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}