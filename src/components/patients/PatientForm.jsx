import React, { useState } from 'react';
import InputMask from "react-input-mask";

function PatientForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nome: '',
    nomeSocial: '',
    dataNascimento: '',
    genero: '',
    documento: '',
    numeroDocumento: '',
    cpf: '',
    profissao: '',
    nomeMae: '',
    profissaoMae: '',
    nomePai: '',
    profissaoPai: '',
    nomeResponsavel: '',
    cpfResponsavel: '',
    nomeConjuge: '',
    outroId: '',
    cep: '',
    cidade: '',
    estado: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    email: '',
    telefone1: '',
    telefone2: '',
    telefone3: '',
    observacoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para buscar endereço pelo CEP
  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData((prev) => ({
            ...prev,
            rua: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            estado: data.uf || ''
          }));
        } else {
          alert('CEP não encontrado!');
        }
      } catch (error) {
        alert('Erro ao buscar o CEP.');
      }
    }
  };

  const handleSubmit = () => {
    if (!formData.nome || !formData.cpf) {
      alert('Por favor, preencha Nome e CPF.');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="card p-3">
      <h3 className="mb-3 text-center">MedicoConnect</h3>

      {/* ------------------ DADOS PESSOAIS ------------------ */}
      <h5 className="mb-3">Dados Pessoais</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Nome:</label>
          <input type="text" className="form-control" name="nome" value={formData.nome} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Nome social:</label>
          <input type="text" className="form-control" name="nomeSocial" value={formData.nomeSocial} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Data de nascimento:</label>
          <input type="date" className="form-control" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Gênero:</label>
          <select className="form-control" name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Outro documento:</label>
          <input type="text" className="form-control" name="documento" value={formData.documento} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Número do documento:</label>
          <input type="text" className="form-control" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>CPF:</label>
          <input type="text" className="form-control" name="cpf" value={formData.cpf} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Profissão:</label>
          <input type="text" className="form-control" name="profissao" value={formData.profissao} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Nome da Mãe:</label>
          <input type="text" className="form-control" name="nomeMae" value={formData.nomeMae} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Profissão da mãe:</label>
          <input type="text" className="form-control" name="profissaoMae" value={formData.profissaoMae} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Nome do Pai:</label>
          <input type="text" className="form-control" name="nomePai" value={formData.nomePai} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Profissão do pai:</label>
          <input type="text" className="form-control" name="profissaoPai" value={formData.profissaoPai} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Nome do responsável:</label>
          <input type="text" className="form-control" name="nomeResponsavel" value={formData.nomeResponsavel} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>CPF do responsável:</label>
          <input type="text" className="form-control" name="cpfResponsavel" value={formData.cpfResponsavel} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Nome do esposo(a):</label>
          <input type="text" className="form-control" name="nomeConjuge" value={formData.nomeConjuge} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Identificador de outro sistema:</label>
          <input type="text" className="form-control" name="outroId" value={formData.outroId} onChange={handleChange} />
        </div>
      </div>

      {/* ------------------ ENDEREÇO ------------------ */}
      <h5>Endereço</h5>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label>CEP:</label>
          <input type="text" className="form-control" name="cep" value={formData.cep} onChange={handleChange} onBlur={handleCepBlur} />
        </div>
        <div className="col-md-8 mb-3">
          <label>Rua:</label>
          <input type="text" className="form-control" name="rua" value={formData.rua} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Bairro:</label>
          <input type="text" className="form-control" name="bairro" value={formData.bairro} onChange={handleChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label>Cidade:</label>
          <input type="text" className="form-control" name="cidade" value={formData.cidade} onChange={handleChange} />
        </div>
        <div className="col-md-2 mb-3">
          <label>Estado:</label>
          <input type="text" className="form-control" name="estado" value={formData.estado} onChange={handleChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label>Número:</label>
          <input type="text" className="form-control" name="numero" value={formData.numero} onChange={handleChange} />
        </div>
        <div className="col-md-8 mb-3">
          <label>Complemento:</label>
          <input type="text" className="form-control" name="complemento" value={formData.complemento} onChange={handleChange} />
        </div>
      </div>

      {/* ------------------ CONTATO ------------------ */}
      <h5>Contato</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Telefone:</label>
          <input type="text" className="form-control" name="telefone1" value={formData.telefone1} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Telefone 2:</label>
          <input type="text" className="form-control" name="telefone2" value={formData.telefone2} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Telefone 3:</label>
          <input type="text" className="form-control" name="telefone3" value={formData.telefone3} onChange={handleChange} />
        </div>
      </div>

      {/* ------------------ INFORMAÇÕES ADICIONAIS ------------------ */}
      <h5>Informações Adicionais</h5>
      <div className="mb-3">
        <label>Observações:</label>
        <textarea className="form-control" name="observacoes" value={formData.observacoes} onChange={handleChange}></textarea>
      </div>

      {/* Botões */}
      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={handleSubmit}>
          Salvar Paciente
        </button>
        <button className="btn btn-light" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default PatientForm;
