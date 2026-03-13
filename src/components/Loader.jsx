// ─────────────────────────────────────────────
//  Component: Loader
//  Full-screen loading screen on initial visit
// ─────────────────────────────────────────────

import React, { useEffect, useState } from 'react';

const loaderStyles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: '#0d1526',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    transition: 'opacity 0.5s ease, visibility 0.5s ease',
  },
  overlayHidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  logo: {
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 700,
    fontSize: '2rem',
    letterSpacing: '4px',
    color: '#f0f4ff',
    animation: 'loaderPop 0.6s ease 0.3s forwards',
    opacity: 0,
  },
  logoSpan: {
    color: '#c9922a',
  },
  barWrap: {
    width: '240px',
    height: '2px',
    background: 'rgba(94,184,212,0.15)',
    borderRadius: '99px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #c9922a, #5eb8d4)',
    animation: 'loadFill 1.4s ease forwards',
    width: 0,
  },
};

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        ...loaderStyles.overlay,
        ...(hidden ? loaderStyles.overlayHidden : {}),
      }}
    >
      <div style={loaderStyles.logo}>
        PENTA<span style={loaderStyles.logoSpan}>TECH</span>
      </div>
      <div style={loaderStyles.barWrap}>
        <div style={loaderStyles.barFill} />
      </div>
    </div>
  );
}

export default Loader;
