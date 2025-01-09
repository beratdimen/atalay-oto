import {
  AccumulatorIcon,
  BrakeIcon,
  CarRepairIcon,
  EngineIcon,
} from "@/helpers/icons";

import "./style.css";

export default function Services() {
  const servicesArray = [
    {
      id: 1,
      img: <CarRepairIcon />,
      title: "Minibüs ve Otobüs Mekanik Bakım",
    },
    {
      id: 2,
      img: <BrakeIcon />,
      title: "Fren Sistemleri Onarımı",
    },
    {
      id: 3,
      img: <EngineIcon />,
      title: "Motor Revizyon ve Arıza Tespiti",
    },
    {
      id: 4,
      img: <AccumulatorIcon />,
      title: "7/24 Yol Yardım ve Mobil Destek",
    },
  ];

  return (
    <div className="servicesContainer">
      <div className="text">
        <h3>Hizmetlerimiz</h3>
        <p>
          Atalay Otomotiv olarak minibüs ve otobüs satışındaki uzmanlığımızı,
          tamir ve bakım hizmetlerimizle destekliyoruz. Profesyonel ekibimizle
          aracınız için en iyi çözümleri sunuyoruz.
        </p>
      </div>

      <div className="content">
        {servicesArray.map((x) => (
          <div key={x.id} className="card">
            {x.img}
            <p>{x.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
