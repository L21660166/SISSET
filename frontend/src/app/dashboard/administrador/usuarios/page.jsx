// components/UsuariosAdmin.jsx
'use client';
import NavbarAdmin from '@/app/components/navbar/navbarAdmin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
  faUserCheck,
  faUserClock,
  faUserSlash,
  faPlus,
  faSearch,
  faFilter,
  faEdit,
  faTrash,
  faEye,
  faHistory,
  faUserShield,
  faUserTie,
  faUser,
  faEraser,
  faEnvelope,
  faPhone,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import styles from './UsuariosAdmin.module.css';

const UsuariosAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  // Estadísticas de usuarios
  const stats = [
    { icon: faUsers, number: '42', label: 'Total Usuarios' },
    { icon: faUserCheck, number: '35', label: 'Activos' },
    { icon: faUserClock, number: '5', label: 'Pendientes' },
    { icon: faUserSlash, number: '2', label: 'Inactivos' }
  ];

  // Usuarios recientes
  const recentUsers = [
    {
      id: 1,
      name: 'María González',
      email: 'maria.gonzalez@empresa.com',
      role: 'supervisor',
      status: 'active',
      lastLogin: 'Hace 2h',
      avatar: 'MG'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@empresa.com',
      role: 'trabajador',
      status: 'active',
      lastLogin: 'Hace 4h',
      avatar: 'CR'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      email: 'ana.martinez@empresa.com',
      role: 'admin',
      status: 'active',
      lastLogin: 'Hace 5h',
      avatar: 'AM'
    },
    {
      id: 4,
      name: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      role: 'trabajador',
      status: 'pending',
      lastLogin: 'Nunca',
      avatar: 'JP'
    },
    {
      id: 5,
      name: 'Laura Sánchez',
      email: 'laura.sanchez@empresa.com',
      role: 'supervisor',
      status: 'active',
      lastLogin: 'Ayer',
      avatar: 'LS'
    },
    {
      id: 6,
      name: 'Roberto Díaz',
      email: 'roberto.diaz@empresa.com',
      role: 'trabajador',
      status: 'inactive',
      lastLogin: 'Hace 1 semana',
      avatar: 'RD'
    }
  ];

  // Lista de usuarios
  const users = [
    {
      id: 'USR-001',
      name: 'María González',
      email: 'maria.gonzalez@empresa.com',
      phone: '+1 234 567 8900',
      department: 'Producción',
      role: 'supervisor',
      status: 'active',
      lastLogin: '2024-01-15',
      joinDate: '2023-05-10',
      avatar: 'MG'
    },
    {
      id: 'USR-002',
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@empresa.com',
      phone: '+1 234 567 8901',
      department: 'Mantenimiento',
      role: 'trabajador',
      status: 'active',
      lastLogin: '2024-01-15',
      joinDate: '2023-08-15',
      avatar: 'CR'
    },
    {
      id: 'USR-003',
      name: 'Ana Martínez',
      email: 'ana.martinez@empresa.com',
      phone: '+1 234 567 8902',
      department: 'Administración',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-15',
      joinDate: '2023-01-20',
      avatar: 'AM'
    },
    {
      id: 'USR-004',
      name: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      phone: '+1 234 567 8903',
      department: 'Calidad',
      role: 'trabajador',
      status: 'pending',
      lastLogin: 'Nunca',
      joinDate: '2024-01-10',
      avatar: 'JP'
    },
    {
      id: 'USR-005',
      name: 'Laura Sánchez',
      email: 'laura.sanchez@empresa.com',
      phone: '+1 234 567 8904',
      department: 'Producción',
      role: 'supervisor',
      status: 'active',
      lastLogin: '2024-01-14',
      joinDate: '2023-03-22',
      avatar: 'LS'
    },
    {
      id: 'USR-006',
      name: 'Roberto Díaz',
      email: 'roberto.diaz@empresa.com',
      phone: '+1 234 567 8905',
      department: 'Almacén',
      role: 'trabajador',
      status: 'inactive',
      lastLogin: '2024-01-08',
      joinDate: '2023-11-05',
      avatar: 'RD'
    }
  ];

  // Filtrar usuarios
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleEditUser = (userId) => {
    alert(`Editando usuario: ${userId}`);
  };

  const handleDeleteUser = (userId) => {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      alert(`Usuario ${userId} eliminado`);
    }
  };

  const handleViewDetails = (userId) => {
    alert(`Viendo detalles de: ${userId}`);
  };

  const handleActivateUser = (userId) => {
    alert(`Activando usuario: ${userId}`);
  };

  const handleCreateUser = () => {
    alert('Creando nuevo usuario...');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setRoleFilter('all');
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'supervisor': return 'Supervisor';
      case 'trabajador': return 'Trabajador';
      default: return role;
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin': return faUserShield;
      case 'supervisor': return faUserTie;
      case 'trabajador': return faUser;
      default: return faUser;
    }
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
                Gestión de Usuarios
              </h3>
              <button className={styles.mainActionBtn} onClick={handleCreateUser}>
                <FontAwesomeIcon icon={faPlus} />
                Nuevo Usuario
              </button>
            </div>
            <div className={styles.filtersContainer}>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Buscar por nombre, email o departamento..."
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
                  <option value="active">Activos</option>
                  <option value="pending">Pendientes</option>
                  <option value="inactive">Inactivos</option>
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Rol</label>
                <select 
                  className={styles.filterSelect}
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="all">Todos los roles</option>
                  <option value="admin">Administrador</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="trabajador">Trabajador</option>
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
                  <FontAwesomeIcon icon={faUsers} />
                  Lista de Usuarios ({filteredUsers.length})
                </h3>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Usuario</th>
                      <th>Contacto</th>
                      <th>Departamento</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className={styles.avatarCell}>
                            <div className={styles.tableAvatar}>
                              {user.avatar}
                            </div>
                            <div>
                              <strong>{user.name}</strong>
                              <br />
                              <small style={{ color: '#64748b' }}>
                                ID: {user.id}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#64748b', fontSize: '12px' }} />
                              <small>{user.email}</small>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <FontAwesomeIcon icon={faPhone} style={{ color: '#64748b', fontSize: '12px' }} />
                              <small>{user.phone}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FontAwesomeIcon icon={faBuilding} style={{ color: '#64748b', fontSize: '12px' }} />
                            {user.department}
                          </div>
                        </td>
                        <td>
                          <span className={`${styles.roleBadge} ${
                            user.role === 'admin' ? styles.roleAdmin :
                            user.role === 'supervisor' ? styles.roleSupervisor :
                            styles.roleTrabajador
                          }`}>
                            <FontAwesomeIcon icon={getRoleIcon(user.role)} style={{ marginRight: '4px' }} />
                            {getRoleLabel(user.role)}
                          </span>
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${
                            user.status === 'active' ? styles.statusActive :
                            user.status === 'pending' ? styles.statusPending :
                            styles.statusInactive
                          }`}>
                            {user.status === 'active' ? 'Activo' :
                             user.status === 'pending' ? 'Pendiente' : 'Inactivo'}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actionButtons}>
                            <button 
                              className={`${styles.btn} ${styles.btnPrimary}`}
                              onClick={() => handleViewDetails(user.id)}
                              title="Ver detalles"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button 
                              className={`${styles.btn} ${styles.btnSecondary}`}
                              onClick={() => handleEditUser(user.id)}
                              title="Editar"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            {user.status === 'inactive' && (
                              <button 
                                className={`${styles.btn} ${styles.btnSuccess}`}
                                onClick={() => handleActivateUser(user.id)}
                                title="Activar"
                              >
                                <FontAwesomeIcon icon={faUserCheck} />
                              </button>
                            )}
                            <button 
                              className={`${styles.btn} ${styles.btnDanger}`}
                              onClick={() => handleDeleteUser(user.id)}
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
            
            {/* Sidebar simplificado */}
            <div className={styles.sidebar}>
              
              {/* Usuarios recientes */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>
                  <FontAwesomeIcon icon={faHistory} />
                  Usuarios Recientes
                </h3>
                <div className={styles.userList}>
                  {recentUsers.map((user) => (
                    <div key={user.id} className={styles.userItem}>
                      <div className={styles.userAvatar}>
                        {user.avatar}
                      </div>
                      <div className={styles.userInfo}>
                        <div className={styles.userName}>{user.name}</div>
                        <div className={styles.userDetails}>
                          <span>{user.email}</span>
                          <div className={styles.userStatus}>
                            <div className={`${styles.statusDot} ${
                              user.status === 'active' ? styles.dotActive : styles.dotInactive
                            }`}></div>
                            <span>{user.lastLogin}</span>
                          </div>
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

export default UsuariosAdmin;