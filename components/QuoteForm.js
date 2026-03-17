'use client';

import { useState } from 'react';

const initialState = { name: '', phone: '', address: '', timing: '', details: '' };

export default function QuoteForm({ mode = 'quote' }) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');
  const isBusiness = mode === 'business';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, mode }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus(
        isBusiness
          ? 'Business inquiry received. Replace this API route with your email inbox, CRM, or webhook.'
          : 'Quote request received. Replace this API route with your email, CRM, or Zapier webhook.'
      );
      setForm(initialState);
    } catch (err) {
      setStatus('There was a problem submitting the form. Replace /api/quote with your preferred backend or form handler.');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <input className="input" placeholder={isBusiness ? 'Name / Company' : 'Name'} value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
        <input className="input" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} required />
      </div>
      <div className="form-grid">
        <input className="input" placeholder={isBusiness ? 'Email or Service Area' : 'Address or ZIP'} value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} />
        <input className="input" placeholder={isBusiness ? 'Best time to talk' : 'Preferred timing'} value={form.timing} onChange={(e)=>setForm({...form, timing:e.target.value})} />
      </div>
      <textarea className="textarea" placeholder={isBusiness ? 'Tell us about your business inquiry' : 'Tell us what needs to be removed'} value={form.details} onChange={(e)=>setForm({...form, details:e.target.value})} required />
      <button className="btn btn-accent btn-block" type="submit">{isBusiness ? 'Send Business Inquiry' : 'Request Fast Quote'}</button>
      <p className="form-note">{isBusiness ? 'Best details to include: company name, markets served, contact info, and what you want to discuss.' : 'Best details to include: item type, approximate volume, address or zip code, and photos if available.'}</p>
      {status ? <p className="form-note">{status}</p> : null}
    </form>
  );
}
