import React from 'react';
import profile from '../data/profile.json';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React.</span>
        <a href="#hero" className="footer-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
