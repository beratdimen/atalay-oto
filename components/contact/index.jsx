"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css";

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
    <div className="contactContainer">
      <h2 className="contactTitle">Bize Ulaşın</h2>
      <p className="contactDescription">
        Sorularınızı veya geri bildirimlerinizi bizimle paylaşın.
      </p>
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
  );
}
