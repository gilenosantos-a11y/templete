import React from "react";

function EmailApp() {
  // Lista fake de emails para exibir
  const emails = [
    {
      id: 1,
      from: "Open source project public release",
      preview: "Hey John, bah kivu decrete epanorthotic unnotched...",
      time: "4:14 AM",
      starred: true,
      avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
      id: 2,
      from: "Ecommerce website Paypal integration",
      preview: "We will start the new application development soon...",
      time: "2:15 AM",
      starred: false,
      avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
      id: 3,
      from: "How To Set Intentions That Energize You",
      preview: "I will provide you more details after this Saturday...",
      time: "Yesterday",
      starred: false,
      avatar: "https://i.pravatar.cc/40?img=3"
    }
  ];

  return (
    <>
      <div className="page-heading">
        <h3>Email Application</h3>
        <p className="text-muted">An application for user to check email inbox</p>
      </div>

      <div className="page-content">
        <div className="row">
          {/* Sidebar */}
          <div className="col-3">
            <button className="btn btn-primary w-100 mb-3">Compose</button>
            <ul className="list-group">
              <li className="list-group-item">📥 Inbox</li>
              <li className="list-group-item">📤 Sent</li>
              <li className="list-group-item">📝 Draft</li>
              <li className="list-group-item">⭐ Starred</li>
              <li className="list-group-item">🚫 Spam</li>
              <li className="list-group-item">🗑 Trash</li>
            </ul>

            <h6 className="mt-4">Labels</h6>
            <ul className="list-group">
              <li className="list-group-item">🏷 Product</li>
              <li className="list-group-item">💼 Work</li>
              <li className="list-group-item">📌 Misc</li>
              <li className="list-group-item">👨‍👩‍👧 Family</li>
              <li className="list-group-item">🎨 Design</li>
            </ul>
          </div>

          {/* Emails */}
          <div className="col-9">
            <div className="d-flex justify-content-between mb-2">
              <div>
                <button className="btn btn-light me-2">🗑</button>
                <button className="btn btn-light me-2">✉</button>
                <button className="btn btn-light me-2">📌</button>
                <button className="btn btn-light me-2">🏷</button>
              </div>
              <input
                type="text"
                className="form-control w-50"
                placeholder="Search email.."
              />
            </div>

            <div className="list-group">
              {emails.map((mail) => (
                <div
                  key={mail.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <input type="checkbox" className="me-2" />
                    <img
                      src={mail.avatar}
                      alt="avatar"
                      className="rounded-circle me-2"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>{mail.from}</strong>
                      <p className="mb-0 text-muted small">{mail.preview}</p>
                    </div>
                  </div>
                  <div>
                    {mail.starred ? "⭐" : "☆"} <br />
                    <small className="text-muted">{mail.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailApp;
