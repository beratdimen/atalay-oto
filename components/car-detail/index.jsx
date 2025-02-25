import { CapacityIcon, FuelIcon, WidthIcon } from "@/helpers/icons";
import "./style.css";

export default function CarDetail() {
  const cars = [
    {
      img: "/img/kent1.jpg",
      length: "12m",
      fuel: "Dizel",
      capacity: "102 kişiye kadar",
      model: "Kent",
    },
    {
      img: "/img/comfort.jpg",
      length: "7.2m",
      fuel: "Dizel",
      capacity: "30 kişiye kadar",
      model: "Comfort",
    },
    {
      img: "/img/giga.jpg",
      length: "9.2m",
      fuel: "Dizel",
      capacity: "41 kişiye kadar",
      model: "Giga",
    },
    {
      img: "/img/mega.jpg",
      length: "8.5m",
      fuel: "Dizel",
      capacity: "37 kişiye kadar",
      model: "Mega",
    },
    {
      img: "/img/centro.jpg",
      length: "6.6m",
      fuel: "Dizel",
      capacity: "30 kişiye kadar",
      model: "Centro",
    },
  ];

  return (
    <div className="carDetailContainer">
      <h1>Araçlarımız</h1>
      <div className="carCardContainer">
        {cars.map((x, i) => (
          <div className="carDetail" key={i}>
            <div className="imageWrapper">
              <img src={x.img} alt="kent car" />
              <div className="label">{x.model}</div>
            </div>
            <div className="content">
              <div className="text">
                <WidthIcon /> {x.length}
              </div>
              <div className="text">
                <FuelIcon /> {x.fuel}
              </div>
              <div className="text">
                <CapacityIcon /> {x.capacity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
