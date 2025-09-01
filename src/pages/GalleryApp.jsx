import React, { useState } from "react";

function GalleryApp() {
  const [photos, setPhotos] = useState([
   { id: 1, url: "https://picsum.photos/400/300?random=7", title: "Paisagem 1" },
    /*{url da fotos },*/
    /*{url da fotos },*/
    /*{url da fotos },*/
    /*{url da fotos },*/
    /*{url da fotos },*/
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="page-content">
      <div className="page-heading">
        <h3>Galeria de Fotos</h3>
      </div>

      {/* Grade de fotos */}
      <div className="row">
        {photos.map((photo) => (
          <div key={photo.id} className="col-12 col-md-4 mb-4">
            <div className="card shadow-sm" onClick={() => setSelectedPhoto(photo)}>
              <img
                src={photo.url}
                alt={photo.title}
                className="card-img-top"
                style={{ borderRadius: "10px", cursor: "pointer" }}
              />
              <div className="card-body text-center">
                <h6>{photo.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de visualização */}
      {selectedPhoto && (
        <div
          className="modal d-block"
          style={{
            background: "rgba(0,0,0,0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="modal-content p-3 bg-white"
            style={{ maxWidth: "800px", borderRadius: "12px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="img-fluid"
              style={{ borderRadius: "12px" }}
            />
            <h5 className="mt-2">{selectedPhoto.title}</h5>
            <button
              className="btn btn-danger mt-2"
              onClick={() => setSelectedPhoto(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryApp;
