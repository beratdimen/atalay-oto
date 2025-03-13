import React from "react";
import "./style.css";

const About = () => {
  return (
    <section className="about-detail-section">
      <div className="about-detail-container">
        <div className="about-detail-header">
          <h1 className="about-detail-title">Hakkımızda</h1>
          <p className="about-detail-introduction">
            1992 yılında kurulan Atalay Otomotiv, sektöre ilk adımını ikinci el
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
          </p>
        </div>

        <div className="about-detail-awards">
          <h2 className="about-detail-awards-title">Ödüllerimiz</h2>
          <div className="about-detail-awards-list">
            <div className="about-detail-award-item">
              <h3>2008 yılı Otokar otobüs satışları Türkiye ikincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2008 yılı Otokar minibüs satışları Türkiye birincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2009 yılı Otokar otobüs satışları Türkiye birincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2009 yılı Otokar minibüs satışları Türkiye ikincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>
                2009 yılı Otokar otobüs ve minibüs satışları Türkiye birincisi
              </h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2010 yılı Otokar otobüs satışları Türkiye ikincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2010 yılı Otokar minibüs satışları Türkiye birincisi</h3>
            </div>
            <div className="about-detail-award-item">
              <h3>2010 yılı Otokar toplam satışlar Türkiye birincisi</h3>
            </div>
          </div>
        </div>

        <div className="about-detail-locations">
          <h2 className="about-detail-locations-title">
            Sektördeki Başarılarımız
          </h2>
          <p className="about-detail-locations-description">
            Türkiye’nin dört bir yanında şehir içi yolcu taşıma hizmeti veren,
            araçlarının toplu değişimini gerçekleştiren firma; başta Erzincan,
            Zonguldak, Bilecik, Afyonkarahisar, Eskişehir, Manisa, Gaziantep,
            Mardin, Erzurum, Çanakkale, Denizli, Trabzon, Bolu, Bodrum, İnegöl
            ve Tekirdağ illerinde sektöre filo araç satışıyla da damgasını
            vurmuştur.
          </p>
        </div>

        <div className="about-detail-customer-service">
          <h2 className="about-detail-customer-service-title">
            Müşteri Memnuniyeti
          </h2>
          <p className="about-detail-customer-service-description">
            Atalay Otomotiv; araç satış, araç teslim ve satış sonrası hizmet
            kalitesi ile müşteri memnuniyetini üst seviyeye taşımış olup aldığı
            geri dönüşümlerle işletmemize karşı olumlu tutum sergileyen değerli
            müşterilerimiz ‘müşteri bağlılığı’ ilkesinin birer canlı örnekleri
            olarak bizleri onurlandırmışlardır.
          </p>
        </div>

        <div className="about-detail-future-goals">
          <h2 className="about-detail-future-goals-title">Geleceğe Bakış</h2>
          <p className="about-detail-future-goals-description">
            Gelişime, yeni deneyimlere açık ve her geçen gün vizyonunu daha da
            genişleten Atalay Otomotiv, bünyesine katmak istediği yenilikler ile
            sektördeki yerini kararlılıkla sürdürmeyi ve genişletmeyi
            hedeflemiştir. Bu yolculukta gerek uzman kadromuzu gerek geçmiş
            deneyimlerimizi ve gerekse geniş müşteri portföyümüzü arkamıza
            alarak bu yolda ilerlemeyi temenni ediyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
