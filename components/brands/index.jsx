"use client";
import "./style.css";

export default function Achievements() {
  const achievements = [
    "2008 yılı Otokar otobüs satışları Türkiye ikincisi",
    "2008 yılı Otokar minibüs satışları Türkiye birincisi",
    "2009 yılı Otokar otobüs satışları Türkiye birincisi",
    "2009 yılı Otokar minibüs satışları Türkiye ikincisi",
    "2009 yılı Otokar otobüs ve minibüs satışları Türkiye birincisi",
    "2010 yılı Otokar otobüs satışları Türkiye ikincisi",
    "2010 yılı Otokar minibüs satışları Türkiye birincisi",
    "2010 yılı Otokar toplam satışlar Türkiye birincisi",
  ];

  return (
    <div className="achievementsContainer">
      <h2>Başarılarımız</h2>
      <div className="achievementsGrid">
        {achievements.map((achievement, index) => (
          <div className="achievementCard" key={index}>
            <span className="achievementIcon">🏆</span>
            <p>{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
