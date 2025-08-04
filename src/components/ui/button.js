import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-rose-600 text-white py-2 px-4 rounded-xl hover:bg-rose-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
