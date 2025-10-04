import React, { useRef, useEffect, useState } from "react";
import { useLottery } from "../../../context/LotteryContext";

const COLORS = [
  "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF8E72",
  "#845EC2", "#00C9A7", "#FF9671", "#FFC75F", "#F9F871"
];

const SpinWheel = () => {
  const { equb, isDrawReady, pickWinner, winner, isSpinning, setIsSpinning } = useLottery();
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(0);

  if (!equb) return null;

  const size = 300;
  const radius = size / 2;
  const options = equb.codes.map(c => c.code);
  const sliceAngle = (2 * Math.PI) / options.length;

  // Draw the wheel
  // Draw the wheel
  const drawWheel = (ctx) => {
    ctx.clearRect(0, 0, size, size);

    // Draw slices
    for (let i = 0; i < options.length; i++) {
      const startAngle = i * sliceAngle + angle;
      const endAngle = startAngle + sliceAngle;

      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();

      // Draw text (shift inward so pointer doesn’t cover it)
      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(options[i], radius - 40, 5); // moved inward
      ctx.restore();
    }

    // Center circle
    ctx.beginPath();
    ctx.arc(radius, radius, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#111827";
    ctx.fill();

    // POINTER at TOP (12 o'clock) ✅ always visible
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(radius, 5);
    ctx.lineTo(radius - 15, 40);
    ctx.lineTo(radius + 15, 40);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      drawWheel(ctx);
    }
  }, [angle, equb]);

  const spin = async () => {
    if (isSpinning || !isDrawReady || winner) return;

    setIsSpinning(true);

    const result = await pickWinner(equb.equbId);

    if (result?.result && result.index !== undefined) {
      const winnerIndex = result.index;
      const winnerCode = result.result.code;

      // === KEY FIX: Calculate final angle so winner is at TOP ===
      // TOP = -π/2 radians
      // The center of segment `winnerIndex` is at: (winnerIndex + 0.5) * sliceAngle
      // We want: (winnerIndex + 0.5) * sliceAngle + finalAngle ≡ -π/2 (mod 2π)
      // So: finalAngle = -π/2 - (winnerIndex + 0.5) * sliceAngle + 2π * N

      const winnerCenter = (winnerIndex + 0.5) * sliceAngle;
      const targetTopAngle = -Math.PI / 2; // 12 o'clock

      // Add 5-10 full spins for effect
      const extraSpins = 5 + Math.floor(Math.random() * 6); // 5 to 10
      const finalAngle = targetTopAngle - winnerCenter + extraSpins * 2 * Math.PI;

      // Animate
      const duration = 4000;
      const start = performance.now();

      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentAngle = ease * finalAngle;

        setAngle(currentAngle);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsSpinning(false);
          console.log(`✅ Spin complete! Winner: ${winnerCode}`);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setIsSpinning(false);
    }
  };

  return (
    <div className="flex flex-col items-center">

    
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="rounded-full shadow-lg"
      />


      <button
        onClick={spin}
        disabled={!isDrawReady || isSpinning || !!winner}
        className={`mt-6 px-8 py-3 font-bold rounded-lg shadow-lg text-white
          ${isDrawReady && !winner ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>

      
    </div>
  );
};

export default SpinWheel;