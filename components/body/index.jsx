"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { LeftIcon, RightIcon } from "@/helpers/icons";

export default function Body() {
  const backgrounds = [
    "url('/img/IMG-20250210-WA0028.jpg')",
    "url('/img/IMG-20250210-WA0024.jpg')",
    "url('/img/IMG-20250210-WA0029.jpg')",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: backgrounds[currentIndex] }}
    >
      <button className="left" onClick={handlePrev}>
        ❮
      </button>
      <button className="right" onClick={handleNext}>
        ❯
      </button>
      <div className="body-content">
        <h1 className="title">Atalay Otomotiv'e Hoş Geldiniz</h1>
        <h2 className="subtitle">Minibüs ve Otobüs Satışında Güvenin Adresi</h2>
        <p className="description">
          En iyi fiyatlarla minibüs ve otobüs sahibi olun. Satış sonrası destek
          ve araç tamir hizmetlerimizle her zaman yanınızdayız.
        </p>
      </div>
    </div>
  );
}
