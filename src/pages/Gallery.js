import React from 'react';

export default function Gallery() {
  return (
    <main className="section">
      <div className="container">
        <h2>Gallery</h2>
        <p className="muted">A peek at recent creations.</p>
        <div className="grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="card">
              <img alt={`Cake ${i+1}`} src={`https://images.unsplash.com/photo-1541976076758-347942db197a?q=80&w=1200&auto=format&fit=crop&ixid=${i}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


