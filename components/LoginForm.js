import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../public/css/form.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else {
      alert(data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Log In</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}
