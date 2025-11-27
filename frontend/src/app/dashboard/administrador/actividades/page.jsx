// components/ActividadesAdmin.jsx
'use client';
import NavbarAdmin from '@/app/components/navbar/navbarAdmin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboardList,
  faCheckCircle,
  faClock,
  faExclamationTriangle,
  faPlus,
  faSearch,
  faFilter,
  faEdit,
  faTrash,
  faEye,
  faChartBar,
  faHistory,
  faTasks,
  faUser,
  faEraser // Nuevo icono para limpiar
} from '@fortawesome/free-solid-svg-icons';
import styles from './ActividadesAdmin.module.css';

const ActividadesAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Estadísticas simplificadas
  const stats = [
    { icon: faClipboardList, number: '156', label: 'Total Actividades' },
    { icon: faCheckCircle, number: '128', label: 'Completadas' },
    { icon: faClock, number: '18', label: 'En Progreso' },
    { icon: faExclamationTriangle, number: '10', label: 'Pendientes' }
  ];

  // Actividades recientes simplificadas
  const recentActivities = [
    {
      id: 1,
      title: 'Revisión de Equipos - Área A',
      user: 'Juan Pérez',
      time: 'Hace 2h',
      progress: 100
    },
    {
      id: 2,
      title: 'Limpieza Preventiva Maquinaria Principal',
      user: 'María García',
      time: 'Hace 3h',
      progress: 75
    },
    {
      id: 3,
      title: 'Calibración Máquina B - Proceso Completo',
      user: 'Carlos López',
      time: 'Hace 5h',
      progress: 0
    }
  ];

  // Lista de actividades simplificada
  const activities = [
    {
      id: 'ACT-001',
      name: 'Checklist Diario Seguridad',
      assignedTo: 'Juan Pérez',
      department: 'Producción',
      priority: 'high',
      status: 'completed',
      dueDate: '15 Ene'
    },
    {
      id: 'ACT-002',
      name: 'Limpieza Equipos Área B',
      assignedTo: 'María García',
      department: 'Mantenimiento',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '16 Ene'
    },
    {
      id: 'ACT-003',
      name: 'Revisión Documentación',
      assignedTo: 'Carlos López',
      department: 'Calidad',
      priority: 'high',
      status: 'pending',
      dueDate: '17 Ene'
    },
    {
      id: 'ACT-004',
      name: 'Inventario Materiales',
      assignedTo: 'Ana Martínez',
      department: 'Almacén',
      priority: 'low',
      status: 'completed',
      dueDate: '14 Ene'
    }
  ];

  // Filtrar actividades
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || activity.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || activity.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleEditActivity = (activityId) => {
    alert(`Editando actividad: ${activityId}`);
  };

  const handleDeleteActivity = (activityId) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta actividad?')) {
      alert(`Actividad ${activityId} eliminada`);
    }
  };

  const handleViewDetails = (activityId) => {
    alert(`Viendo detalles de: ${activityId}`);
  };

  const handleCreateActivity = () => {
    alert('Creando nueva actividad...');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setPriorityFilter('all');
  };

  return (
    <>
      <NavbarAdmin />
      <div className={styles.dashboardContainer}>
        <div className={styles.mainContent}>
          
          {/* Filtros mejorados con botón a la derecha */}
          <div className={styles.filtersSection}>
            <div className={styles.filtersHeader}>
              <h3 className={styles.filtersTitle}>
                <FontAwesomeIcon icon={faFilter} />
                Filtros y Búsqueda
              </h3>
              <button className={styles.mainActionBtn} onClick={handleCreateActivity}>
                <FontAwesomeIcon icon={faPlus} />
                Nueva Actividad
              </button>
            </div>
            <div className={styles.filtersContainer}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Buscar por nombre o persona..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className={styles.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Estado</label>
                <select 
                  className={styles.filterSelect}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Todos los estados</option>
                  <option value="completed">Completadas</option>
                  <option value="in-progress">En progreso</option>
                  <option value="pending">Pendientes</option>
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Prioridad</label>
                <select 
                  className={styles.filterSelect}
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="all">Todas</option>
                  <option value="high">Alta</option>
                  <option value="medium">Media</option>
                  <option value="low">Baja</option>
                </select>
              </div>

              {/* Botón Limpiar mejorado */}
              <button className={styles.clearBtn} onClick={clearFilters}>
                <FontAwesomeIcon icon={faEraser} />
                Limpiar
              </button>
            </div>
          </div>

          {/* Estadísticas mejoradas */}
          <div className={styles.statsGrid}>
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

          {/* Layout principal simplificado */}
          <div className={styles.mainGrid}>
            
            {/* Tabla principal */}
            <div className={styles.tableSection}>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>
                  <FontAwesomeIcon icon={faTasks} />
                  Lista de Actividades ({filteredActivities.length})
                </h3>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Asignado a</th>
                      <th>Vence</th>
                      <th>Prioridad</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredActivities.map((activity) => (
                      <tr key={activity.id}>
                        <td>
                          <div>
                            <strong>{activity.name}</strong>
                            <br />
                            <small style={{ color: '#64748b' }}>{activity.department}</small>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FontAwesomeIcon icon={faUser} style={{ color: '#64748b', fontSize: '12px' }} />
                            {activity.assignedTo}
                          </div>
                        </td>
                        <td>{activity.dueDate}</td>
                        <td>
                          <span className={`${styles.priorityBadge} ${
                            activity.priority === 'high' ? styles.priorityHigh :
                            activity.priority === 'medium' ? styles.priorityMedium :
                            styles.priorityLow
                          }`}>
                            {activity.priority === 'high' ? 'Alta' :
                             activity.priority === 'medium' ? 'Media' : 'Baja'}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${
                            activity.status === 'completed' ? styles.statusCompleted :
                            activity.status === 'in-progress' ? styles.statusInProgress :
                            styles.statusPending
                          }`}>
                            {activity.status === 'completed' ? 'Completada' :
                             activity.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionButtons}>
                            <button 
                              className={`${styles.btn} ${styles.btnPrimary}`}
                              onClick={() => handleViewDetails(activity.id)}
                              title="Ver detalles"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button 
                              className={`${styles.btn} ${styles.btnSecondary}`}
                              onClick={() => handleEditActivity(activity.id)}
                              title="Editar"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button 
                              className={`${styles.btn} ${styles.btnDanger}`}
                              onClick={() => handleDeleteActivity(activity.id)}
                              title="Eliminar"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Sidebar simplificado con más espacio */}
            <div className={styles.sidebar}>
              
              {/* Actividades recientes con más espacio */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>
                  <FontAwesomeIcon icon={faHistory} />
                  Actividades Recientes
                </h3>
                <div className={styles.activityList}>
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className={styles.activityItem}>
                      <div className={styles.activityContent}>
                        <div className={styles.activityTitle}>{activity.title}</div>
                        <div className={styles.activityDetails}>
                          <FontAwesomeIcon icon={faUser} style={{ fontSize: '12px' }} />
                          Por {activity.user} • {activity.time}
                        </div>
                        <div className={styles.activityProgress}>
                          <div className={styles.progressBar}>
                            <div 
                              className={styles.progressFill} 
                              style={{ width: `${activity.progress}%` }}
                            ></div>
                          </div>
                          <span>{activity.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActividadesAdmin;