import React, { useEffect, useRef } from "react";

interface TrailPoint {
    x: number;
    y: number;
    char: string;
    opacity: number;
}

const AsciiTrail: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trailRef = useRef<TrailPoint[]>([]);
    const lastMousePosRef = useRef({ x: 0, y: 0 });
    const lastAddTimeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ascii =
            "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
        const fontSize = 14;
        ctx.font = `${fontSize}px monospace`;

        const addPoint = (x: number, y: number) => {
            const char = ascii[Math.floor(Math.random() * ascii.length)];
            trailRef.current.push({ x, y, char, opacity: 0.7 });
        };

        const updateAndDrawTrail = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            trailRef.current = trailRef.current
                .map((point) => ({ ...point, opacity: point.opacity - 0.01 }))
                .filter((point) => point.opacity > 0);

            trailRef.current.forEach((point) => {
                ctx.fillStyle = `rgba(0, 255, 0, ${point.opacity})`;
                ctx.fillText(point.char, point.x, point.y);
            });

            requestAnimationFrame(updateAndDrawTrail);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const currentTime = Date.now();

            // Add a new point every 50ms
            if (currentTime - lastAddTimeRef.current > 50) {
                addPoint(clientX, clientY);
                lastAddTimeRef.current = currentTime;
            }

            lastMousePosRef.current = { x: clientX, y: clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        updateAndDrawTrail();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        />
    );
};

export default AsciiTrail;
