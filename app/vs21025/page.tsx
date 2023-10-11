import React from 'react';
import './estilos.css';
import Head from 'next/head';

const PaginaContenido: React.FC = () => {
  return (

    <div className="gridContainer">
       
      <div className="leftHalf">
        <img
          src="https://th.bing.com/th/id/OIP.lTKvsaaZ0cYvRZLQz3kKBAHaKs?pid=ImgDet&rs=1"
          alt="Left Image"
          className="image"
          
        />
      </div>
      <div className="rightHalf">
        <div className="upperImage">
          <img
            src="https://th.bing.com/th/id/OIP.ZGV9k7WqHg2m44xb41pY5QHaEK?pid=ImgDet&rs=1"
            alt="Upper Image"
            className="image"
            title="Descripción de la imagen superior"
          />
        </div>
        <div className="lowerImageContainer">
          <img
            src="https://th.bing.com/th/id/OIP.c0mNuItrOvTAqGOgfizzRQHaE8?pid=ImgDet&rs=1"
            alt="Lower Image"
            className="image"
            title="Descripción de la imagen inferior"
          />
          <p className="imageDescription">piratas del caribe es una película de fantasía producida por disney.</p>
        </div>
      </div>
    </div>
  );
};

export default PaginaContenido;
