// app/trabajador/mis-turnos/page.jsx
"use client";

import NavbarTrabajador from '@/app/components/navbar/navbarTrabajador';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock,
  faCalendarAlt,
  faHistory,
  faCheckCircle,
  faExclamationTriangle,
  faPlayCircle,
  faStopCircle,
  faFileAlt,
  faSearch,
  faFilter,
  faSort,
  faArrowLeft,
  faEye,
  faEdit,
  faDownload,
  faList,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';
import styles from './Mis-turnos.module.css';

export default function MisTurnosPage() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedTurn, setSelectedTurn] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('lista'); // 'lista' o 'calendario'
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Datos de ejemplo para los turnos
  const turnos = [
    {
      id: 1,
      fecha: '2024-01-15',
      dia: 'Lunes',
      horario: '06:00 - 14:00',
      tipo: 'Matutino',
      estado: 'completado',
      horasTrabajadas: '8h 00m',
      incidencias: 0,
      actividadesCompletadas: 12,
      notas: 'Turno normal sin novedades. Se completaron todas las actividades programadas y el equipo funcionó correctamente.',
      evidencias: 3
    },
    {
      id: 2,
      fecha: '2024-01-14',
      dia: 'Domingo',
      horario: '14:00 - 22:00',
      tipo: 'Vespertino',
      estado: 'completado',
      horasTrabajadas: '8h 15m',
      incidencias: 1,
      actividadesCompletadas: 11,
      notas: 'Se reportó falla menor en equipo B. Se realizó mantenimiento correctivo. El resto del turno transcurrió sin novedades.',
      evidencias: 2
    },
    {
      id: 3,
      fecha: '2024-01-13',
      dia: 'Sábado',
      horario: '22:00 - 06:00',
      tipo: 'Nocturno',
      estado: 'completado',
      horasTrabajadas: '8h 00m',
      incidencias: 0,
      actividadesCompletadas: 10,
      notas: 'Mantenimiento preventivo realizado en línea de producción. Buen rendimiento general del equipo.',
      evidencias: 4
    },
    {
      id: 4,
      fecha: '2024-01-12',
      dia: 'Viernes',
      horario: '06:00 - 14:00',
      tipo: 'Matutino',
      estado: 'en-progreso',
      horasTrabajadas: '4h 30m',
      incidencias: 0,
      actividadesCompletadas: 6,
      notas: 'Turno en progreso. Hasta el momento sin incidencias.',
      evidencias: 1
    },
    {
      id: 5,
      fecha: '2024-01-11',
      dia: 'Jueves',
      horario: '14:00 - 22:00',
      tipo: 'Vespertino',
      estado: 'pendiente',
      horasTrabajadas: '0h 00m',
      incidencias: 0,
      actividadesCompletadas: 0,
      notas: 'Turno programado - pendiente de inicio',
      evidencias: 0
    },
    {
      id: 6,
      fecha: '2024-01-10',
      dia: 'Miércoles',
      horario: '22:00 - 06:00',
      tipo: 'Nocturno',
      estado: 'completado',
      horasTrabajadas: '8h 00m',
      incidencias: 2,
      actividadesCompletadas: 9,
      notas: 'Dos incidencias menores reportadas en equipos auxiliares. Resueltas durante el turno.',
      evidencias: 3
    }
  ];

  const stats = [
    { 
      icon: faClock, 
      label: 'Horas Totales', 
      value: '168h 45m',
      desc: 'Este mes'
    },
    { 
      icon: faCheckCircle, 
      label: 'Turnos Completados', 
      value: '22',
      desc: '85% eficiencia'
    },
    { 
      icon: faExclamationTriangle, 
      label: 'Incidencias', 
      value: '3',
      desc: 'Este mes'
    },
    { 
      icon: faHistory, 
      label: 'Próximo Turno', 
      value: 'Mañana 06:00',
      desc: 'Matutino'
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos los Turnos' },
    { id: 'completado', label: 'Completados' },
    { id: 'en-progreso', label: 'En Progreso' },
    { id: 'pendiente', label: 'Pendientes' }
  ];

  const filteredTurnos = turnos.filter(turno => {
    const matchesFilter = activeFilter === 'todos' || turno.estado === activeFilter;
    const matchesSearch = turno.fecha.includes(searchTerm) || 
                         turno.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         turno.dia.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getEstadoStyles = (estado) => {
    switch(estado) {
      case 'completado':
        return { class: styles.statusCompleted, text: 'Completado' };
      case 'en-progreso':
        return { class: styles.statusInProgress, text: 'En Progreso' };
      case 'pendiente':
        return { class: styles.statusPending, text: 'Pendiente' };
      default:
        return { class: styles.statusPending, text: 'Pendiente' };
    }
  };

  const getTipoStyles = (tipo) => {
    switch(tipo) {
      case 'Matutino':
        return styles.tipoMatutino;
      case 'Vespertino':
        return styles.tipoVespertino;
      case 'Nocturno':
        return styles.tipoNocturno;
      default:
        return styles.tipoMatutino;
    }
  };

  const viewTurnDetails = (turno) => {
    setSelectedTurn(turno);
  };

  const closeTurnDetails = () => {
    setSelectedTurn(null);
  };

  const startTurn = (turnoId) => {
    alert(`Iniciando turno ${turnoId}`);
    // Lógica para iniciar turno
  };

  const endTurn = (turnoId) => {
    alert(`Finalizando turno ${turnoId}`);
    // Lógica para finalizar turno
  };

  // Función para generar días del mes (simulación simple)
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 31; i++) {
      const date = new Date(2024, 0, i);
      const dayTurnos = turnos.filter(turno => {
        const turnoDate = new Date(turno.fecha);
        return turnoDate.getDate() === i;
      });
      
      days.push({
        date: date,
        day: i,
        hasTurn: dayTurnos.length > 0,
        turnos: dayTurnos
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <>
      <NavbarTrabajador />
      <div className={styles.dashboardContainer}>
        {/* Header */}
        <div className={styles.header}>
          
          <div className={styles.headerRight}>
            <div className={styles.viewToggle}>
              <button 
                className={`${styles.viewBtn} ${viewMode === 'lista' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('lista')}
              >
                <FontAwesomeIcon icon={faList} />
                Vista Lista
              </button>
              <button 
                className={`${styles.viewBtn} ${viewMode === 'calendario' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('calendario')}
              >
                <FontAwesomeIcon icon={faCalendarDay} />
                Vista Calendario
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className={styles.statContent}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDesc}>{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filtros y búsqueda */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar por fecha o tipo de turno..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <div className={styles.filterGroup}>
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`${styles.filterBtn} ${
                  activeFilter === filter.id ? styles.filterBtnActive : ''
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido según vista seleccionada */}
        {viewMode === 'lista' ? (
          /* Vista Lista */
          <div className={styles.turnosList}>
            <div className={styles.listHeader}>
              <span>Fecha y Día</span>
              <span>Horario</span>
              <span>Tipo</span>
              <span>Estado</span>
              <span>Acciones</span>
            </div>

            {filteredTurnos.map(turno => {
              const estado = getEstadoStyles(turno.estado);
              const tipoClass = getTipoStyles(turno.tipo);
              
              return (
                <div key={turno.id} className={styles.turnoCard}>
                  <div className={styles.turnoInfo}>
                    <div className={styles.fecha}>
                      <strong>{turno.fecha}</strong>
                      <span className={styles.dia}>{turno.dia}</span>
                    </div>
                    
                    <div className={styles.horario}>
                      <FontAwesomeIcon icon={faClock} className={styles.horarioIcon} />
                      {turno.horario}
                    </div>
                    
                    <div className={`${styles.tipo} ${tipoClass}`}>
                      {turno.tipo}
                    </div>
                    
                    <div className={`${styles.estado} ${estado.class}`}>
                      {estado.text}
                    </div>
                  </div>
                  
                  <div className={styles.acciones}>
                    <button 
                      className={`${styles.btn} ${styles.btnIcon}`}
                      onClick={() => viewTurnDetails(turno)}
                      title="Ver detalles"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    
                    {turno.estado === 'pendiente' && (
                      <button 
                        className={`${styles.btn} ${styles.btnSuccess}`}
                        onClick={() => startTurn(turno.id)}
                      >
                        <FontAwesomeIcon icon={faPlayCircle} />
                        Iniciar
                      </button>
                    )}
                    
                    {turno.estado === 'en-progreso' && (
                      <button 
                        className={`${styles.btn} ${styles.btnDanger}`}
                        onClick={() => endTurn(turno.id)}
                      >
                        <FontAwesomeIcon icon={faStopCircle} />
                        Finalizar
                      </button>
                    )}
                    
                    {turno.estado === 'completado' && (
                      <button 
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        title="Descargar reporte"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Vista Calendario */
          <div className={styles.calendarView}>
            <div className={styles.calendarHeader}>
              <h2 className={styles.calendarTitle}>Enero 2024</h2>
              <div className={styles.calendarLegend}>
                <div className={styles.legendItem}>
                  <div className={`${styles.legendColor} ${styles.legendMatutino}`}></div>
                  <span>Matutino</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={`${styles.legendColor} ${styles.legendVespertino}`}></div>
                  <span>Vespertino</span>
                </div>
                <div className={styles.legendItem}>
                  <div className={`${styles.legendColor} ${styles.legendNocturno}`}></div>
                  <span>Nocturno</span>
                </div>
              </div>
            </div>
            
            <div className={styles.calendarGrid}>
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                <div key={day} className={styles.calendarDayHeader}>
                  {day}
                </div>
              ))}
              
              {calendarDays.map(day => (
                <div 
                  key={day.day} 
                  className={`${styles.calendarDay} ${day.hasTurn ? styles.calendarDayWithTurn : ''}`}
                  onClick={() => day.hasTurn && viewTurnDetails(day.turnos[0])}
                >
                  <div className={styles.calendarDayNumber}>{day.day}</div>
                  {day.turnos.map((turno, index) => (
                    <div 
                      key={index}
                      className={`${styles.calendarTurn} ${getTipoStyles(turno.tipo)}`}
                    >
                      <span className={styles.calendarTurnTime}>{turno.horario.split(' - ')[0]}</span>
                      <span className={styles.calendarTurnType}>{turno.tipo}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className={styles.calendarInfo}>
              <p>
                <FontAwesomeIcon icon={faEye} className={styles.infoIcon} />
                Haz clic en un día con turno para ver los detalles
              </p>
            </div>
          </div>
        )}

        {/* Modal de detalles del turno */}
        {selectedTurn && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Detalles del Turno</h2>
                <button className={styles.closeModal} onClick={closeTurnDetails}>
                  ×
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.detailGrid}>
                  <div className={styles.detailItem}>
                    <label>Fecha:</label>
                    <span>{selectedTurn.fecha} ({selectedTurn.dia})</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Horario:</label>
                    <span>{selectedTurn.horario}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Tipo:</label>
                    <span className={getTipoStyles(selectedTurn.tipo)}>{selectedTurn.tipo}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Estado:</label>
                    <span className={getEstadoStyles(selectedTurn.estado).class}>
                      {getEstadoStyles(selectedTurn.estado).text}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Horas Trabajadas:</label>
                    <span>{selectedTurn.horasTrabajadas}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Actividades Completadas:</label>
                    <span>{selectedTurn.actividadesCompletadas}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Incidencias:</label>
                    <span>{selectedTurn.incidencias}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Evidencias:</label>
                    <span>{selectedTurn.evidencias} archivos</span>
                  </div>
                </div>
                
                <div className={styles.notasSection}>
                  <label>Notas del Turno:</label>
                  <p>{selectedTurn.notas}</p>
                </div>
                
                <div className={styles.modalActions}>
                  <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={closeTurnDetails}>
                    Cerrar
                  </button>
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>
                    <FontAwesomeIcon icon={faDownload} className={styles.btnIcon} />
                    Descargar Reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}