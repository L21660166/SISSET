// components/SucursalesAdmin.jsx
'use client';
import NavbarAdmin from '@/app/components/navbar/navbarAdmin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding,
  faMapMarkerAlt,
  faUsers,
  faCheckCircle,
  faExclamationTriangle,
  faPlus,
  faSearch,
  faFilter,
  faEdit,
  faTrash,
  faEye,
  faPhone,
  faEnvelope,
  faGlobe,
  faEraser,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import styles from './SucursalesAdmin.module.css';

const SucursalesAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  // Estadísticas de sucursales
  const stats = [
    { icon: faBuilding, number: '24', label: 'Total Sucursales' },
    { icon: faCheckCircle, number: '18', label: 'Activas' },
    { icon: faExclamationTriangle, number: '3', label: 'En Mantenimiento' },
    { icon: faUsers, number: '156', label: 'Total Empleados' }
  ];

  // Sucursales recientemente actualizadas
  const recentUpdates = [
    {
      id: 1,
      name: 'Sucursal Centro - Renovación',
      description: 'Actualización de sistemas POS completada',
      time: 'Hace 2h',
      type: 'system'
    },
    {
      id: 2,
      name: 'Sucursal Norte',
      description: 'Nuevo gerente asignado: María Rodríguez',
      time: 'Hace 5h',
      type: 'staff'
    },
    {
      id: 3,
      name: 'Sucursal Sur',
      description: 'Inventario actualizado exitosamente',
      time: 'Hace 1d',
      type: 'inventory'
    }
  ];

  // Lista de sucursales
  const branches = [
    {
      id: 'SUC-001',
      name: 'Sucursal Centro',
      manager: 'Carlos Mendoza',
      region: 'Centro',
      status: 'active',
      employees: 25,
      phone: '+1 234 567 890',
      email: 'centro@empresa.com',
      address: 'Av. Principal #123, Ciudad'
    },
    {
      id: 'SUC-002',
      name: 'Sucursal Norte',
      manager: 'Ana López',
      region: 'Norte',
      status: 'active',
      employees: 18,
      phone: '+1 234 567 891',
      email: 'norte@empresa.com',
      address: 'Calle Norte #456, Ciudad'
    },
    {
      id: 'SUC-003',
      name: 'Sucursal Sur',
      manager: 'Roberto Sánchez',
      region: 'Sur',
      status: 'maintenance',
      employees: 22,
      phone: '+1 234 567 892',
      email: 'sur@empresa.com',
      address: 'Av. Sur #789, Ciudad'
    },
    {
      id: 'SUC-004',
      name: 'Sucursal Este',
      manager: 'Laura González',
      region: 'Este',
      status: 'active',
      employees: 15,
      phone: '+1 234 567 893',
      email: 'este@empresa.com',
      address: 'Calle Este #321, Ciudad'
    },
    {
      id: 'SUC-005',
      name: 'Sucursal Oeste',
      manager: 'Miguel Torres',
      region: 'Oeste',
      status: 'inactive',
      employees: 0,
      phone: '+1 234 567 894',
      email: 'oeste@empresa.com',
      address: 'Av. Oeste #654, Ciudad'
    }
  ];

  // Filtrar sucursales
  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.manager.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || branch.status === statusFilter;
    const matchesRegion = regionFilter === 'all' || branch.region === regionFilter;
    
    return matchesSearch && matchesStatus && matchesRegion;
  });

  const handleEditBranch = (branchId) => {
    alert(`Editando sucursal: ${branchId}`);
  };

  const handleDeleteBranch = (branchId) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta sucursal?')) {
      alert(`Sucursal ${branchId} eliminada`);
    }
  };

  const handleViewDetails = (branchId) => {
    alert(`Viendo detalles de: ${branchId}`);
  };

  const handleCreateBranch = () => {
    alert('Creando nueva sucursal...');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setRegionFilter('all');
  };

  return (
    <>
      <NavbarAdmin />
      <div className={styles.dashboardContainer}>
        <div className={styles.mainContent}>
          
          {/* Filtros más compactos */}
          <div className={styles.filtersSection}>
            <div className={styles.filtersHeader}>
              <h3 className={styles.filtersTitle}>
                <FontAwesomeIcon icon={faFilter} />
                Filtros y Búsqueda
              </h3>
              <button className={styles.mainActionBtn} onClick={handleCreateBranch}>
                <FontAwesomeIcon icon={faPlus} />
                Nueva Sucursal
              </button>
            </div>
            <div className={styles.filtersContainer}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Buscar por nombre o gerente..."
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
                  <option value="active">Activas</option>
                  <option value="maintenance">En Mantenimiento</option>
                  <option value="inactive">Inactivas</option>
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Región</label>
                <select 
                  className={styles.filterSelect}
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                >
                  <option value="all">Todas</option>
                  <option value="Centro">Centro</option>
                  <option value="Norte">Norte</option>
                  <option value="Sur">Sur</option>
                  <option value="Este">Este</option>
                  <option value="Oeste">Oeste</option>
                </select>
              </div>

              <button className={styles.clearBtn} onClick={clearFilters}>
                <FontAwesomeIcon icon={faEraser} />
                Limpiar
              </button>
            </div>
          </div>

          {/* Estadísticas más compactas */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Layout principal - Tabla 3/4 y Actualizaciones 1/4 */}
          <div className={styles.mainGrid}>
            
            {/* Tabla principal - 3/4 del ancho */}
            <div className={styles.tableSection}>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>
                  <FontAwesomeIcon icon={faBuilding} />
                  Lista de Sucursales ({filteredBranches.length})
                </h3>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Sucursal</th>
                      <th>Gerente</th>
                      <th>Región</th>
                      <th>Empleados</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBranches.map((branch) => (
                      <tr key={branch.id}>
                        <td>
                          <div className={styles.branchInfo}>
                            <strong>{branch.name}</strong>
                            <div className={styles.branchAddress}>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                              {branch.address}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className={styles.managerInfo}>
                            <FontAwesomeIcon icon={faUsers} />
                            {branch.manager}
                          </div>
                        </td>
                        <td>{branch.region}</td>
                        <td>
                          <span className={styles.employeeCount}>
                            {branch.employees}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${
                            branch.status === 'active' ? styles.statusActive :
                            branch.status === 'maintenance' ? styles.statusMaintenance :
                            styles.statusInactive
                          }`}>
                            {branch.status === 'active' ? 'Activa' :
                             branch.status === 'maintenance' ? 'Mantenimiento' : 'Inactiva'}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionButtons}>
                            <button 
                              className={`${styles.btn} ${styles.btnPrimary}`}
                              onClick={() => handleViewDetails(branch.id)}
                              title="Ver detalles"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button 
                              className={`${styles.btn} ${styles.btnSecondary}`}
                              onClick={() => handleEditBranch(branch.id)}
                              title="Editar"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button 
                              className={`${styles.btn} ${styles.btnDanger}`}
                              onClick={() => handleDeleteBranch(branch.id)}
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
            
            {/* Sidebar - 1/4 del ancho */}
            <div className={styles.sidebar}>
              
              {/* Actualizaciones recientes */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>
                  <FontAwesomeIcon icon={faChartLine} />
                  Actualizaciones Recientes
                </h3>
                <div className={styles.updatesList}>
                  {recentUpdates.map((update) => (
                    <div key={update.id} className={styles.updateItem}>
                      <div className={styles.updateIcon}>
                        <FontAwesomeIcon icon={
                          update.type === 'system' ? faBuilding : 
                          update.type === 'staff' ? faUsers : 
                          faChartLine
                        } />
                      </div>
                      <div className={styles.updateContent}>
                        <div className={styles.updateTitle}>{update.name}</div>
                        <div className={styles.updateDescription}>{update.description}</div>
                        <div className={styles.updateTime}>{update.time}</div>
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

export default SucursalesAdmin;