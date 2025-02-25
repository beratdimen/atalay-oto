"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css";
import { LocationIcon, MailIcon, PhoneIcon } from "@/helpers/icons";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "İsim en az 3 karakter olmalıdır")
        .required("İsim gerekli"),
      email: Yup.string()
        .email("Geçerli bir e-posta adresi giriniz")
        .required("E-posta gerekli"),
      message: Yup.string()
        .min(10, "Mesaj en az 10 karakter olmalıdır")
        .required("Mesaj gerekli"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Form gönderildi!");
      console.log("Form Verileri:", values);
      resetForm();
    },
  });

  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.112193359413!2d28.6912522!3d41.0009175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa10056ea3ecd%3A0x365879f0791772cd!2sAtalay%20otomotiv%20otokar%20bayi!5e0!3m2!1str!2str!4v1738140351695!5m2!1str!2str"
        width="730"
        height="730"
        style={{ border: 0, borderRadius: 8 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contactContainer">
        <h2 className="contactTitle">Bize Ulaşın</h2>
        <p className="contactDescription">
          Sorularınızı veya geri bildirimlerinizi bizimle paylaşın.
        </p>
        <div className="contact">
          <div className="location">
            <LocationIcon />
            <p>Turgut Özal, 99. Sk, 34513 Esenyurt/İstanbul</p>
          </div>
          <div className="phone">
            <a href="tel:+90 536 391 85 84">
              <PhoneIcon />
              <p>Telefon: +90 536 391 85 84</p>
            </a>
          </div>
          <div className="mail">
            <a href="mailto:info@atalayoto.com.tr">
              <MailIcon />
              <p>Mail: info@atalayoto.com.tr</p>
            </a>
          </div>
        </div>

        <div className="formContainer">
          <form onSubmit={formik.handleSubmit} className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Adınızı girin"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="formError">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="formGroup">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="E-posta adresinizi girin"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="formError">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="formGroup">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Mesajınızı yazın"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="formError">{formik.errors.message}</div>
              ) : null}
            </div>
            <button type="submit" className="contactButton">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
