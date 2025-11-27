// app/trabajador/evidencias/page.jsx
"use client";

import NavbarTrabajador from '@/app/components/navbar/navbarTrabajador';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera,
  faUpload,
  faSearch,
  faFilter,
  faPlus,
  faEye,
  faDownload,
  faTrash,
  faEdit,
  faImage,
  faFileAlt,
  faVideo,
  faCalendarAlt,
  faCheckCircle,
  faClock,
  faTimesCircle,
  faSort,
  faArrowUp,
  faArrowDown,
  faFolder,
  faShare,
  faTag,
  faList 
} from '@fortawesome/free-solid-svg-icons';
import styles from './Evidencias.module.css';

export default function EvidenciasPage() {
  const [activeFilter, setActiveFilter] = useState('todas');
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [sortBy, setSortBy] = useState('fecha');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'list'

  // Datos de ejemplo para las evidencias
  const evidencias = [
    {
      id: 1,
      titulo: 'Checklist Seguridad Área A',
      descripcion: 'Evidencia fotográfica de la revisión de seguridad realizada en el área de producción A',
      tipo: 'imagen',
      extension: 'jpg',
      tamaño: '2.4 MB',
      fechaSubida: '2024-01-15 08:30',
      fechaCaptura: '2024-01-15',
      actividad: 'Revisión de Seguridad',
      area: 'Producción',
      estado: 'aprobada',
      etiquetas: ['seguridad', 'checklist', 'producción'],
      url: '/placeholder-evidence.jpg',
      vistas: 24,
      descargas: 8
    },
    {
      id: 2,
      titulo: 'Reporte Mantenimiento Máquina B-12',
      descripcion: 'Documento completo del mantenimiento preventivo realizado en máquina de moldeo',
      tipo: 'documento',
      extension: 'pdf',
      tamaño: '5.7 MB',
      fechaSubida: '2024-01-14 14:15',
      fechaCaptura: '2024-01-14',
      actividad: 'Mantenimiento Preventivo',
      area: 'Mantenimiento',
      estado: 'pendiente',
      etiquetas: ['mantenimiento', 'preventivo', 'máquina'],
      url: '/placeholder-document.pdf',
      vistas: 18,
      descargas: 3
    },
    {
      id: 4,
      titulo: 'Fotos Organización Almacén',
      descripcion: 'Imágenes del estado de organización del almacén principal después de la limpieza',
      tipo: 'imagen',
      extension: 'jpg',
      tamaño: '3.1 MB',
      fechaSubida: '2024-01-12 16:20',
      fechaCaptura: '2024-01-12',
      actividad: 'Limpieza y Organización',
      area: 'Almacén',
      estado: 'rechazada',
      etiquetas: ['almacén', 'organización', '5s'],
      url: '/placeholder-evidence.jpg',
      vistas: 15,
      descargas: 2
    },
    {
      id: 5,
      titulo: 'Checklist Equipo Protección',
      descripcion: 'Verificación del equipo de protección personal disponible y en buen estado',
      tipo: 'documento',
      extension: 'pdf',
      tamaño: '1.8 MB',
      fechaSubida: '2024-01-12 09:10',
      fechaCaptura: '2024-01-12',
      actividad: 'Revisión EPP',
      area: 'Seguridad',
      estado: 'aprobada',
      etiquetas: ['epp', 'seguridad', 'checklist'],
      url: '/placeholder-document.pdf',
      vistas: 28,
      descargas: 6
    },
    {
      id: 6,
      titulo: 'Evidencia Capacitación SST',
      descripcion: 'Fotos de la sesión de capacitación sobre seguridad y salud en el trabajo',
      tipo: 'imagen',
      extension: 'jpg',
      tamaño: '4.2 MB',
      fechaSubida: '2024-01-11 11:30',
      fechaCaptura: '2024-01-11',
      actividad: 'Capacitación SST',
      area: 'Recursos Humanos',
      estado: 'aprobada',
      etiquetas: ['capacitación', 'sst', 'formación'],
      url: '/placeholder-evidence.jpg',
      vistas: 21,
      descargas: 4
    }
  ];

  const stats = [
    { 
      icon: faImage, 
      label: 'Total Evidencias', 
      value: '48',
      desc: 'Este mes',
      color: '#3b82f6'
    },
    { 
      icon: faCheckCircle, 
      label: 'Aprobadas', 
      value: '35',
      desc: '73% del total',
      color: '#10b981'
    },
    { 
      icon: faClock, 
      label: 'Pendientes', 
      value: '8',
      desc: 'En revisión',
      color: '#f59e0b'
    },
    { 
      icon: faTimesCircle, 
      label: 'Rechazadas', 
      value: '5',
      desc: 'Requieren acción',
      color: '#ef4444'
    }
  ];

  const filters = [
    { id: 'todas', label: 'Todas' },
    { id: 'aprobada', label: 'Aprobadas' },
    { id: 'pendiente', label: 'Pendientes' },
    { id: 'rechazada', label: 'Rechazadas' }
  ];

  const tiposArchivo = [
    { id: 'imagen', label: 'Imágenes', icon: faImage, color: '#3b82f6' },
    { id: 'documento', label: 'Documentos', icon: faFileAlt, color: '#ef4444' },
    { id: 'video', label: 'Videos', icon: faVideo, color: '#8b5cf6' }
  ];

  const filteredEvidencias = evidencias.filter(evidencia => {
    const matchesFilter = activeFilter === 'todas' || evidencia.estado === activeFilter;
    const matchesSearch = evidencia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         evidencia.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         evidencia.etiquetas.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Ordenar evidencias
  const sortedEvidencias = [...filteredEvidencias].sort((a, b) => {
    let aValue, bValue;
    
    switch(sortBy) {
      case 'titulo':
        aValue = a.titulo.toLowerCase();
        bValue = b.titulo.toLowerCase();
        break;
      case 'fecha':
        aValue = new Date(a.fechaSubida);
        bValue = new Date(b.fechaSubida);
        break;
      case 'tamaño':
        aValue = parseFloat(a.tamaño);
        bValue = parseFloat(b.tamaño);
        break;
      case 'vistas':
        aValue = a.vistas;
        bValue = b.vistas;
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
      case 'aprobada':
        return { class: styles.statusCompleted, text: 'Aprobada', icon: faCheckCircle };
      case 'pendiente':
        return { class: styles.statusPending, text: 'Pendiente', icon: faClock };
      case 'rechazada':
        return { class: styles.statusRejected, text: 'Rechazada', icon: faTimesCircle };
      default:
        return { class: styles.statusPending, text: 'Pendiente', icon: faClock };
    }
  };

  const getTipoStyles = (tipo) => {
    const tipoInfo = tiposArchivo.find(t => t.id === tipo);
    return tipoInfo ? { color: tipoInfo.color, icon: tipoInfo.icon } : { color: '#6b7280', icon: faFileAlt };
  };

  const getExtensionStyles = (extension) => {
    switch(extension) {
      case 'jpg':
      case 'png':
      case 'jpeg':
        return styles.extImage;
      case 'pdf':
        return styles.extPdf;
      case 'doc':
      case 'docx':
        return styles.extDoc;
      case 'mp4':
      case 'avi':
        return styles.extVideo;
      default:
        return styles.extOther;
    }
  };

  const viewEvidenceDetails = (evidencia) => {
    setSelectedEvidence(evidencia);
  };

  const closeEvidenceDetails = () => {
    setSelectedEvidence(null);
  };

  const openUploadModal = () => {
    setShowUploadModal(true);
  };

  const closeUploadModal = () => {
    setShowUploadModal(false);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const subirEvidencia = (formData) => {
    // Lógica para subir evidencia
    alert('Evidencia subida exitosamente');
    closeUploadModal();
  };

  const getSortIcon = (column) => {
    if (sortBy !== column) return faSort;
    return sortOrder === 'asc' ? faArrowUp : faArrowDown;
  };

  const descargarEvidencia = (evidencia) => {
    alert(`Descargando: ${evidencia.titulo}`);
    // Lógica para descargar archivo
  };

  const eliminarEvidencia = (evidencia) => {
    if (confirm(`¿Estás seguro de eliminar "${evidencia.titulo}"?`)) {
      alert(`Evidencia "${evidencia.titulo}" eliminada`);
      // Lógica para eliminar
    }
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
              onClick={openUploadModal}
            >
              <FontAwesomeIcon icon={faUpload} className={styles.btnIcon} />
              Subir Evidencia
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

        {/* Filtros y controles */}
        <div className={styles.controls}>
          <div className={styles.controlsLeft}>
            <div className={styles.searchBox}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar evidencias..."
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

          <div className={styles.controlsRight}>
            <div className={styles.viewToggle}>
              <button 
                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('grid')}
                title="Vista de cuadrícula"
              >
                <FontAwesomeIcon icon={faFolder} />
              </button>
              <button 
                className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('list')}
                title="Vista de lista"
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>
        </div>

        {/* Contenido de evidencias */}
        {viewMode === 'grid' ? (
          /* Vista Grid */
          <div className={styles.evidenciasGrid}>
            {sortedEvidencias.map(evidencia => {
              const estado = getEstadoStyles(evidencia.estado);
              const tipo = getTipoStyles(evidencia.tipo);
              const extensionClass = getExtensionStyles(evidencia.extension);
              
              return (
                <div key={evidencia.id} className={styles.evidenceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon} style={{ color: tipo.color }}>
                      <FontAwesomeIcon icon={tipo.icon} />
                    </div>
                    <div className={styles.cardActions}>
                      <button 
                        className={`${styles.btn} ${styles.btnIcon}`}
                        onClick={() => viewEvidenceDetails(evidencia)}
                        title="Ver detalles"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button 
                        className={`${styles.btn} ${styles.btnIcon}`}
                        onClick={() => descargarEvidencia(evidencia)}
                        title="Descargar"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.evidenceTitle}>{evidencia.titulo}</h3>
                    <p className={styles.evidenceDesc}>{evidencia.descripcion}</p>
                    
                    <div className={styles.evidenceMeta}>
                      <div className={styles.metaItem}>
                        <FontAwesomeIcon icon={faFolder} />
                        <span>{evidencia.actividad}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{evidencia.fechaCaptura}</span>
                      </div>
                    </div>

                    <div className={styles.evidenceStats}>
                      <div className={styles.stat}>
                        <FontAwesomeIcon icon={faEye} />
                        <span>{evidencia.vistas}</span>
                      </div>
                      <div className={styles.stat}>
                        <FontAwesomeIcon icon={faDownload} />
                        <span>{evidencia.descargas}</span>
                      </div>
                      <div className={`${styles.extension} ${extensionClass}`}>
                        {evidencia.extension}
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={`${styles.estado} ${estado.class}`}>
                      <FontAwesomeIcon icon={estado.icon} />
                      {estado.text}
                    </div>
                    <div className={styles.tamaño}>
                      {evidencia.tamaño}
                    </div>
                  </div>

                  <div className={styles.etiquetas}>
                    {evidencia.etiquetas.map((etiqueta, index) => (
                      <span key={index} className={styles.etiqueta}>
                        <FontAwesomeIcon icon={faTag} />
                        {etiqueta}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
            
            {sortedEvidencias.length === 0 && (
              <div className={styles.emptyState}>
                <FontAwesomeIcon icon={faFolder} className={styles.emptyIcon} />
                <p>No se encontraron evidencias</p>
                <button 
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={openUploadModal}
                >
                  <FontAwesomeIcon icon={faUpload} />
                  Subir Primera Evidencia
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Vista Lista */
          <div className={styles.evidenciasList}>
            <div className={styles.listHeader}>
              <div 
                className={styles.listColumn}
                onClick={() => handleSort('titulo')}
              >
                <span>Evidencia</span>
                <FontAwesomeIcon 
                  icon={getSortIcon('titulo')} 
                  className={`${styles.sortIcon} ${
                    sortBy === 'titulo' ? styles.sortActive : ''
                  }`}
                />
              </div>
              <div 
                className={styles.listColumn}
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
                className={styles.listColumn}
                onClick={() => handleSort('tamaño')}
              >
                <span>Tamaño</span>
                <FontAwesomeIcon 
                  icon={getSortIcon('tamaño')} 
                  className={`${styles.sortIcon} ${
                    sortBy === 'tamaño' ? styles.sortActive : ''
                  }`}
                />
              </div>
              <div 
                className={styles.listColumn}
                onClick={() => handleSort('fecha')}
              >
                <span>Fecha</span>
                <FontAwesomeIcon 
                  icon={getSortIcon('fecha')} 
                  className={`${styles.sortIcon} ${
                    sortBy === 'fecha' ? styles.sortActive : ''
                  }`}
                />
              </div>
              <div className={styles.listColumn}>
                <span>Estado</span>
              </div>
              <div className={styles.listColumn}>
                <span>Acciones</span>
              </div>
            </div>

            <div className={styles.listBody}>
              {sortedEvidencias.map(evidencia => {
                const estado = getEstadoStyles(evidencia.estado);
                const tipo = getTipoStyles(evidencia.tipo);
                const extensionClass = getExtensionStyles(evidencia.extension);
                
                return (
                  <div key={evidencia.id} className={styles.listItem}>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemIcon} style={{ color: tipo.color }}>
                        <FontAwesomeIcon icon={tipo.icon} />
                      </div>
                      <div className={styles.itemDetails}>
                        <strong className={styles.itemTitle}>{evidencia.titulo}</strong>
                        <p className={styles.itemDesc}>{evidencia.descripcion}</p>
                        <div className={styles.itemMeta}>
                          <span className={styles.itemActivity}>{evidencia.actividad}</span>
                          <span className={styles.itemArea}>{evidencia.area}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.itemTipo}>
                      <div className={styles.tipoBadge}>
                        <FontAwesomeIcon icon={tipo.icon} />
                        {evidencia.tipo}
                      </div>
                    </div>
                    
                    <div className={styles.itemTamaño}>
                      <span className={styles.tamañoText}>{evidencia.tamaño}</span>
                      <span className={`${styles.extension} ${extensionClass}`}>
                        {evidencia.extension}
                      </span>
                    </div>
                    
                    <div className={styles.itemFecha}>
                      <div className={styles.fechaInfo}>
                        <div className={styles.fecha}>{evidencia.fechaSubida.split(' ')[0]}</div>
                        <div className={styles.hora}>{evidencia.fechaSubida.split(' ')[1]}</div>
                      </div>
                    </div>
                    
                    <div className={styles.itemEstado}>
                      <div className={`${styles.estadoBadge} ${estado.class}`}>
                        <FontAwesomeIcon icon={estado.icon} />
                        {estado.text}
                      </div>
                    </div>
                    
                    <div className={styles.itemAcciones}>
                      <div className={styles.acciones}>
                        <button 
                          className={`${styles.btn} ${styles.btnIcon} ${styles.btnView}`}
                          onClick={() => viewEvidenceDetails(evidencia)}
                          title="Ver detalles"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button 
                          className={`${styles.btn} ${styles.btnIcon} ${styles.btnDownload}`}
                          onClick={() => descargarEvidencia(evidencia)}
                          title="Descargar"
                        >
                          <FontAwesomeIcon icon={faDownload} />
                        </button>
                        <button 
                          className={`${styles.btn} ${styles.btnIcon} ${styles.btnDelete}`}
                          onClick={() => eliminarEvidencia(evidencia)}
                          title="Eliminar"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal de detalles de evidencia */}
        {selectedEvidence && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2>Detalles de la Evidencia</h2>
                <button className={styles.closeModal} onClick={closeEvidenceDetails}>
                  ×
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.detailHeader}>
                  <div className={styles.detailIcon} style={{ color: getTipoStyles(selectedEvidence.tipo).color }}>
                    <FontAwesomeIcon icon={getTipoStyles(selectedEvidence.tipo).icon} />
                  </div>
                  <div>
                    <h3 className={styles.detailTitle}>{selectedEvidence.titulo}</h3>
                    <p className={styles.detailDesc}>{selectedEvidence.descripcion}</p>
                  </div>
                </div>

                <div className={styles.previewSection}>
                  {selectedEvidence.tipo === 'imagen' && (
                    <div className={styles.imagePreview}>
                      <img src={selectedEvidence.url} alt={selectedEvidence.titulo} />
                    </div>
                  )}
                  {selectedEvidence.tipo === 'documento' && (
                    <div className={styles.documentPreview}>
                      <FontAwesomeIcon icon={faFileAlt} />
                      <p>Vista previa del documento no disponible</p>
                    </div>
                  )}
                  {selectedEvidence.tipo === 'video' && (
                    <div className={styles.videoPreview}>
                      <FontAwesomeIcon icon={faVideo} />
                      <p>Vista previa del video no disponible</p>
                    </div>
                  )}
                </div>

                <div className={styles.detailGrid}>
                  <div className={styles.detailItem}>
                    <label>Tipo:</label>
                    <span>{selectedEvidence.tipo}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Extensión:</label>
                    <span className={getExtensionStyles(selectedEvidence.extension)}>
                      {selectedEvidence.extension}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Tamaño:</label>
                    <span>{selectedEvidence.tamaño}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Fecha Subida:</label>
                    <span>{selectedEvidence.fechaSubida}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Fecha Captura:</label>
                    <span>{selectedEvidence.fechaCaptura}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Actividad:</label>
                    <span>{selectedEvidence.actividad}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Área:</label>
                    <span>{selectedEvidence.area}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Estado:</label>
                    <span className={getEstadoStyles(selectedEvidence.estado).class}>
                      <FontAwesomeIcon icon={getEstadoStyles(selectedEvidence.estado).icon} />
                      {getEstadoStyles(selectedEvidence.estado).text}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Vistas:</label>
                    <span>{selectedEvidence.vistas}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Descargas:</label>
                    <span>{selectedEvidence.descargas}</span>
                  </div>
                </div>

                <div className={styles.etiquetasSection}>
                  <label>Etiquetas:</label>
                  <div className={styles.etiquetasList}>
                    {selectedEvidence.etiquetas.map((etiqueta, index) => (
                      <span key={index} className={styles.etiqueta}>
                        <FontAwesomeIcon icon={faTag} />
                        {etiqueta}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.modalActions}>
                  <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={closeEvidenceDetails}>
                    Cerrar
                  </button>
                  <button 
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    onClick={() => descargarEvidencia(selectedEvidence)}
                  >
                    <FontAwesomeIcon icon={faDownload} className={styles.btnIcon} />
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal para subir evidencia */}
        {showUploadModal && (
          <SubirEvidenciaModal 
            onClose={closeUploadModal}
            onUpload={subirEvidencia}
            tiposArchivo={tiposArchivo}
          />
        )}
      </div>
    </>
  );
}

// Componente modal para subir evidencia
function SubirEvidenciaModal({ onClose, onUpload, tiposArchivo }) {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: '',
    actividad: '',
    area: '',
    descripcion: '',
    fechaCaptura: new Date().toISOString().split('T')[0],
    etiquetas: '',
    archivo: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      archivo: e.target.files[0]
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Subir Nueva Evidencia</h2>
          <button className={styles.closeModal} onClick={onClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formBody}>
            <div className={styles.formGroup}>
              <label>Título de la Evidencia *</label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                placeholder="Ingrese un título descriptivo..."
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Tipo de Archivo *</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione tipo</option>
                  {tiposArchivo.map(tipo => (
                    <option key={tipo.id} value={tipo.id}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Actividad *</label>
                <select
                  name="actividad"
                  value={formData.actividad}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione actividad</option>
                  <option value="Revisión de Seguridad">Revisión de Seguridad</option>
                  <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                  <option value="Control de Calidad">Control de Calidad</option>
                  <option value="Limpieza y Organización">Limpieza y Organización</option>
                  <option value="Revisión EPP">Revisión EPP</option>
                  <option value="Capacitación SST">Capacitación SST</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Área *</label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione área</option>
                  <option value="Producción">Producción</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                  <option value="Calidad">Calidad</option>
                  <option value="Almacén">Almacén</option>
                  <option value="Seguridad">Seguridad</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Fecha de Captura *</label>
                <input
                  type="date"
                  name="fechaCaptura"
                  value={formData.fechaCaptura}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Descripción *</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Describa el contenido de la evidencia..."
                rows="4"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Etiquetas (Opcional)</label>
              <input
                type="text"
                name="etiquetas"
                value={formData.etiquetas}
                onChange={handleChange}
                placeholder="Separar etiquetas con comas: seguridad, checklist, producción"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Archivo *</label>
              <div className={styles.fileUpload}>
                <input
                  type="file"
                  name="archivo"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.mp4,.avi"
                  required
                />
                <div className={styles.fileInfo}>
                  <FontAwesomeIcon icon={faUpload} />
                  <span>Seleccionar archivo</span>
                </div>
              </div>
              {formData.archivo && (
                <div className={styles.fileSelected}>
                  Archivo seleccionado: {formData.archivo.name}
                </div>
              )}
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
              <FontAwesomeIcon icon={faUpload} />
              Subir Evidencia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}