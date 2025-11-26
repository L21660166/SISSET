// app/trabajador/page.jsx
"use client";

import NavbarTrabajador from '@/app/components/navbar/navbarTrabajador';


import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExchangeAlt,
  faEye,
  faTasks,
  faExclamationTriangle,
  faListUl,
  faClipboardCheck,
  faHistory,
  faFileAlt,
  faSyncAlt,
  faArrowRight,
  faArrowLeft,
  faTools,
  faBox,
  faQuestionCircle,
  faCamera,
  faUpload,
  faImages,
  faCheckCircle,
  faPaperPlane,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import styles from './DashboardTrabajador.module.css';

export default function TrabajadorPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIncidentCategory, setSelectedIncidentCategory] = useState(null);

  const quickActions = [
    { 
      id: 'start-process',
      icon: faExchangeAlt, 
      title: 'Registrar Turno', 
      desc: 'Entrada o salida',
      onClick: () => setActiveModal('register-shift')
    },
    { 
      id: 'view-previous',
      icon: faEye, 
      title: 'Ver Turno Anterior', 
      desc: 'Revisar entregas',
      onClick: () => alert('Mostrando detalles del turno anterior')
    },
    { 
      icon: faTasks, 
      title: 'Tareas Pendientes', 
      desc: '3 por completar',
      onClick: () => {}
    },
    { 
      id: 'report-incident',
      icon: faExclamationTriangle, 
      title: 'Reportar Problema', 
      desc: 'Incidencias',
      onClick: () => setActiveModal('report-incident')
    }
  ];

  const tasks = [
    { status: 'pending', text: 'Revisión de equipo A' },
    { status: 'in-progress', text: 'Limpieza área 3' },
    { status: 'completed', text: 'Inventario materiales' },
    { status: 'pending', text: 'Calibración máquina B' }
  ];

  const dayActivities = [
    { id: 'day-activity1', label: 'Revisión de seguridad', checked: true },
    { id: 'day-activity2', label: 'Limpieza inicial', checked: true },
    { id: 'day-activity3', label: 'Verificación de equipos', checked: false },
    { id: 'day-activity4', label: 'Informe de producción', checked: false }
  ];

  const processActivities = [
    { id: 'activity1', label: 'CHECKLIST EQUIPO' },
    { id: 'activity2', label: 'LIMPIEZA DEL PUESTO' },
    { id: 'activity3', label: 'REVISIÓN DE INSUMOS' },
    { id: 'activity4', label: 'ORGANIZACIÓN HERRAMIENTAS' }
  ];

  const pendingTasks = [
    { id: 'pending1', label: 'Revisar nivel de aceite máquina B' },
    { id: 'pending2', label: 'Solicitar repuestos área 2' },
    { id: 'pending3', label: 'Reportar falla sensor temperatura' }
  ];

  const incidentCategories = [
    { icon: faTools, label: 'Falla de Equipo', value: 'Falla de Equipo' },
    { icon: faBox, label: 'Falta de Material', value: 'Falta de Material' },
    { icon: faExclamationTriangle, label: 'Seguridad', value: 'Problema de Seguridad' },
    { icon: faQuestionCircle, label: 'Otro', value: 'Otro' }
  ];

  const steps = [
    { number: 1, label: 'Actividades' },
    { number: 2, label: 'Pendientes' },
    { number: 3, label: 'Incidencias' },
    { number: 4, label: 'Evidencias' },
    { number: 5, label: 'Confirmar' }
  ];

  const closeModal = () => {
    setActiveModal(null);
    setCurrentStep(1);
    setSelectedIncidentCategory(null);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeProcess = () => {
    alert('¡Registro de turno completado exitosamente!');
    closeModal();
  };

  const selectIncidentCategory = (category) => {
    setSelectedIncidentCategory(category);
  };

  const sendIncidentReport = () => {
    alert('Reporte de incidencia enviado exitosamente!');
    closeModal();
  };

  function renderStepContent() {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className={styles.stepTitle}>Actividades del Proceso</h3>
            <ul className={styles.processActivityList}>
              {processActivities.map((activity) => (
                <li key={activity.id} className={styles.processActivityItem}>
                  <input type="checkbox" id={activity.id} />
                  <label htmlFor={activity.id}>{activity.label}</label>
                </li>
              ))}
            </ul>
            <div className={styles.stepActions}>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={nextStep}>
                Siguiente <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className={styles.stepTitle}>Tareas Pendientes</h3>
            <ul className={styles.pendingTaskList}>
              {pendingTasks.map((task) => (
                <li key={task.id} className={styles.pendingTaskItem}>
                  <input type="checkbox" id={task.id} />
                  <label htmlFor={task.id}>{task.label}</label>
                </li>
              ))}
            </ul>
            <div className={styles.stepActions}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={prevStep}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.btnIcon} /> Anterior
              </button>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={nextStep}>
                Siguiente <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className={styles.stepTitle}>Incidencias</h3>
            <textarea className={styles.textarea} placeholder="Describe cualquier incidencia..." style={{ minHeight: '100px' }} />
            <div className={styles.stepActions}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={prevStep}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.btnIcon} /> Anterior
              </button>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={nextStep}>
                Siguiente <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className={styles.stepTitle}>Evidencias</h3>
            <div className={styles.evidenceUpload}>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                <FontAwesomeIcon icon={faCamera} className={styles.btnIcon} /> Tomar Foto
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                <FontAwesomeIcon icon={faUpload} className={styles.btnIcon} /> Subir Archivo
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                <FontAwesomeIcon icon={faImages} className={styles.btnIcon} /> Galería
              </button>
            </div>
            <div className={styles.stepActions}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={prevStep}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.btnIcon} /> Anterior
              </button>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={nextStep}>
                Siguiente <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className={styles.stepTitle}>Confirmar Registro</h3>
            <div className={styles.confirmation}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.confirmIcon} />
              <p>¿Estás seguro de registrar la entrega de turno?</p>
            </div>
            <div className={styles.stepActions}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={prevStep}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.btnIcon} /> Anterior
              </button>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={completeProcess}>
                <FontAwesomeIcon icon={faCheck} className={styles.btnIcon} /> Confirmar
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

 return (
  <>
   <NavbarTrabajador />
    <div className={styles.dashboardContainer}>
      {/* Contenido principal */}
      <div className={styles.mainContent}>
        
        {/* Acciones rápidas */}
        <div className={styles.quickActions}>
          {quickActions.map((action, index) => (
            <div key={index} className={styles.quickAction} onClick={action.onClick}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={action.icon} />
              </div>
              <div className={styles.actionTitle}>{action.title}</div>
              <div className={styles.actionDesc}>{action.desc}</div>
            </div>
          ))}
        </div>
        
        {/* Tarjetas informativas */}
        <div className={styles.cardsContainer}>
          {/* Tarjeta Tareas Pendientes */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faTasks} />
              </div>
              <h2 className={styles.cardTitle}>Tareas Pendientes</h2>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                  <li key={index} className={styles.taskItem}>
                    <span className={`${styles.taskStatus} ${
                      task.status === 'pending' ? styles.statusPending :
                      task.status === 'in-progress' ? styles.statusInProgress :
                      styles.statusCompleted
                    }`}></span>
                    {task.text}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <FontAwesomeIcon icon={faListUl} className={styles.btnIcon} />
              Ver Todas las Tareas
            </button>
          </div>
          
          {/* Tarjeta Actividades del Día */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <h2 className={styles.cardTitle}>Actividades del Día</h2>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.checkboxGroup}>
                {dayActivities.map((activity) => (
                  <div key={activity.id} className={styles.checkboxItem}>
                    <input type="checkbox" id={activity.id} defaultChecked={activity.checked} />
                    <label htmlFor={activity.id}>{activity.label}</label>
                  </div>
                ))}
              </div>
            </div>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <FontAwesomeIcon icon={faSyncAlt} className={styles.btnIcon} />
              Actualizar Estado
            </button>
          </div>
          
          {/* Tarjeta Turno Anterior */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faHistory} />
              </div>
              <h2 className={styles.cardTitle}>Resumen Turno Anterior</h2>
            </div>
            <div className={styles.cardContent}>
              <p><strong>Operario:</strong> María González</p>
              <p><strong>Horario:</strong> 16:00 - 00:00</p>
              <p><strong>Estado:</strong> Completado</p>
              <p><strong>Incidencias:</strong> 1 (Falla equipo C)</p>
              <p><strong>Notas:</strong> "Máquina B requiere mantenimiento preventivo"</p>
            </div>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              <FontAwesomeIcon icon={faFileAlt} className={styles.btnIcon} />
              Ver Detalles Completos
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Registro de Turno */}
      <div className={`${styles.modal} ${activeModal === 'register-shift' ? styles.modalActive : ''}`}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Registro de Entrega de Turno</h2>
            <button className={styles.closeModal} onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.processSteps}>
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`${styles.step} ${
                    currentStep === step.number ? styles.stepActive : 
                    currentStep > step.number ? styles.stepCompleted : ''
                  }`}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepLabel}>{step.label}</div>
                </div>
              ))}
            </div>
            
            {renderStepContent()}
          </div>
        </div>
      </div>

      {/* Modal de Reportar Incidencia */}
      <div className={`${styles.modal} ${activeModal === 'report-incident' ? styles.modalActive : ''}`}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Reportar Problema</h2>
            <button className={styles.closeModal} onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalBody}>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '15px', color: '#475569' }}>Selecciona el tipo de problema:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                {incidentCategories.map((category) => (
                  <button 
                    key={category.value}
                    className={`${styles.btn} ${styles.btnSecondary} ${selectedIncidentCategory === category.value ? styles.btnPrimary : ''}`}
                    onClick={() => selectIncidentCategory(category.value)}
                  >
                    <FontAwesomeIcon icon={category.icon} className={styles.btnIcon} />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <textarea 
                className={styles.textarea}
                placeholder="Describa la incidencia..." 
                style={{ minHeight: '120px' }}
              />
            </div>
            
            <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={closeModal}>
                Cancelar
              </button>
              <button className={`${styles.btn} ${styles.btnAccent}`} onClick={sendIncidentReport}>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.btnIcon} />
                Enviar Reporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};