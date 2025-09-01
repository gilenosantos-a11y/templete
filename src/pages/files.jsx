import React, { useState } from "react";

function Files() {
  // 1. Criamos um estado para armazenar o arquivo selecionado pelo usuário
  const [selectedFile, setSelectedFile] = useState(null);

  // 2. Esta função é chamada quando o usuário seleciona um arquivo no input
  const handleFileChange = (event) => {
    // Pegamos o primeiro arquivo da lista (mesmo que só possa selecionar um)
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // 3. Esta função é chamada quando o botão "Enviar Arquivo" é clicado
  const handleUpload = () => {
    if (!selectedFile) {
      alert("Por favor, selecione um arquivo antes de enviar.");
      return;
    }

    // --- Lógica de Envio (Simulação) ---
    // Em um projeto real, aqui você enviaria o 'selectedFile' para um servidor.
    // Por enquanto, vamos apenas mostrar um alerta de sucesso.
    console.log("Enviando o arquivo:", selectedFile.name);
    alert(`Arquivo "${selectedFile.name}" enviado com sucesso! (Isso é uma simulação)`);

    // Limpa o estado após o envio
    setSelectedFile(null);
  };

  return (
    <>
      <div className="page-heading">
        <h3>Files</h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Gerenciamento de Arquivos</h4>
              </div>
              <div className="card-body">
                {/* 4. Adicionamos o input de arquivo e o botão */}
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Selecione um arquivo para enviar
                  </label>
                  {/* O 'key' ajuda o React a resetar o input quando o arquivo é "enviado" */}
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleFileChange}
                    key={selectedFile ? selectedFile.name : 'no-file'}
                  />
                </div>

                {/* Mostra o nome do arquivo selecionado */}
                {selectedFile && (
                  <p className="text-muted">
                    Arquivo selecionado: <strong>{selectedFile.name}</strong>
                  </p>
                )}

                <button
                  className="btn btn-primary"
                  onClick={handleUpload}
                  disabled={!selectedFile} // O botão fica desabilitado se nenhum arquivo for selecionado
                >
                  <i className="bi bi-upload"></i> Enviar Arquivo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Files;