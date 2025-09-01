import React, { useState } from 'react';

// Importamos os dois novos componentes que criamos
import PatientList from '../components/patients/PatientList';
import PatientForm from '../components/patients/PatientForm';

function FormLayout() {
  // Este estado vai controlar qual "tela" mostrar: 'list' (lista) ou 'form' (formulário)
  const [view, setView] = useState('list');

  // Função que será chamada para "salvar" o paciente
  const handleSavePatient = (patientData) => {
    console.log('Salvando paciente:', patientData);
    alert(`Paciente "${patientData.nome}" salvo com sucesso! (Simulação)`); //altere isso para integração com backend
    // Após salvar, voltamos para a tela de lista
    setView('list');
  };

  return (
    <>
      <div className="page-heading">
        <h3>Gerenciamento de Pacientes</h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12">
            {/* Aqui está a lógica principal: */}
            {/* Se a view for 'list', mostramos a lista com o botão. */}
            {/* Se for 'form', mostramos o formulário de cadastro. */}

            {view === 'list' ? (
              <PatientList onAddPatient={() => setView('form')} />
            ) : (
              <PatientForm
                onSave={handleSavePatient}
                onCancel={() => setView('list')}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FormLayout;