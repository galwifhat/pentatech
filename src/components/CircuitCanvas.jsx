// ─────────────────────────────────────────────
//  Component: CircuitCanvas
//  Animated particle/circuit background
// ─────────────────────────────────────────────

import React, { useEffect, useRef } from 'react';
import { createNodes, updateNodes, drawConnections, drawNodes } from '../utils/canvas';

function CircuitCanvas() {
  const canvasRef  = useRef(null);
  const nodesRef   = useRef([]);
  const rafRef     = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      nodesRef.current = createNodes(canvas.width, canvas.height);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateNodes(nodesRef.current, canvas.width, canvas.height);
      drawConnections(ctx, nodesRef.current);
      drawNodes(ctx, nodesRef.current);
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default CircuitCanvas;
