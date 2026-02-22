"use client";

import React, { useEffect, useRef } from "react";

interface HeroWaveProps {
  mode?: "dark" | "light";
}

const HeroWave = ({ mode = "dark" }: HeroWaveProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);

  // Keep modeRef updated without restarting the animation
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number, imageData: ImageData, data: Uint8ClampedArray;
    const SCALE = 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x: number) => {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return SIN_TABLE[index];
    };

    const fastCos = (x: number) => {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return COS_TABLE[index];
    };

    let animationId: number;

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;
      const isLight = modeRef.current === "light";

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          let r: number, g: number, b: number;

          if (isLight) {
            // Light mode: soft pastel gradients on white background
            const intensity = 0.85 + 0.15 * wave;
            const blueAccent = 0.12 * fastSin(a * 1.5 + time * 0.2);
            const purpleAccent = 0.1 * fastCos(d * 2 + time * 0.1);
            const indigoWash = 0.06 * fastSin(u_x * 2 + u_y + time * 0.15);

            r = Math.max(0, Math.min(1, intensity - blueAccent * 0.3 + purpleAccent * 0.5 + indigoWash));
            g = Math.max(0, Math.min(1, intensity - purpleAccent * 0.2 + blueAccent * 0.2));
            b = Math.max(0, Math.min(1, intensity + blueAccent * 0.6 + purpleAccent * 0.3 + indigoWash * 0.5));
          } else {
            // Dark mode: original deep dark colors
            const intensity = 0.3 + 0.4 * wave;
            const baseVal = 0.1 + 0.15 * fastCos(u_x + u_y + time * 0.3);
            const blueAccent = 0.2 * fastSin(a * 1.5 + time * 0.2);
            const purpleAccent = 0.15 * fastCos(d * 2 + time * 0.1);

            r = Math.max(0, Math.min(1, baseVal + purpleAccent * 0.8)) * intensity;
            g = Math.max(0, Math.min(1, baseVal + blueAccent * 0.6)) * intensity;
            b = Math.max(0, Math.min(1, baseVal + blueAccent * 1.2 + purpleAccent * 0.4)) * intensity;
          }

          const index = (y * width + x) * 4;
          data[index] = r * 255;
          data[index + 1] = g * 255;
          data[index + 2] = b * 255;
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default HeroWave;
