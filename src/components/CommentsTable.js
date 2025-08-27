import React from 'react';

function CommentsTable() {
  const comments = [
    { name: "Si Cantik", avatar: "/assets/images/faces/5.jpg", text: "Congratulations on your graduation!" },
    { name: "Si Ganteng", avatar: "/assets/images/faces/2.jpg", text: "Wow amazing design! Can you make another tutorial for this design?" },
  ];

  return (
    <div className="col-12 col-xl-8">
      <div className="card">
        <div className="card-header">
          <h4>Latest Comments</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-lg">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment, index) => (
                  <tr key={index}>
                    <td className="col-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-md">
                          <img src={comment.avatar} alt={comment.name} />
                        </div>
                        <p className="font-bold ms-3 mb-0">{comment.name}</p>
                      </div>
                    </td>
                    <td className="col-auto">
                      <p className=" mb-0">{comment.text}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsTable;