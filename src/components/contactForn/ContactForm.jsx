import React, { useState } from "react";
import styles from "./Contactform.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API URL
    const apiUrl = "http://localhost:3042/contact";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "ok") {
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Nulstil formular
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Fejl ved afsendelse af data:", error);
      setShowError(true);
    }
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>
          Navn
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Hvad drejer henvendelsen sig om?
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Besked (Skriv dato’er, hvis det drejer sig om en booking)
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Indsend</button>
      </form>

      {showSuccess && (
        <div className={styles.successPopup}>
          <p>Tak for din besked! Vi vender tilbage hurtigst muligt.</p>
          <button onClick={() => setShowSuccess(false)}>Luk</button>
        </div>
      )}

      {showError && (
        <div className={styles.errorPopup}>
          <p>Der opstod en fejl. Prøv venligst igen senere.</p>
          <button onClick={() => setShowError(false)}>Luk</button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
