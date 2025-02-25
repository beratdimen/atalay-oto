import Link from "next/link";
import "./style.css";
import { RightIcon, RightIcon2 } from "@/helpers/icons";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Biz Kimiz?</h1>
          <p className="about-text">
            1992 yılında kurulan Atalay Otomotiv sektöre ilk adımını ikinci el
            minibüs ve şehir içi toplu taşıma araçlarının satışı ile atmıştır.
            Sektördeki başarısını yaptığı satışlar ile kısa zamanda gösteren
            firma daha sonrasında bayiler ile spot araç alımı anlaşmaları
            yaparak Otokar ve Iveco marka otobüs ve minibüslerin sıfır
            araçlarının satışını üstlenmiş ve araç satış rakamlarını hızla
            arttırmayı başarmıştır. 2006 senesinde aldığı Otokar bayiliği ile
            birlikte yedek parça ve tüm servis hizmetlerini de sunmaya başlayan
            firma 2010 senesinde aldığı Karsan bayiliğiyle de bünyesini
            genişletip büyüme yolunda emin adımlarla ilerleyerek aldığı birçok
            ödülle Atalay Otomotiv markasını taçlandırmayı başarmıştır.
            <Link href={"/hakkimizda"}>
              Detaylı Bilgi <RightIcon2 />
            </Link>
          </p>

          <a href="/contact" className="about-btn">
            Bize Ulaşın
          </a>
        </div>

        <div className="about-image">
          <img src="/img/kent1.jpg" alt="About Us" />
        </div>
      </div>

      <div className="about-values">
        <h2 className="values-title">Değerlerimiz</h2>
        <div className="values-container">
          <div className="value-card">
            <img src="/img/kent1.jpg" alt="Value 1" />
            <h3>Yenilikçilik</h3>
            <p>Her zaman en son teknolojiyi kullanarak çözümler sunarız.</p>
          </div>

          <div className="value-card">
            <img src="/img/kent1.jpg" alt="Value 2" />
            <h3>Güvenilirlik</h3>
            <p>Müşterilerimizin bize olan güvenini her şeyden önde tutarız.</p>
          </div>

          <div className="value-card">
            <img src="/img/kent1.jpg" alt="Value 3" />
            <h3>Kalite</h3>
            <p>
              Hizmetlerimizde kalite standartlarını her zaman en üst seviyede
              tutarız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
