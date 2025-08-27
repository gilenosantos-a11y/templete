import React from 'react';

const commentsData = [
  { name: 'Si Cantik', comment: 'Congratulations on your graduation!', avatar: '/assets/images/faces/5.jpg' },
  { name: 'Si Ganteng', comment: 'Wow amazing design! Can you make another tutorial for this design?', avatar: '/assets/images/faces/6.jpg' },
];

const LatestComments = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Latest Comments</h4>
      </div>
      <div className="card-content">
        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead>
              <tr>
                <th className="text-muted">Name</th>
                <th className="text-muted">Comment</th>
              </tr>
            </thead>
            <tbody>
              {commentsData.map((comment, index) => (
                <tr key={index}>
                  <td className="w-50">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img src={comment.avatar} alt="Avatar" />
                      </div>
                      <p className="font-bold mb-0">{comment.name}</p>
                    </div>
                  </td>
                  <td className="w-50">
                    <p className="mb-0">{comment.comment}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestComments;