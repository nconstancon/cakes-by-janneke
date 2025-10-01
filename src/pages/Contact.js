import React from 'react';

export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="muted">We’d love to hear from you.</p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Email" type="email" required />
          <textarea name="message" placeholder="How can we help?" rows={5} />
          <button type="submit">Send message</button>
        </form>
      </div>
    </main>
  );
}


