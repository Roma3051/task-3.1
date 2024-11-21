import React, { useEffect, useState } from "react";
import data from "../../data.json"; 

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data.hits);
  }, []);

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
            <img src={image.previewURL} alt={image.tags} width={image.webformatWidth} height={image.webformatHeight} />
          </a>
          <p>Text 1</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;