import React, { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up booking logic
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required>
        <option value="">Select a service</option>
        <option value="digital-marketing">Digital Marketing</option>
        <option value="web-development">Web Development</option>
        <option value="consulting">Consulting</option>
      </select>
      <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
