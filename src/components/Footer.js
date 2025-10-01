import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Cakes by Janneke · <a href="mailto:hello@cakesbyjanneke.com">hello@cakesbyjanneke.com</a></div>
      </div>
    </footer>
  );
}


