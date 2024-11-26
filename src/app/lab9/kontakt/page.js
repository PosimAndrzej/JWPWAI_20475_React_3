'use client';
import { useState } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za wiadomość, ${formData.name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formularz kontaktowy</h2>
      <label>
        Imię:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Wiadomość:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Wyślij</button>
    </form>
  );
}
