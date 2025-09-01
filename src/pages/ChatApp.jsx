import React, { useState } from "react";

function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(1);

  const users = [
    { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/40?img=3" }
  ];

  const messages = {
    1: [
      { from: "Alice", text: "Oi Rafael 👋", time: "10:15" },
      { from: "Você", text: "E aí Alice, tudo bem?", time: "10:16" },
      { from: "Alice", text: "Tudo ótimo! 😄", time: "10:17" }
    ],
    2: [
      { from: "Bob", text: "Fala mano!", time: "09:30" },
      { from: "Você", text: "Tranquilo Bob?", time: "09:32" },
      { from: "Bob", text: "Sempre ✌️", time: "09:33" }
    ],
    3: [
      { from: "Charlie", text: "Já viu a novidade?", time: "Ontem" },
      { from: "Você", text: "Qual novidade?", time: "Ontem" },
      { from: "Charlie", text: "Te conto depois kkk 🤐", time: "Ontem" }
    ]
  };

  const currentMessages = messages[selectedUser] || [];

  return (
    <>
      <div className="page-heading">
        <h3>Chat Application</h3>
        <p className="text-muted">Converse em tempo real com seus contatos</p>
      </div>

      <div className="page-content">
        <div className="row">
          {/* Sidebar - Contatos */}
          <div className="col-3 border-end">
            <h6 className="mb-3">Contatos</h6>
            <ul className="list-group">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`list-group-item d-flex align-items-center ${
                    selectedUser === user.id ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedUser(user.id)}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="rounded-circle me-2"
                    width={40}
                    height={40}
                  />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat */}
          <div className="col-9 d-flex flex-column" style={{ height: "70vh" }}>
            <div
              className="flex-grow-1 border rounded p-3 mb-2 overflow-auto"
              style={{ background: "#f9f9f9" }}
            >
              {currentMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.from === "Você" ? "text-end" : "text-start"
                  }`}
                >
                  <div
                    className={`d-inline-block p-2 rounded ${
                      msg.from === "Você"
                        ? "bg-primary text-white"
                        : "bg-light"
                    }`}
                  >
                    <strong>{msg.from}:</strong> {msg.text}
                  </div>
                  <div className="small text-muted">{msg.time}</div>
                </div>
              ))}
            </div>

            {/* Caixa de mensagem */}
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Digite sua mensagem..."
              />
              <button className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatApp;
