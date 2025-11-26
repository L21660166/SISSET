// app/supervisor/page.jsx
'use client';
import NavbarSupervisor from '@/app/components/navbar/navbarSupervisor';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileExport,
  faBell,
  faClipboardCheck,
  faEye,
  faClipboardList,
  faCheckCircle,
  faExclamationTriangle,
  faChartPie,
  faChartBar,
  faHistory,
  faExclamationCircle,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import styles from './DashboardSupervisor.module.css';

export default function SupervisorPage() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleChatClick = () => {
    alert('Función de chat con trabajadores activada');
    setChatOpen(!chatOpen);
  };

  const mainActions = [
    { icon: faFileExport, text: 'Generar Reporte' },
    { icon: faBell, text: 'Enviar Notificación' },
    { icon: faClipboardCheck, text: 'Validar Checklists' },
    { icon: faEye, text: 'Revisar Incidencias' }
  ];

  const stats = [
    { icon: faClipboardList, number: '8', label: 'Turnos Hoy' },
    { icon: faCheckCircle, number: '15', label: 'Actividades Completas' },
    { icon: faExclamationTriangle, number: '6', label: 'Incidencias' }
  ];

  const turns = [
    { name: 'Juan Pérez - Producción', details: '08:00 - 16:00 • 0 incidencias', status: 'completed' },
    { name: 'María García - Calidad', details: '16:00 - 00:00 • 1 incidencia', status: 'pending' }
  ];

  const incidents = [
    { title: 'Checklist incompleto', details: 'Carlos López • Mantenimiento • Hoy 10:30', priority: 'high' },
    { title: 'Falta de evidencia', details: 'María García • Calidad • Hoy 18:15', priority: 'medium' }
  ];
  return (
    <>
      <NavbarSupervisor />
      <div className={styles.dashboardContainer}>
      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Botones principales */}
        <div className={styles.mainActions}>
          {mainActions.map((action, index) => (
            <button key={index} className={styles.mainActionBtn}>
              <FontAwesomeIcon icon={action.icon} className={styles.mainActionIcon} />
              <span className={styles.mainActionText}>{action.text}</span>
            </button>
          ))}
        </div>

        {/* Layout principal */}
        <div className={styles.dashboardLayout}>
          {/* Columna izquierda */}
          <div className={styles.leftColumn}>
            {/* Dashboard de estadísticas */}
            <div className={styles.dashboard}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <FontAwesomeIcon icon={stat.icon} />
                  </div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Gráficas básicas */}
            <div className={styles.chartsSection}>
              <div className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <FontAwesomeIcon icon={faChartPie} />
                </div>
                Resumen de Actividades
              </div>
              
              <div className={styles.chartsContainer}>
                <div className={styles.chart}>
                  <div className={styles.chartTitle}>Turnos por Estado</div>
                  <div className={styles.chartPlaceholder}>
                    <FontAwesomeIcon icon={faChartPie} style={{ fontSize: '40px' }} />
                    Gráfica de Estado
                  </div>
                </div>
                
                <div className={styles.chart}>
                  <div className={styles.chartTitle}>Incidencias por Área</div>
                  <div className={styles.chartPlaceholder}>
                    <FontAwesomeIcon icon={faChartBar} style={{ fontSize: '40px' }} />
                    Gráfica de Áreas
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna derecha */}
          <div className={styles.rightColumn}>
            {/* Turnos recientes */}
            <div className={styles.turnsList}>
              <div className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <FontAwesomeIcon icon={faHistory} />
                </div>
                Turnos Recientes
              </div>
              
              {turns.map((turn, index) => (
                <div key={index} className={styles.turnItem}>
                  <div className={styles.turnInfo}>
                    <div className={styles.turnName}>{turn.name}</div>
                    <div className={styles.turnDetails}>{turn.details}</div>
                  </div>
                  <div className={`${styles.turnStatus} ${
                    turn.status === 'completed' ? styles.statusCompleted : 
                    turn.status === 'pending' ? styles.statusPending : 
                    styles.statusIncomplete
                  }`}>
                    {turn.status === 'completed' ? 'Completado' : 
                     turn.status === 'pending' ? 'En Proceso' : 'Incompleto'}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Incidencias recientes */}
            <div className={styles.incidentsSection}>
              <div className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                Incidencias Recientes
              </div>
              
              {incidents.map((incident, index) => (
                <div key={index} className={styles.incidentItem}>
                  <div className={styles.incidentInfo}>
                    <div className={styles.incidentTitle}>{incident.title}</div>
                    <div className={styles.incidentDetails}>{incident.details}</div>
                  </div>
                  <div className={`${styles.incidentPriority} ${
                    incident.priority === 'high' ? styles.priorityHigh : 
                    incident.priority === 'medium' ? styles.priorityMedium : 
                    styles.priorityLow
                  }`}>
                    {incident.priority === 'high' ? 'Alta' : 
                     incident.priority === 'medium' ? 'Media' : 'Baja'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón de chat flotante */}
      <button className={styles.chatBtn} onClick={handleChatClick}>
        <FontAwesomeIcon icon={faComment} />
      </button>
    </div>
    </>
  );
};