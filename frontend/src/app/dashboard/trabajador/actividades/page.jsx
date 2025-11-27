// app/trabajador/actividades/page.jsx
"use client";

import NavbarTrabajador from '@/app/components/navbar/navbarTrabajador';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTasks,
  faCheckCircle,
  faClock,
  faExclamationTriangle,
  faFilter,
  faSearch,
  faPlay,
  faPause,
  faStop,
  faEye,
  faCalendarAlt,
  faListAlt,
  faClipboardCheck,
  faFlag,
  faUserTie,
  faTools,
  faBox,
  faSyncAlt,
  faCalendarWeek,
  faTimes,
  faSave
} from '@fortawesome/free-solid-svg-icons';
import styles from './Actividades.module.css';

export default function ActividadesPage() {
  const [activeFilter, setActiveFilter] = useState('todas');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPlanificador, setShowPlanificador] = useState(false);
  const [actividadesPlanificadas, setActividadesPlanificadas] = useState({});

  // Datos de ejemplo para las actividades
  const actividades = [
    {
      id: 1,
      titulo: 'Revisión de Seguridad Área A',
      descripcion: 'Verificación de equipos de protección y señalización en el área de producción A',
      area: 'Producción',
      prioridad: 'alta',
      estado: 'pendiente',
      fechaLimite: '2024-01-20',
      tiempoEstimado: '45 min',
      asignadoPor: 'Supervisor García',
      progreso: 0,
      subtareas: [
        'Verificar extintores',
        'Revisar señalización',
        'Comprobar EPP disponible'
      ]
    },
    {
      id: 2,
      titulo: 'Limpieza Equipo de Moldeo',
      descripcion: 'Limpieza profunda y mantenimiento básico de máquina de moldeo B-12',
      area: 'Mantenimiento',
      prioridad: 'media',
      estado: 'en-progreso',
      fechaLimite: '2024-01-18',
      tiempoEstimado: '2 horas',
      asignadoPor: 'Jefe de Mantenimiento',
      progreso: 60,
      subtareas: [
        'Limpieza externa',
        'Lubricación de partes móviles',
        'Verificación de funcionamiento'
      ]
    },
    {
      id: 3,
      titulo: 'Control de Calidad Lote #245',
      descripcion: 'Inspección de calidad para el lote de producción #245 según protocolo estándar',
      area: 'Calidad',
      prioridad: 'alta',
      estado: 'pendiente',
      fechaLimite: '2024-01-19',
      tiempoEstimado: '30 min',
      asignadoPor: 'Supervisor Calidad',
      progreso: 0,
      subtareas: [
        'Medición de dimensiones',
        'Prueba de resistencia',
        'Verificación de acabado'
      ]
    },
    {
      id: 4,
      titulo: 'Organización Almacén Herramientas',
      descripcion: 'Clasificación y organización de herramientas en almacén principal',
      area: 'Almacén',
      prioridad: 'baja',
      estado: 'completada',
      fechaLimite: '2024-01-15',
      tiempoEstimado: '1.5 horas',
      asignadoPor: 'Supervisor Almacén',
      progreso: 100,
      subtareas: [
        'Clasificar herramientas',
        'Etiquetar secciones',
        'Actualizar inventario'
      ]
    },
  ];

  const stats = [
    { 
      icon: faTasks, 
      label: 'Total Actividades', 
      value: '15',
      desc: 'Este mes'
    },
    { 
      icon: faCheckCircle, 
      label: 'Completadas', 
      value: '8',
      desc: '53% realizadas'
    },
    { 
      icon: faClock, 
      label: 'En Progreso', 
      value: '3',
      desc: 'Activas ahora'
    },
    { 
      icon: faExclamationTriangle, 
      label: 'Pendientes Urgentes', 
      value: '2',
      desc: 'Prioridad alta'
    }
  ];

  const filters = [
    { id: 'todas', label: 'Todas' },
    { id: 'pendiente', label: 'Pendientes' },
    { id: 'en-progreso', label: 'En Progreso' },
    { id: 'completada', label: 'Completadas' }
  ];

  // Días de la semana para el planificador
  const diasSemana = [
    { id: 'lunes', nombre: 'Lunes', fecha: '2024-01-15' },
    { id: 'martes', nombre: 'Martes', fecha: '2024-01-16' },
    { id: 'miercoles', nombre: 'Miércoles', fecha: '2024-01-17' },
    { id: 'jueves', nombre: 'Jueves', fecha: '2024-01-18' },
    { id: 'viernes', nombre: 'Viernes', fecha: '2024-01-19' },
    { id: 'sabado', nombre: 'Sábado', fecha: '2024-01-20' },
    { id: 'domingo', nombre: 'Domingo', fecha: '2024-01-21' }
  ];

  const filteredActividades = actividades.filter(actividad => {
    const matchesFilter = activeFilter === 'todas' || actividad.estado === activeFilter;
    const matchesSearch = actividad.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         actividad.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         actividad.area.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getEstadoStyles = (estado) => {
    switch(estado) {
      case 'completada':
        return { class: styles.statusCompleted, text: 'Completada', icon: faCheckCircle };
      case 'en-progreso':
        return { class: styles.statusInProgress, text: 'En Progreso', icon: faSyncAlt };
      case 'pendiente':
        return { class: styles.statusPending, text: 'Pendiente', icon: faClock };
      default:
        return { class: styles.statusPending, text: 'Pendiente', icon: faClock };
    }
  };

  const getPrioridadStyles = (prioridad) => {
    switch(prioridad) {
      case 'alta':
        return { class: styles.prioridadAlta, text: 'Alta', icon: faExclamationTriangle };
      case 'media':
        return { class: styles.prioridadMedia, text: 'Media', icon: faFlag };
      case 'baja':
        return { class: styles.prioridadBaja, text: 'Baja', icon: faFlag };
      default:
        return { class: styles.prioridadMedia, text: 'Media', icon: faFlag };
    }
  };

  const getAreaStyles = (area) => {
    switch(area) {
      case 'Producción':
        return styles.areaProduccion;
      case 'Mantenimiento':
        return styles.areaMantenimiento;
      case 'Calidad':
        return styles.areaCalidad;
      case 'Almacén':
        return styles.areaAlmacen;
      default:
        return styles.areaProduccion;
    }
  };

  const viewActivityDetails = (actividad) => {
    setSelectedActivity(actividad);
  };

  const closeActivityDetails = () => {
    setSelectedActivity(null);
  };

  const startActivity = (actividadId) => {
    alert(`Iniciando actividad ${actividadId}`);
    // Lógica para iniciar actividad
  };

  const pauseActivity = (actividadId) => {
    alert(`Pausando actividad ${actividadId}`);
    // Lógica para pausar actividad
  };

  const completeActivity = (actividadId) => {
    alert(`Completando actividad ${actividadId}`);
    // Lógica para completar actividad
  };

  // Funciones para el planificador
  const abrirPlanificador = () => {
    setShowPlanificador(true);
  };

  const cerrarPlanificador = () => {
    setShowPlanificador(false);
  };

  const planificarActividad = (actividadId, diaId) => {
    setActividadesPlanificadas(prev => ({
      ...prev,
      [actividadId]: diaId
    }));
  };

  const quitarPlanificacion = (actividadId) => {
    setActividadesPlanificadas(prev => {
      const nuevas = { ...prev };
      delete nuevas[actividadId];
      return nuevas;
    });
  };

  const obtenerActividadesDelDia = (diaId) => {
    return actividades.filter(actividad => 
      actividadesPlanificadas[actividad.id] === diaId
    );
  };

  const guardarPlanificacion = () => {
    // Aquí iría la lógica para guardar en base de datos
    alert('Planificación de la semana guardada exitosamente');
    cerrarPlanificador();
  };

  return (
    <>
      <NavbarTrabajador />
      <div className={styles.dashboardContainer}>
        {/* Header */}
        <div className={styles.header}>
          
          <div className={styles.headerRight}>
            <button 
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={abrirPlanificador}
            >
              <FontAwesomeIcon icon={faCalendarWeek} className={styles.btnIcon} />
              Planificar Semana
            </button>
          </div>
        </div>

        {/* Resto del código se mantiene igual... */}
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
              placeholder="Buscar actividades..."
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

        {/* Lista de actividades */}
        <div className={styles.actividadesGrid}>
          {filteredActividades.map(actividad => {
            const estado = getEstadoStyles(actividad.estado);
            const prioridad = getPrioridadStyles(actividad.prioridad);
            const areaClass = getAreaStyles(actividad.area);
            const diaPlanificado = actividadesPlanificadas[actividad.id];
            
            return (
              <div key={actividad.id} className={styles.actividadCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitleSection}>
                    <h3 className={styles.actividadTitulo}>{actividad.titulo}</h3>
                    <div className={`${styles.areaBadge} ${areaClass}`}>
                      {actividad.area}
                    </div>
                  </div>
                  <div className={styles.cardMeta}>
                    <div className={`${styles.prioridad} ${prioridad.class}`}>
                      <FontAwesomeIcon icon={prioridad.icon} />
                      {prioridad.text}
                    </div>
                    {diaPlanificado && (
                      <div className={styles.diaPlanificado}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {diasSemana.find(d => d.id === diaPlanificado)?.nombre}
                      </div>
                    )}
                  </div>
                </div>

                {/* Resto del card body... */}
                <div className={styles.cardBody}>
                  <p className={styles.actividadDescripcion}>{actividad.descripcion}</p>
                  
                  <div className={styles.actividadInfo}>
                    <div className={styles.infoItem}>
                      <FontAwesomeIcon icon={faClock} className={styles.infoIcon} />
                      <span>{actividad.tiempoEstimado}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FontAwesomeIcon icon={faCalendarAlt} className={styles.infoIcon} />
                      <span>{actividad.fechaLimite}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FontAwesomeIcon icon={faUserTie} className={styles.infoIcon} />
                      <span>{actividad.asignadoPor}</span>
                    </div>
                  </div>

                  {/* Barra de progreso */}
                  {actividad.estado !== 'pendiente' && (
                    <div className={styles.progressSection}>
                      <div className={styles.progressHeader}>
                        <span>Progreso</span>
                        <span>{actividad.progreso}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${actividad.progreso}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <div className={`${styles.estado} ${estado.class}`}>
                    <FontAwesomeIcon icon={estado.icon} />
                    {estado.text}
                  </div>
                  
                  <div className={styles.acciones}>
                    <button 
                      className={`${styles.btn} ${styles.btnIcon}`}
                      onClick={() => viewActivityDetails(actividad)}
                      title="Ver detalles"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    
                    {actividad.estado === 'pendiente' && (
                      <button 
                        className={`${styles.btn} ${styles.btnSuccess}`}
                        onClick={() => startActivity(actividad.id)}
                      >
                        <FontAwesomeIcon icon={faPlay} />
                        Iniciar
                      </button>
                    )}
                    
                    {actividad.estado === 'en-progreso' && (
                      <>
                        <button 
                          className={`${styles.btn} ${styles.btnWarning}`}
                          onClick={() => pauseActivity(actividad.id)}
                        >
                          <FontAwesomeIcon icon={faPause} />
                          Pausar
                        </button>
                        <button 
                          className={`${styles.btn} ${styles.btnSuccess}`}
                          onClick={() => completeActivity(actividad.id)}
                        >
                          <FontAwesomeIcon icon={faCheckCircle} />
                          Completar
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        // Reemplaza el modal del planificador con este código:

{/* Modal de Planificación Semanal - Versión Mejorada */}
{showPlanificador && (
  <div className={styles.modal}>
    <div className={`${styles.modalContent} ${styles.planificadorModal}`}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitleSection}>
          <FontAwesomeIcon icon={faCalendarWeek} className={styles.titleIcon} />
          <div>
            <h2>Planificador Semanal</h2>
            <p className={styles.modalSubtitle}>Organiza tus actividades para la semana del 15 al 21 de Enero 2024</p>
          </div>
        </div>
        <button className={styles.closeModal} onClick={cerrarPlanificador}>
          ×
        </button>
      </div>
      
      <div className={styles.modalBody}>
        {/* Estadísticas rápidas */}
        <div className={styles.planificadorStatsGrid}>
          <div className={styles.statMini}>
            <FontAwesomeIcon icon={faTasks} />
            <div>
              <span className={styles.statMiniValue}>{actividades.filter(a => a.estado === 'pendiente').length}</span>
              <span className={styles.statMiniLabel}>Pendientes</span>
            </div>
          </div>
          <div className={styles.statMini}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <div>
              <span className={styles.statMiniValue}>{Object.keys(actividadesPlanificadas).length}</span>
              <span className={styles.statMiniLabel}>Planificadas</span>
            </div>
          </div>
          <div className={styles.statMini}>
            <FontAwesomeIcon icon={faClock} />
            <div>
              <span className={styles.statMiniValue}>
                {Object.keys(actividadesPlanificadas).reduce((total, actId) => {
                  const actividad = actividades.find(a => a.id == actId);
                  const tiempo = actividad ? parseInt(actividad.tiempoEstimado) : 0;
                  return total + (isNaN(tiempo) ? 0 : tiempo);
                }, 0)}h
              </span>
              <span className={styles.statMiniLabel}>Tiempo Total</span>
            </div>
          </div>
        </div>

        <div className={styles.planificadorLayout}>
          {/* Panel lateral de actividades */}
          <div className={styles.actividadesPanel}>
            <div className={styles.panelHeader}>
              <h3>Actividades Disponibles</h3>
              <span className={styles.badge}>
                {actividades.filter(a => a.estado === 'pendiente' && !actividadesPlanificadas[a.id]).length}
              </span>
            </div>
            <div className={styles.actividadesList}>
              {actividades
                .filter(actividad => 
                  actividad.estado === 'pendiente' && 
                  !actividadesPlanificadas[actividad.id]
                )
                .map(actividad => (
                  <div 
                    key={actividad.id} 
                    className={styles.actividadItem}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData('actividadId', actividad.id);
                    }}
                  >
                    <div className={styles.dragIndicator}>
                      <FontAwesomeIcon icon={faListAlt} />
                    </div>
                    <div className={styles.actividadContent}>
                      <div className={styles.actividadHeader}>
                        <strong className={styles.actividadName}>{actividad.titulo}</strong>
                        <div className={`${styles.prioridadMini} ${getPrioridadStyles(actividad.prioridad).class}`}>
                          {getPrioridadStyles(actividad.prioridad).text}
                        </div>
                      </div>
                      <div className={styles.actividadMeta}>
                        <span className={`${styles.areaTag} ${getAreaStyles(actividad.area)}`}>
                          {actividad.area}
                        </span>
                        <span className={styles.tiempoTag}>
                          <FontAwesomeIcon icon={faClock} />
                          {actividad.tiempoEstimado}
                        </span>
                      </div>
                      <p className={styles.actividadDesc}>{actividad.descripcion}</p>
                    </div>
                  </div>
                ))}
              
              {actividades.filter(a => a.estado === 'pendiente' && !actividadesPlanificadas[a.id]).length === 0 && (
                <div className={styles.emptyState}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>¡Todas las actividades están planificadas!</p>
                </div>
              )}
            </div>
          </div>

          {/* Calendario semanal */}
          <div className={styles.calendarioPanel}>
            <div className={styles.semanaHeader}>
              <h3>Distribución Semanal</h3>
              <div className={styles.semanaRango}>
                15 - 21 Enero 2024
              </div>
            </div>
            
            <div className={styles.calendarioGrid}>
              {diasSemana.map(dia => {
                const actividadesDelDia = obtenerActividadesDelDia(dia.id);
                const tiempoTotal = actividadesDelDia.reduce((total, act) => {
                  const tiempo = parseInt(act.tiempoEstimado);
                  return total + (isNaN(tiempo) ? 0 : tiempo);
                }, 0);
                
                return (
                  <div key={dia.id} className={styles.diaContainer}>
                    <div className={styles.diaHeader}>
                      <div className={styles.diaInfo}>
                        <strong className={styles.diaNombre}>{dia.nombre}</strong>
                        <span className={styles.diaFecha}>{dia.fecha}</span>
                      </div>
                      {actividadesDelDia.length > 0 && (
                        <div className={styles.diaStats}>
                          <span>{actividadesDelDia.length} act.</span>
                          <span>{tiempoTotal}h</span>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      className={`${styles.diaContent} ${actividadesDelDia.length === 0 ? styles.emptyDay : ''}`}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const actividadId = e.dataTransfer.getData('actividadId');
                        if (actividadId) {
                          planificarActividad(actividadId, dia.id);
                        }
                      }}
                    >
                      {actividadesDelDia.length === 0 ? (
                        <div className={styles.emptyDayContent}>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <p>Arrastra actividades aquí</p>
                        </div>
                      ) : (
                        actividadesDelDia.map(actividad => (
                          <div key={actividad.id} className={styles.actividadPlanificada}>
                            <div className={styles.actividadPlanificadaHeader}>
                              <div className={styles.actividadPlanificadaInfo}>
                                <strong>{actividad.titulo}</strong>
                                <div className={styles.actividadPlanificadaMeta}>
                                  <span className={getAreaStyles(actividad.area)}>
                                    {actividad.area}
                                  </span>
                                  <span className={styles.tiempo}>
                                    {actividad.tiempoEstimado}
                                  </span>
                                </div>
                              </div>
                              <button
                                className={styles.quitarBtn}
                                onClick={() => quitarPlanificacion(actividad.id)}
                                title="Quitar del día"
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <div className={styles.actividadPlanificadaPrioridad}>
                              <div className={`${styles.prioridadIndicator} ${getPrioridadStyles(actividad.prioridad).class}`}></div>
                              {getPrioridadStyles(actividad.prioridad).text}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resumen y acciones */}
        <div className={styles.planificadorFooter}>
          <div className={styles.resumen}>
            <h4>Resumen de Planificación</h4>
            <div className={styles.resumenStats}>
              <div className={styles.resumenItem}>
                <span className={styles.resumenLabel}>Actividades planificadas:</span>
                <span className={styles.resumenValue}>{Object.keys(actividadesPlanificadas).length} de {actividades.filter(a => a.estado === 'pendiente').length}</span>
              </div>
              <div className={styles.resumenItem}>
                <span className={styles.resumenLabel}>Tiempo total estimado:</span>
                <span className={styles.resumenValue}>
                  {Object.keys(actividadesPlanificadas).reduce((total, actId) => {
                    const actividad = actividades.find(a => a.id == actId);
                    const tiempo = actividad ? parseInt(actividad.tiempoEstimado) : 0;
                    return total + (isNaN(tiempo) ? 0 : tiempo);
                  }, 0)} horas
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.planificadorActions}>
            <button 
              className={`${styles.btn} ${styles.btnSecondary}`} 
              onClick={cerrarPlanificador}
            >
              Cancelar
            </button>
            <button 
              className={`${styles.btn} ${styles.btnSuccess}`}
              onClick={guardarPlanificacion}
              disabled={Object.keys(actividadesPlanificadas).length === 0}
            >
              <FontAwesomeIcon icon={faSave} />
              Guardar Planificación
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        {/* Modal de detalles de la actividad */}
        {selectedActivity && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Detalles de la Actividad</h2>
                <button className={styles.closeModal} onClick={closeActivityDetails}>
                  ×
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.detailHeader}>
                  <h3 className={styles.detailTitle}>{selectedActivity.titulo}</h3>
                  <div className={styles.detailBadges}>
                    <div className={`${styles.areaBadge} ${getAreaStyles(selectedActivity.area)}`}>
                      {selectedActivity.area}
                    </div>
                    <div className={`${getPrioridadStyles(selectedActivity.prioridad).class} ${styles.prioridadBadge}`}>
                      {getPrioridadStyles(selectedActivity.prioridad).text}
                    </div>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <h4>Descripción</h4>
                  <p>{selectedActivity.descripcion}</p>
                </div>

                <div className={styles.detailGrid}>
                  <div className={styles.detailItem}>
                    <label>Estado:</label>
                    <span className={getEstadoStyles(selectedActivity.estado).class}>
                      <FontAwesomeIcon icon={getEstadoStyles(selectedActivity.estado).icon} />
                      {getEstadoStyles(selectedActivity.estado).text}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Fecha Límite:</label>
                    <span>{selectedActivity.fechaLimite}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Tiempo Estimado:</label>
                    <span>{selectedActivity.tiempoEstimado}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Asignado por:</label>
                    <span>{selectedActivity.asignadoPor}</span>
                  </div>
                </div>

                {selectedActivity.progreso > 0 && (
                  <div className={styles.detailSection}>
                    <h4>Progreso</h4>
                    <div className={styles.progressBarLarge}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${selectedActivity.progreso}%` }}
                      ></div>
                    </div>
                    <div className={styles.progressText}>{selectedActivity.progreso}% completado</div>
                  </div>
                )}

                <div className={styles.detailSection}>
                  <h4>Subtareas</h4>
                  <ul className={styles.subtareasList}>
                    {selectedActivity.subtareas.map((subtarea, index) => (
                      <li key={index} className={styles.subtareaItem}>
                        <FontAwesomeIcon icon={faClipboardCheck} className={styles.subtareaIcon} />
                        {subtarea}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.modalActions}>
                  <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={closeActivityDetails}>
                    Cerrar
                  </button>
                  {selectedActivity.estado === 'pendiente' && (
                    <button 
                      className={`${styles.btn} ${styles.btnSuccess}`}
                      onClick={() => startActivity(selectedActivity.id)}
                    >
                      <FontAwesomeIcon icon={faPlay} />
                      Iniciar Actividad
                    </button>
                  )}
                  {selectedActivity.estado === 'en-progreso' && (
                    <button 
                      className={`${styles.btn} ${styles.btnSuccess}`}
                      onClick={() => completeActivity(selectedActivity.id)}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Marcar como Completada
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}