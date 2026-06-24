import React from 'react';

// Renders any simple-icons {path, hex} as an inline SVG. Inline (not <img>)
// so it's crisp at any size, can inherit currentColor on hover if needed,
// and never has a broken-image flash.
export default function BrandIcon({ path, hex, size = 28, title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      style={{ flexShrink: 0 }}
    >
      <path d={path} fill={hex} />
    </svg>
  );
}
