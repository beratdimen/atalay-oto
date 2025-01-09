"use client";
import { useEffect, useState } from "react";
import "./style.css";

export default function Brands() {
  const brands = [
    { id: 1, img: "/img/fiat.webp" },
    { id: 2, img: "/img/honda.webp" },
    { id: 3, img: "/img/jaguar.webp" },
    { id: 4, img: "/img/jeep.webp" },
    { id: 5, img: "/img/mazda.webp" },
    { id: 6, img: "/img/mini.webp" },
    { id: 7, img: "/img/renault.webp" },
    { id: 8, img: "/img/nissan.webp" },
    { id: 9, img: "/img/mercedes.png" },
    { id: 10, img: "/img/land-rover.webp" },
    { id: 11, img: "/img/kia.png" },
  ];

  const clonedBrands = [...brands, ...brands, ...brands];
  const totalItems = clonedBrands.length;

  const [currentIndex, setCurrentIndex] = useState(brands.length);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (currentIndex >= totalItems - brands.length) {
      setCurrentIndex(brands.length);
    }
    if (currentIndex <= brands.length - 1) {
      setCurrentIndex(totalItems - 2 * brands.length);
    }
  };

  return (
    <div className="brandsContainer">
      <h4>Hizmet Verdiğimiz Markalar</h4>
      <div className="sliderWrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 150}px)`,
            transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedBrands.map((x, i) => (
            <img src={x.img} alt={`Brand ${x.id}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
