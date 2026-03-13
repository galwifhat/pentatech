// ─────────────────────────────────────────────
//  PentaTech — Circuit Canvas Drawing Utility
// ─────────────────────────────────────────────

const NODE_COUNT = 55;
const CONNECTION_DISTANCE = 160;

/**
 * Creates an array of animated circuit nodes
 * @param {number} width  - Canvas width
 * @param {number} height - Canvas height
 * @returns {Array} nodes
 */
export function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, () => ({
    x:     Math.random() * width,
    y:     Math.random() * height,
    vx:    (Math.random() - 0.5) * 0.35,
    vy:    (Math.random() - 0.5) * 0.35,
    r:     Math.random() * 2.5 + 1,
    color: Math.random() > 0.5 ? '#5eb8d4' : '#c9922a',
    pulse: Math.random() * Math.PI * 2,
  }));
}

/**
 * Updates node positions and wraps at canvas edges
 * @param {Array}  nodes
 * @param {number} width
 * @param {number} height
 */
export function updateNodes(nodes, width, height) {
  nodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;
    n.pulse += 0.03;
    if (n.x < 0 || n.x > width)  n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
  });
}

/**
 * Draws connections between nearby nodes
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array} nodes
 */
export function drawConnections(ctx, nodes) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx   = nodes[i].x - nodes[j].x;
      const dy   = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < CONNECTION_DISTANCE) {
        const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(94,184,212,${alpha})`;
        ctx.lineWidth   = 0.8;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }
}

/**
 * Draws pulsing nodes
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array} nodes
 */
export function drawNodes(ctx, nodes) {
  nodes.forEach(n => {
    const pulse = 0.5 + 0.5 * Math.sin(n.pulse);

    // Core dot
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * (0.8 + 0.3 * pulse), 0, Math.PI * 2);
    ctx.fillStyle = n.color + '99';
    ctx.fill();

    // Glow ring
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r + 4 * pulse, 0, Math.PI * 2);
    ctx.strokeStyle = n.color + '22';
    ctx.lineWidth   = 1;
    ctx.stroke();
  });
}
