import React from 'react';

const messagesData = [
  { name: 'John Duck', username: '@johnducky', avatar: '/assets/images/faces/1.jpg' },
  { name: 'Hank Schrader', username: '@hankschrader', avatar: '/assets/images/faces/2.jpg' },
  { name: 'Dean Winchester', username: '@imdean', avatar: '/assets/images/faces/3.jpg' },
  { name: 'John Dodol', username: '@dodoljohn', avatar: '/assets/images/faces/4.jpg' },
];

const RecentMessages = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Recent Messages</h4>
      </div>
      <div className="card-content pb-4">
        {messagesData.map((message, index) => (
          <div key={index} className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="avatar me-3">
                <img src={message.avatar} alt="Avatar" />
              </div>
              <div>
                <h6>{message.name}</h6>
                <p className="text-xs mb-0">{message.username}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="px-4 mt-3">
          <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">Start Conversation</button>
        </div>
      </div>
    </div>
  );
};

export default RecentMessages;