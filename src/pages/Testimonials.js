import React from 'react';

const testimonials = [
  { quote: 'Our wedding cake was breathtaking and so tasty!', author: 'Lina & Mark' },
  { quote: 'Birthday cupcakes disappeared in minutes.', author: 'Priya' },
  { quote: 'Communication and delivery were perfect.', author: 'Jamal' }
];

export default function Testimonials() {
  return (
    <main className="section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="grid">
          {testimonials.map(t => (
            <div key={t.author} className="testimonial">
              <div>“{t.quote}”</div>
              <div className="author">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


