"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface ParticleData {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
    }

    const createParticle = (): ParticleData => {
      const colors = [
        "rgba(124, 58, 237, 0.6)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(59, 130, 246, 0.6)",
        "rgba(34, 197, 94, 0.5)",
      ];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        speedZ: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const updateParticle = (p: ParticleData): ParticleData => {
      let { x, y, z, speedX, speedY, speedZ } = p;
      
      x += speedX;
      y += speedY;
      z += speedZ;

      if (z > 1000 || z < 0) {
        z = 0;
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }

      if (x < 0 || x > canvas.width) speedX *= -1;
      if (y < 0 || y > canvas.height) speedY *= -1;

      return { ...p, x, y, z, speedX, speedY, speedZ };
    };

    const drawParticle = (p: ParticleData) => {
      const scale = 1000 / (1000 + p.z);
      const x2d = (p.x - canvas.width / 2) * scale + canvas.width / 2;
      const y2d = (p.y - canvas.height / 2) * scale + canvas.height / 2;
      const size2d = p.size * scale;

      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10 * scale;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
      ctx.fill();
    };

    const particles: ParticleData[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 150) {
            const scale1 = 1000 / (1000 + p1.z);
            const scale2 = 1000 / (1000 + p2.z);
            
            const x1 = (p1.x - canvas.width / 2) * scale1 + canvas.width / 2;
            const y1 = (p1.y - canvas.height / 2) * scale1 + canvas.height / 2;
            const x2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
            const y2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;
            
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i] = updateParticle(particles[i]);
        drawParticle(particles[i]);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60 hidden sm:block"
      style={{ background: "transparent" }}
    />
  );
}export function FloatingShapes() {
  const shapes = [
    { size: 400, delay: 0, duration: 25, className: "top-10 -left-20", mobileSize: 200, mobileClassName: "top-5 -left-32" },
    { size: 300, delay: 2, duration: 20, className: "top-1/3 -right-20", mobileSize: 150, mobileClassName: "top-1/2 -right-32" },
    { size: 350, delay: 4, duration: 22, className: "bottom-20 left-1/4", mobileSize: 180, mobileClassName: "bottom-10 -left-24" },
    { size: 250, delay: 1, duration: 18, className: "bottom-1/4 right-10", mobileSize: 120, mobileClassName: "bottom-1/3 -right-28" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.className} hidden sm:block`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="rounded-full bg-linear-to-br from-violet-500/20 via-pink-500/20 to-blue-500/20 blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              filter: "blur(80px)",
            }}
          />
        </motion.div>
      ))}
      
      {/* Mobile-optimized shapes - positioned away from content */}
      {shapes.map((shape, index) => (
        <motion.div
          key={`mobile-${index}`}
          className={`absolute ${shape.mobileClassName} sm:hidden`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1, 0.8],
            rotate: [0, 180],
          }}
          transition={{
            duration: shape.duration * 1.5,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="rounded-full bg-linear-to-br from-violet-500/10 via-pink-500/10 to-blue-500/10 blur-2xl"
            style={{
              width: shape.mobileSize,
              height: shape.mobileSize,
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
