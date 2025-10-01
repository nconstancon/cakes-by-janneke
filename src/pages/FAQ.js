import React from 'react';

const faqs = [
  { q: 'How far in advance should I order?', a: '2–4 weeks for custom cakes; earlier for weddings.' },
  { q: 'Do you offer delivery?', a: 'Yes, local delivery is available for a fee.' },
  { q: 'Allergens and dietary options?', a: 'Gluten-free and nut-free available on request; made in a kitchen that handles nuts.' },
];

export default function FAQ() {
  return (
    <main className="section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map(item => (
          <div key={item.q} style={{ marginBottom: 12 }}>
            <strong>{item.q}</strong>
            <div className="muted">{item.a}</div>
          </div>
        ))}
      </div>
    </main>
  );
}


