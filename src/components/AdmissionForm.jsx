import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdmissionForm = () => {
  const { state } = useLocation();
  const { time, date } = state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    city: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-green-600">Appointment Confirmed!</h2>
        <p className="mt-2">
          Thank you <strong>{formData.name}</strong>, your appointment for <strong>{date}</strong> at <strong>{time}</strong> has been booked.
        </p>
        <p className="mt-2 text-sm text-gray-500">Details sent to: {formData.email}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Patient Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          required
          placeholder="Enter your mobile number"
          className="w-full border p-2 rounded"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          required
          placeholder="Enter your age"
          className="w-full border p-2 rounded"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          required
          placeholder="Enter your city"
          className="w-full border p-2 rounded"
          value={formData.city}
          onChange={handleChange}
        />

        <div className="text-sm text-gray-600">
          Appointment: <strong>{date}</strong> at <strong>{time}</strong>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
