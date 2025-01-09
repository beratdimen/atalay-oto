import "./style.css";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Biz Kimiz?</h1>
          <p className="about-text">
            20 yılı aşkın tecrübemizle, sektörün öncü firmalarından biri olarak
            müşterilerimize yenilikçi, kaliteli ve güvenilir çözümler sunuyoruz.
            Misyonumuz, her zaman en iyiyi hedefleyerek müşterilerimizin
            ihtiyaçlarına kalıcı değer katmaktır.
          </p>
          <p className="about-text">
            Ekibimiz, alanında uzman profesyonellerden oluşmakta ve sürekli
            gelişim anlayışıyla, teknolojiyi yakından takip ederek hizmet
            sunmaktadır.
          </p>
          <a href="/contact" className="about-btn">
            Bize Ulaşın
          </a>
        </div>

        <div className="about-image">
          <img src="/img/car5.png" alt="About Us" />
        </div>
      </div>

      <div className="about-values">
        <h2 className="values-title">Değerlerimiz</h2>
        <div className="values-container">
          <div className="value-card">
            <img src="/img/car2.png" alt="Value 1" />
            <h3>Yenilikçilik</h3>
            <p>Her zaman en son teknolojiyi kullanarak çözümler sunarız.</p>
          </div>

          <div className="value-card">
            <img src="/img/car2.png" alt="Value 2" />
            <h3>Güvenilirlik</h3>
            <p>Müşterilerimizin bize olan güvenini her şeyden önde tutarız.</p>
          </div>

          <div className="value-card">
            <img src="/img/car2.png" alt="Value 3" />
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
