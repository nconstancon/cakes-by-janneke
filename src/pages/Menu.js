import React from 'react';

const items = [
  { name: 'Classic Vanilla', desc: 'Vanilla sponge, vanilla bean buttercream' },
  { name: 'Chocolate Fudge', desc: 'Rich cocoa cake, chocolate ganache' },
  { name: 'Red Velvet', desc: 'Cocoa-kissed cake, cream cheese frosting' },
  { name: 'Lemon Zest', desc: 'Citrus sponge, lemon curd, Swiss meringue' },
  { name: 'Carrot Walnut', desc: 'Spiced carrot cake, cream cheese frosting' },
  { name: 'Berry Chantilly', desc: 'Mascarpone cream and fresh berries' }
];

export default function Menu() {
  return (
    <main className="section">
      <div className="container">
        <h2>Cakes & Flavors</h2>
        <p className="muted">Choose a flavor to start your order. Gluten-free options available.</p>
        <div className="grid">
          {items.map(item => (
            <div key={item.name} className="card">
              <img alt={item.name} src={`https://source.unsplash.com/collection/404339/400x300?sig=${encodeURIComponent(item.name)}`} />
              <div className="card-body">
                <div className="card-title">{item.name}</div>
                <p className="card-sub">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


