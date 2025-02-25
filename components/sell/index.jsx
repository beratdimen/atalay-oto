"use client";
import React, { useState } from "react";
import "./style.css";

export default function Sell() {
  const cardImages = [
    ["/img/kent1.jpg", "/img/kent2.jpg", "/img/otokar1.jpg"],
    ["/img/kent1.jpg", "/img/kent2.jpg", "/img/otokar1.jpg"],
    ["/img/kent1.jpg", "/img/kent2.jpg", "/img/otokar1.jpg"],
    ["/img/kent1.jpg", "/img/kent2.jpg", "/img/otokar1.jpg"],
    ["/img/kent1.jpg", "/img/kent2.jpg", "/img/otokar1.jpg"],
  ];

  const [currentImages, setCurrentImages] = useState(
    new Array(cardImages.length).fill(0)
  );

  const nextImage = (cardIndex) => {
    setCurrentImages((prevImages) =>
      prevImages.map((img, index) =>
        index === cardIndex ? (img + 1) % cardImages[cardIndex].length : img
      )
    );
  };

  const prevImage = (cardIndex) => {
    setCurrentImages((prevImages) =>
      prevImages.map((img, index) =>
        index === cardIndex
          ? (img - 1 + cardImages[cardIndex].length) %
            cardImages[cardIndex].length
          : img
      )
    );
  };

  return (
    <div className="sellContainer">
      {cardImages.map((images, cardIndex) => (
        <div className="sellCard" key={cardIndex}>
          <div className="cardContent">
            <img
              src={images[currentImages[cardIndex]]}
              alt="Vehicle"
              className="vehicleImage"
            />
            <div className="vehicleDetails">
              <h2>Ford Transit</h2>
              <p>
                <strong>Model:</strong> 2020
              </p>
              <p>
                <strong>Yıl:</strong> 2020
              </p>
              <p>
                <strong>KM:</strong> 25,000
              </p>
              <p>
                <strong>Motor Gücü:</strong> 1997cc
              </p>
              <p>
                <strong>Oturan Yolcu Sayısı:</strong> 14
              </p>
              <p>
                <strong>Ayakta Yolcu Sayısı:</strong> 10
              </p>
            </div>
          </div>
          <div className="arrow-buttons">
            <button
              className="arrow-button arrow-left"
              onClick={() => prevImage(cardIndex)}
            >
              &#60;
            </button>
            <button
              className="arrow-button arrow-right"
              onClick={() => nextImage(cardIndex)}
            >
              &#62;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
