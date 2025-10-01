import React from 'react';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Delightfully Crafted Cakes</h1>
            <p>Beautifully designed, baked from scratch, and tailored for your sweetest moments.</p>
            <a className="cta" href="/custom">Design your custom cake</a>
          </div>
          <img className="hero-img" alt="Decorated cake" src="https://images.unsplash.com/photo-1509440159598-8b09d1e8be0d?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Best Sellers</h2>
          <p className="muted">Our most-loved cakes and cupcakes.</p>
          <div className="grid">
            {[1,2,3].map(i => (
              <div key={i} className="card">
                <img alt="Cake" src={`https://images.unsplash.com/photo-1542826438-30f0a667b2c0?q=80&w=1200&auto=format&fit=crop`} />
                <div className="card-body">
                  <div className="card-title">Signature Berry Chantilly</div>
                  <p className="card-sub">Vanilla sponge, mascarpone cream, fresh berries</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What customers say</h2>
          <div className="grid">
            {["Absolutely stunning and delicious!","The cupcakes were a hit!","Seamless ordering and beautiful design."].map((t,idx) => (
              <div key={idx} className="testimonial">
                <div>“{t}”</div>
                <div className="author">— Happy Customer</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


