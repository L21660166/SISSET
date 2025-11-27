// app/trabajador/incidencias/page.jsx
"use client";

import NavbarTrabajador from '@/app/components/navbar/navbarTrabajador';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faSearch,
  faFilter,
  faPlus,
  faEye,
  faEdit,
  faTrash,
  faPaperPlane,
  faTools,
  faBox,
  faShieldAlt,
  faUserInjured,
  faFileAlt,
  faCalendarAlt,
  faArrowUp,
  faArrowDown,
  faSort
} from '@fortawesome/free-solid-svg-icons';
import styles from './Incidencias.module.css';

export default function IncidenciasPage() {
  const [activeFilter, setActiveFilter] = useState('todas');
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);
  const [sortBy, setSortBy] = useState('fecha');
  const [sortOrder, setSortOrder] = useState('desc');

  // Datos de ejemplo para las incidencias
  const incidencias = [
    {
      id: 1,
      titulo: 'Falla en Máquina de Moldeo B-12',
      descripcion: 'La máquina presenta ruidos anormales y sobrecalentamiento en el motor principal',
      tipo: 'Falla de Equipo',
      prioridad: 'alta',
      estado: 'pendiente',
      fechaReporte: '2024-01-15 08:30',
      fechaLimite: '2024-01-18',
      area: 'Producción',
      reportadoPor: 'Juan Pérez',
      asignadoA: 'Equipo Mantenimiento',
      evidencias: 2,
      comentarios: 3,
      progreso: 0
    },
    {
      id: 2,
      titulo: 'Falta de Material Insumo A-245',
      descripcion: 'Stock insuficiente del material requerido para el lote de producción actual',
      tipo: 'Falta de Material',
      prioridad: 'media',
      estado: 'en-progreso',
      fechaReporte: '2024-01-14 14:15',
      fechaLimite: '2024-01-16',
      area: 'Almacén',
      reportadoPor: 'María García',
      asignadoA: 'Supervisor Almacén',
      evidencias: 1,
      comentarios: 5,
      progreso: 60
    },
    {
      id: 3,
      titulo: 'Problema de Seguridad en Pasillo B',
      descripcion: 'Piso resbaladizo por derrame de aceite en el pasillo de acceso a producción',
      tipo: 'Seguridad',
      prioridad: 'alta',
      estado: 'completada',
      fechaReporte: '2024-01-13 10:45',
      fechaLimite: '2024-01-13',
      area: 'Producción',
      reportadoPor: 'Carlos López',
      asignadoA: 'Equipo Limpieza',
      evidencias: 3,
      comentarios: 8,
      progreso: 100
    },
    {
      id: 4,
      titulo: 'Equipo de Protección Dañado',
      descripcion: 'Casco de seguridad con la correa rota, requiere reemplazo inmediato',
      tipo: 'Seguridad',
      prioridad: 'alta',
      estado: 'en-progreso',
      fechaReporte: '2024-01-12 16:20',
      fechaLimite: '2024-01-15',
      area: 'Recursos Humanos',
      reportadoPor: 'Ana Martínez',
      asignadoA: 'Coordinador SST',
      evidencias: 1,
      comentarios: 2,
      progreso: 40
    },
    {
      id: 5,
      titulo: 'Error en Sistema de Calidad',
      descripcion: 'El software de control de calidad no registra correctamente las mediciones',
      tipo: 'Sistema',
      prioridad: 'media',
      estado: 'pendiente',
      fechaReporte: '2024-01-12 09:10',
      fechaLimite: '2024-01-19',
      area: 'Calidad',
      reportadoPor: 'Pedro Rodríguez',
      asignadoA: 'Soporte TI',
      evidencias: 0,
      comentarios: 1,
      progreso: 0
    }
  ];

  const stats = [
    { 
      icon: faExclamationTriangle, 
      label: 'Total Incidencias', 
      value: '24',
      desc: 'Este mes',
      color: '#ef4444'
    },
    { 
      icon: faClock, 
      label: 'Pendientes', 
      value: '8',
      desc: 'Por resolver',
      color: '#f59e0b'
    },
    { 
      icon: faCheckCircle, 
      label: 'Resueltas', 
      value: '14',
      desc: 'Este mes',
      color: '#10b981'
    },
    { 
      icon: faTimesCircle, 
      label: 'Vencidas', 
      value: '2',
      desc: 'Requieren atención',
      color: '#dc2626'
    }
  ];

  const filters = [
    { id: 'todas', label: 'Todas' },
    { id: 'pendiente', label: 'Pendientes' },
    { id: 'en-progreso', label: 'En Progreso' },
    { id: 'completada', label: 'Resueltas' }
  ];

  const tiposIncidencia = [
    { id: 'equipo', label: 'Falla de Equipo', icon: faTools, color: '#dc2626' },
    { id: 'material', label: 'Falta de Material', icon: faBox, color: '#d97706' },
    { id: 'seguridad', label: 'Seguridad', icon: faShieldAlt, color: '#059669' },
    { id: 'sistema', label: 'Sistema', icon: faFileAlt, color: '#7c3aed' },
    { id: 'otro', label: 'Otro', icon: faExclamationTriangle, color: '#6b7280' }
  ];

  const filteredIncidencias = incidencias.filter(incidencia => {
    const matchesFilter = activeFilter === 'todas' || incidencia.estado === activeFilter;
    const matchesSearch = incidencia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         incidencia.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incidencia.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Ordenar incidencias
  const sortedIncidencias = [...filteredIncidencias].sort((a, b) => {
    let aValue, bValue;
    
    switch(sortBy) {
      case 'prioridad':
        const prioridadOrder = { alta: 3, media: 2, baja: 1 };
        aValue = prioridadOrder[a.prioridad];
        bValue = prioridadOrder[b.prioridad];
        break;
      case 'fecha':
        aValue = new Date(a.fechaReporte);
        bValue = new Date(b.fechaReporte);
        break;
      case 'estado':
        const estadoOrder = { pendiente: 3, 'en-progreso': 2, completada: 1 };
        aValue = estadoOrder[a.estado];
        bValue = estadoOrder[b.estado];
        break;
      default:
        aValue = a[sortBy];
        bValue = b[sortBy];
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getEstadoStyles = (estado) => {
    switch(estado) {
      case 'completada':
        return { class: styles.statusCompleted, text: 'Resuelta', icon: faCheckCircle };
      case 'en-progreso':
        return { class: styles.statusInProgress, text: 'En Progreso', icon: faClock };
      case 'pendiente':
        return { class: styles.statusPending, text: 'Pendiente', icon: faExclamationTriangle };
      default:
        return { class: styles.statusPending, text: 'Pendiente', icon: faExclamationTriangle };
    }
  };

  const getPrioridadStyles = (prioridad) => {
    switch(prioridad) {
      case 'alta':
        return { class: styles.prioridadAlta, text: 'Alta', color: '#dc2626' };
      case 'media':
        return { class: styles.prioridadMedia, text: 'Media', color: '#d97706' };
      case 'baja':
        return { class: styles.prioridadBaja, text: 'Baja', color: '#059669' };
      default:
        return { class: styles.prioridadMedia, text: 'Media', color: '#d97706' };
    }
  };

  const getTipoStyles = (tipo) => {
    const tipoInfo = tiposIncidencia.find(t => t.label === tipo);
    return tipoInfo ? { color: tipoInfo.color, icon: tipoInfo.icon } : { color: '#6b7280', icon: faExclamationTriangle };
  };

  const viewIncidentDetails = (incidencia) => {
    setSelectedIncident(incidencia);
  };

  const closeIncidentDetails = () => {
    setSelectedIncident(null);
  };

  const openReportModal = () => {
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const reportarIncidencia = (formData) => {
    // Lógica para reportar incidencia
    alert('Incidencia reportada exitosamente');
    closeReportModal();
  };

  const getSortIcon = (column) => {
    if (sortBy !== column) return faSort;
    return sortOrder === 'asc' ? faArrowUp : faArrowDown;
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
              onClick={openReportModal}
            >
              <FontAwesomeIcon icon={faPlus} className={styles.btnIcon} />
              Reportar Incidencia
            </button>
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div 
                className={styles.statIcon}
                style={{ backgroundColor: stat.color }}
              >
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
              placeholder="Buscar incidencias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <div className={styles.controlsRight}>
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
        </div>

        {/* Tabla de incidencias */}
        <div className={styles.incidenciasTable}>
          <div className={styles.tableHeader}>
            <div 
              className={styles.tableColumn}
              onClick={() => handleSort('titulo')}
            >
              <span>Incidencia</span>
              <FontAwesomeIcon 
                icon={getSortIcon('titulo')} 
                className={`${styles.sortIcon} ${
                  sortBy === 'titulo' ? styles.sortActive : ''
                }`}
              />
            </div>
            <div 
              className={styles.tableColumn}
              onClick={() => handleSort('tipo')}
            >
              <span>Tipo</span>
              <FontAwesomeIcon 
                icon={getSortIcon('tipo')} 
                className={`${styles.sortIcon} ${
                  sortBy === 'tipo' ? styles.sortActive : ''
                }`}
              />
            </div>
            <div 
              className={styles.tableColumn}
              onClick={() => handleSort('prioridad')}
            >
              <span>Prioridad</span>
              <FontAwesomeIcon 
                icon={getSortIcon('prioridad')} 
                className={`${styles.sortIcon} ${
                  sortBy === 'prioridad' ? styles.sortActive : ''
                }`}
              />
            </div>
            <div 
              className={styles.tableColumn}
              onClick={() => handleSort('estado')}
            >
              <span>Estado</span>
              <FontAwesomeIcon 
                icon={getSortIcon('estado')} 
                className={`${styles.sortIcon} ${
                  sortBy === 'estado' ? styles.sortActive : ''
                }`}
              />
            </div>
            <div 
              className={styles.tableColumn}
              onClick={() => handleSort('fechaReporte')}
            >
              <span>Fecha Reporte</span>
              <FontAwesomeIcon 
                icon={getSortIcon('fechaReporte')} 
                className={`${styles.sortIcon} ${
                  sortBy === 'fechaReporte' ? styles.sortActive : ''
                }`}
              />
            </div>
            <div className={styles.tableColumn}>
              <span>Acciones</span>
            </div>
          </div>

          <div className={styles.tableBody}>
            {sortedIncidencias.map(incidencia => {
              const estado = getEstadoStyles(incidencia.estado);
              const prioridad = getPrioridadStyles(incidencia.prioridad);
              const tipo = getTipoStyles(incidencia.tipo);
              
              return (
                <div key={incidencia.id} className={styles.tableRow}>
                  <div className={styles.incidenciaInfo}>
                    <div className={styles.incidenciaTitle}>
                      <strong>{incidencia.titulo}</strong>
                      <p className={styles.incidenciaDesc}>{incidencia.descripcion}</p>
                    </div>
                  </div>
                  
                  <div className={styles.tipoCell}>
                    <div 
                      className={styles.tipoBadge}
                      style={{ borderLeftColor: tipo.color }}
                    >
                      <FontAwesomeIcon icon={tipo.icon} className={styles.tipoIcon} />
                      {incidencia.tipo}
                    </div>
                  </div>
                  
                  <div className={styles.prioridadCell}>
                    <div className={`${styles.prioridadBadge} ${prioridad.class}`}>
                      {prioridad.text}
                    </div>
                  </div>
                  
                  <div className={styles.estadoCell}>
                    <div className={`${styles.estadoBadge} ${estado.class}`}>
                      <FontAwesomeIcon icon={estado.icon} />
                      {estado.text}
                    </div>
                    {incidencia.estado !== 'completada' && incidencia.progreso > 0 && (
                      <div className={styles.progressMini}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${incidencia.progreso}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.fechaCell}>
                    <div className={styles.fechaInfo}>
                      <div className={styles.fecha}>{incidencia.fechaReporte.split(' ')[0]}</div>
                      <div className={styles.hora}>{incidencia.fechaReporte.split(' ')[1]}</div>
                    </div>
                  </div>
                  
                  <div className={styles.accionesCell}>
                    <div className={styles.acciones}>
                      <button 
                        className={`${styles.btn} ${styles.btnIcon} ${styles.btnView}`}
                        onClick={() => viewIncidentDetails(incidencia)}
                        title="Ver detalles"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      
                      {incidencia.estado === 'pendiente' && (
                        <button 
                          className={`${styles.btn} ${styles.btnIcon} ${styles.btnEdit}`}
                          title="Editar incidencia"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      )}
                      
                      <button 
                        className={`${styles.btn} ${styles.btnIcon} ${styles.btnDelete}`}
                        title="Eliminar incidencia"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {sortedIncidencias.length === 0 && (
              <div className={styles.emptyState}>
                <FontAwesomeIcon icon={faExclamationTriangle} className={styles.emptyIcon} />
                <p>No se encontraron incidencias</p>
                <button 
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={openReportModal}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Reportar Primera Incidencia
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal de detalles de incidencia */}
        {selectedIncident && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Detalles de la Incidencia</h2>
                <button className={styles.closeModal} onClick={closeIncidentDetails}>
                  ×
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.detailHeader}>
                  <h3 className={styles.detailTitle}>{selectedIncident.titulo}</h3>
                  <div className={styles.detailBadges}>
                    <div 
                      className={styles.tipoBadgeLarge}
                      style={{ borderLeftColor: getTipoStyles(selectedIncident.tipo).color }}
                    >
                      <FontAwesomeIcon icon={getTipoStyles(selectedIncident.tipo).icon} />
                      {selectedIncident.tipo}
                    </div>
                    <div className={`${getPrioridadStyles(selectedIncident.prioridad).class} ${styles.prioridadBadgeLarge}`}>
                      {getPrioridadStyles(selectedIncident.prioridad).text}
                    </div>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <h4>Descripción</h4>
                  <p>{selectedIncident.descripcion}</p>
                </div>

                <div className={styles.detailGrid}>
                  <div className={styles.detailItem}>
                    <label>Estado:</label>
                    <span className={getEstadoStyles(selectedIncident.estado).class}>
                      <FontAwesomeIcon icon={getEstadoStyles(selectedIncident.estado).icon} />
                      {getEstadoStyles(selectedIncident.estado).text}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Fecha Reporte:</label>
                    <span>{selectedIncident.fechaReporte}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Fecha Límite:</label>
                    <span>{selectedIncident.fechaLimite}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Área:</label>
                    <span>{selectedIncident.area}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Reportado por:</label>
                    <span>{selectedIncident.reportadoPor}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Asignado a:</label>
                    <span>{selectedIncident.asignadoA}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Evidencias:</label>
                    <span>{selectedIncident.evidencias} archivos</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Comentarios:</label>
                    <span>{selectedIncident.comentarios}</span>
                  </div>
                </div>

                {selectedIncident.progreso > 0 && (
                  <div className={styles.detailSection}>
                    <h4>Progreso de Resolución</h4>
                    <div className={styles.progressSection}>
                      <div className={styles.progressHeader}>
                        <span>Progreso</span>
                        <span>{selectedIncident.progreso}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${selectedIncident.progreso}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={styles.modalActions}>
                  <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={closeIncidentDetails}>
                    Cerrar
                  </button>
                  <button className={`${styles.btn} ${styles.btnPrimary}`}>
                    <FontAwesomeIcon icon={faEdit} className={styles.btnIcon} />
                    Actualizar Estado
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal para reportar incidencia */}
        {showReportModal && (
          <ReportarIncidenciaModal 
            onClose={closeReportModal}
            onReport={reportarIncidencia}
            tiposIncidencia={tiposIncidencia}
          />
        )}
      </div>
    </>
  );
}

// Componente modal para reportar incidencia
function ReportarIncidenciaModal({ onClose, onReport, tiposIncidencia }) {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: '',
    prioridad: 'media',
    descripcion: '',
    area: '',
    evidencias: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onReport(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Reportar Nueva Incidencia</h2>
          <button className={styles.closeModal} onClick={onClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formBody}>
            <div className={styles.formGroup}>
              <label>Título de la Incidencia *</label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Describa brevemente el problema..."
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Tipo de Incidencia *</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  {tiposIncidencia.map(tipo => (
                    <option key={tipo.id} value={tipo.label}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Prioridad *</label>
                <select
                  name="prioridad"
                  value={formData.prioridad}
                  onChange={handleChange}
                  required
                >
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Área Afectada *</label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un área</option>
                <option value="Producción">Producción</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Calidad">Calidad</option>
                <option value="Almacén">Almacén</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Descripción Detallada *</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describa el problema en detalle, incluyendo cualquier información relevante..."
                rows="5"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Evidencias (Opcional)</label>
              <div className={styles.evidenciasSection}>
                <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
                  <FontAwesomeIcon icon={faFileAlt} />
                  Subir Imágenes
                </button>
                <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
                  <FontAwesomeIcon icon={faFileAlt} />
                  Adjuntar Archivos
                </button>
              </div>
            </div>
          </div>

          <div className={styles.modalActions}>
            <button 
              type="button" 
              className={`${styles.btn} ${styles.btnSecondary}`} 
              onClick={onClose}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className={`${styles.btn} ${styles.btnSuccess}`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Reportar Incidencia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}