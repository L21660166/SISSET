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
  faComment
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
        {/* Estadísticas rápidas */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="stat-number">42</div>
            <div className="stat-label">Usuarios Activos</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div className="stat-number">8</div>
            <div className="stat-label">Sucursales</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <div className="stat-number">12</div>
            <div className="stat-label">Incidencias Hoy</div>
          </div>
        </div>
        
        {/* Botones principales */}
        <div className="main-actions">
          <button className="main-action-btn">
            <FontAwesomeIcon icon={faUserPlus} className="main-action-icon" />
            <span className="main-action-text">Gestionar Usuarios</span>
          </button>
          
          <button className="main-action-btn">
            <FontAwesomeIcon icon={faBuilding} className="main-action-icon" />
            <span className="main-action-text">Administrar Sucursales</span>
          </button>
          
          <button className="main-action-btn">
            <FontAwesomeIcon icon={faTasks} className="main-action-icon" />
            <span className="main-action-text">Configurar Actividades</span>
          </button>
          
          <button className="main-action-btn">
            <FontAwesomeIcon icon={faShieldAlt} className="main-action-icon" />
            <span className="main-action-text">Auditoría y Seguridad</span>
          </button>
        </div>
        
        {/* Layout principal */}
        <div className="dashboard-layout">
          {/* Columna izquierda */}
          <div className="left-column">
            {/* Configuración del sistema */}
            <div className="section-card">
              <div className="section-title">
                <div className="section-icon">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                Configuración del Sistema
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Parámetro</th>
                    <th>Valor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duración de turno (horas)</td>
                    <td>8</td>
                    <td className="action-buttons">
                      <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Límite de incidencias por turno</td>
                    <td>3</td>
                    <td className="action-buttons">
                      <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Backup automático</td>
                    <td>Activado</td>
                    <td className="action-buttons">
                      <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Columna derecha */}
          <div className="right-column">
            {/* Auditoría y logs */}
            <div className="section-card">
              <div className="section-title">
                <div className="section-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                Auditoría y Logs del Sistema
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Acción</th>
                    <th>Fecha/Hora</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>admin</td>
                    <td>Inicio de sesión</td>
                    <td>2023-11-15 08:30:15</td>
                  </tr>
                  <tr>
                    <td>supervisor1</td>
                    <td>Actualizó checklist</td>
                    <td>2023-11-15 09:15:22</td>
                  </tr>
                  <tr>
                    <td>admin</td>
                    <td>Creó nuevo usuario</td>
                    <td>2023-11-15 10:05:47</td>
                  </tr>
                  <tr>
                    <td>operador2</td>
                    <td>Registró incidencia</td>
                    <td>2023-11-15 11:20:33</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón de chat flotante */}
      <button className="chat-btn" onClick={() => alert('Función de chat activada')}>
        <FontAwesomeIcon icon={faComment} />
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
          padding: 25px;

          margin: 0 auto;
          width: 100%;
        }
        
        /* Estadísticas rápidas */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .stat-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
          width: 85px;
          height: 85px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-size: 28px;
          background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
          color: white;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
        }
        
        .stat-number {
          font-size: 34px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 5px;
        }
        
        .stat-label {
          color: #475569;
          font-size: 20px;
          font-weight: 520;
        }
        
        /* Botones principales */
        .main-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .main-action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 25px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .main-action-btn:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-color: #2563eb;
        }
        
        .main-action-icon {
          font-size: 50px;
          margin-bottom: 20px;
        }
        
        .main-action-text {
          font-size: 20px;
          font-weight: 600;
        }
        
        /* Layout principal */
        .dashboard-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          align-items: start;
        }
        
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        /* Tarjetas de sección */
        .section-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
        }
        
        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .section-icon {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          font-size: 18px;
          background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
          color: white;
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
        }
        
        /* Tablas */
        .data-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        
        .data-table th {
          background-color: #f8fafc;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #475569;
          font-size: 25px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .data-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #e2e8f0;
          font-size: 20px;
        }
        
        .data-table tr:last-child td {
          border-bottom: none;
        }
        
        .data-table tr:hover {
          background-color: rgba(0,0,0,0.02);
        }
        
        /* Botones de acción */
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn {
          padding: 8px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
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
        }
        
        /* Botón de chat flotante */
        .chat-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
          color: white;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
          z-index: 100;
        }
        
        .chat-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
        }
        
        /* Responsividad */
        @media (max-width: 1200px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 1024px) {
          .main-actions {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .main-content {
            padding: 15px;
          }
          
          .main-actions {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .chat-btn {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 16px;
          }
          
          .stat-number {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
    </>
  );
}