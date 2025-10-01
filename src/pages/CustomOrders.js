import React from 'react';

export default function CustomOrders() {
  return (
    <main className="section">
      <div className="container">
        <h2>Custom Orders</h2>
        <p className="muted">Tell us about your dream cake. We’ll confirm availability and a quote.</p>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Email" type="email" required />
          <input name="date" placeholder="Event date" type="date" />
          <select name="size" defaultValue="">
            <option value="" disabled>Size</option>
            <option>6" round (8-10 servings)</option>
            <option>8" round (12-16 servings)</option>
            <option>Two-tier (30+ servings)</option>
          </select>
          <textarea name="details" placeholder="Design, flavors, inspiration links" rows={5} />
          <button type="submit">Request a quote</button>
        </form>
      </div>
    </main>
  );
}


