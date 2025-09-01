import React from 'react';

// Este componente recebe uma função 'onAddPatient' para avisar que o botão foi clicado
function PatientList({ onAddPatient }) {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Pacientes</h4>
      </div>
      <div className="card-body">
        <p>Gerencie os pacientes cadastrados no sistema.</p>
        <button className="btn btn-primary" onClick={onAddPatient}>
          <i className="bi bi-plus-circle"></i> Adicionar Paciente
        </button>
      </div>
    </div>
  );
}

export default PatientList;