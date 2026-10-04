import React from "react";

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
