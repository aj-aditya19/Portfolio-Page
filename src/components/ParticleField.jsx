import React, { useEffect, useRef } from 'react';

// Lightweight canvas particle field with depth-based parallax (no WebGL/Three.js
// dependency) — particles drift slowly and react gently to pointer position to
// fake a 3D depth feel at near-zero performance cost.
export default function ParticleField({ density = 70 }) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isLight = () =>
      document.documentElement.getAttribute('data-theme') === 'light';

    function resize() {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
      init();
    }

    function init() {
      const count = Math.min(density, Math.floor((width * height) / 9000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // depth 0.2 - 1.0
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.8 + 0.6,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const light = isLight();
      const dotColor = light ? '15, 23, 42' : '148, 163, 184';
      const lineColor = light ? '37, 99, 235' : '59, 130, 246';

      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // parallax offset toward pointer, scaled by depth
        const offsetX = (px - 0.5) * 18 * p.z;
        const offsetY = (py - 0.5) * 18 * p.z;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const drawX = p.x + offsetX;
        const drawY = p.y + offsetY;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${0.35 * p.z + 0.1})`;
        ctx.fill();
      }

      // connecting lines for nearby particles (subtle constellation effect)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${0.08 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    function handlePointer(e) {
      const rect = canvas.parentElement.getBoundingClientRect();
      pointerRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    }

    resize();
    step();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointer);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
