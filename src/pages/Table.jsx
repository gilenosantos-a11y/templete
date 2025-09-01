import React, { useState } from 'react';

// Seus dados JSON estáticos
const dadosEstáticos = {
    "success": true,
    "data": [
        {
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "nome": "João Silva Santos",
            "nome_social": "João Silva",
            "cpf": "123.456.789-00",
            "data_nascimento": "1985-03-15",
            "sexo": "masculino",
            "telefone": "+55 (11) 99999-8888",
            "email": "joao.silva@email.com",
            "status": "ativo",
            "created_at": "2024-01-15T10:30:00Z",
            "updated_at": "2024-02-20T14:45:00Z"
        }
    ],
    "pagination": {
        "current_page": 1,
        "per_page": 20,
        "total_pages": 5,
        "total_records": 95,
        "has_next": true,
        "has_previous": false
    }
};

const estilos = {
    dropdownButton: { background: 'none', border: 'none', padding: '0', cursor: 'pointer', color: '#6c757d', fontSize: '1.5rem', position: 'relative', display: 'inline-block' },
    dropdownMenu: { position: 'absolute', top: '100%', right: '0', minWidth: '200px', backgroundColor: '#fff', border: '1px solid rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.175)', padding: '0.5rem 0', zIndex: '1000', listStyle: 'none', margin: '0.125rem 0 0' },
    dropdownItem: { display: 'flex', alignItems: 'center', gap: '10px', padding: '0.75rem 1rem', color: '#212529', textDecoration: 'none', cursor: 'pointer' },
    textDanger: { color: '#dc3545' }
};

function Table() {
    const [resposta, setResposta] = useState(dadosEstáticos);
    const [dropdownAbertoId, setDropdownAbertoId] = useState(null);

    const { data: pacientes } = resposta;

    const handleVerDetalhes = (pacienteId) => {
        setDropdownAbertoId(null);
        console.log(`Ver detalhes do paciente: ${pacienteId}`);
    };

    const handleEditar = (pacienteId) => {
        setDropdownAbertoId(null);
        console.log(`Editar paciente: ${pacienteId}`);
    };

    const handleMarcarConsulta = (pacienteId) => {
        setDropdownAbertoId(null);
        console.log(`Marcar consulta para paciente: ${pacienteId}`);
    };

    const handleExcluir = (pacienteId) => {
        console.log(`Ação de exclusão executada para o paciente: ${pacienteId}. O paciente não será removido da lista.`);
        setDropdownAbertoId(null);
    };

    const toggleDropdown = (id) => {
        setDropdownAbertoId(dropdownAbertoId === id ? null : id);
    };

    return (
        <>
<div className="page-heading">
 <h3 className="fs-3 fw-bold">Tabela de Pacientes</h3>
  </div>
<div className="page-content">
<section className="row">
<div className="col-12">
   <div className="card">
 <div className="card-header">
 <h4 className="card-title">Pacientes Cadastrados</h4>
  </div>
 <div className="card-body">
  <div className="table-responsive">
<table className="table table-striped table-hover">
  <thead>
   <tr>
   <th>Nome</th>
   <th>CPF</th>
   <th>Email</th>
   <th>Telefone</th>
    <th>Status</th>
  <th>Ações</th>
    </tr>
    </thead>
    <tbody>
  {pacientes.length > 0 ? (
  pacientes.map(paciente => (
  <tr key={paciente.id}>
  <td>{paciente.nome}</td>
    <td>{paciente.cpf}</td>
    <td>{paciente.email}</td>
  <td>{paciente.telefone}</td>
    <td>
 <span className={`badge ${paciente.status === 'ativo' ? 'bg-success' : 'bg-danger'}`}>
   {paciente.status}
</span>
</td>
  <td>
<div className="dropdown" style={{ position: 'relative' }}>
<button
 style={estilos.dropdownButton}
 onClick={() => toggleDropdown(paciente.id)}
  >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
 </button>
{dropdownAbertoId === paciente.id && (
 <ul style={estilos.dropdownMenu}>
 <li>
   <a style={estilos.dropdownItem} href="#" onClick={() => handleVerDetalhes(paciente.id)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.483-.797 1.175-1.467 2.025L8 14.5c-1.789 0-3.359-1.15-4.662-2.909A13.135 13.135 0 0 1 1.173 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg> Ver detalhes
 </a>
</li>
<li>
<a style={estilos.dropdownItem} href="#" onClick={() => handleEditar(paciente.id)}>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.10l-4 1a.5.5 0 0 1-.65-.65l1-4a.5.5 0 0 1 .1-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4.207 9.5 5.5 10.793 11.793 4.5z"/></svg> Editar
  </a>
  </li>
  <li>
  <a style={estilos.dropdownItem} href="#" onClick={() => handleMarcarConsulta(paciente.id)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg> Marcar Consulta
  </a>
  </li>
 <li><hr className="dropdown-divider" /></li>
<li>
<a style={{ ...estilos.dropdownItem, ...estilos.textDanger }} href="#" onClick={() => handleExcluir(paciente.id)}>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg> Excluir
</a>
  </li>
</ul>
 )}
 </div>
</td>
</tr>
  ))
 ) : (
<tr>
  <td colSpan="6" className="text-center">Nenhum paciente encontrado.</td>
  </tr>
   )}
  </tbody>
 </table>
</div>
 </div>
  </div>
   </div>
 </section>
 </div>
 </>
  );
}
export default Table;