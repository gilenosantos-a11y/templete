import React from 'react';

function RecentMessages() {
  const messages = [
    { name: 'Hank Schrader', username: '@johnducky', avatar: '/assets/images/faces/6.jpg', color: 'bg-success' },
    { name: 'Dean Winchester', username: '@imdean', avatar: '/assets/images/faces/7.jpg', color: 'bg-primary' },
    { name: 'John Dodol', username: '@dodoljohn', avatar: '/assets/images/faces/8.jpg', color: 'bg-info' },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h4>Recent Messages</h4>
      </div>
      <div className="card-content pb-4">
        {messages.map((message, index) => (
          <div className="recent-message d-flex px-4 py-3" key={index}>
            <div className="avatar avatar-lg me-3">
              <img src={message.avatar} alt={message.name} />
            </div>
            <div className="name">
              <h5 className="mb-1">{message.name}</h5>
              <h6 className="text-muted mb-0">{message.username}</h6>
            </div>
          </div>
        ))}
        <div className="px-4">
          <button className='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Start Conversation</button>
        </div>
      </div>
    </div>
  );
}

export default RecentMessages;