import React, { useEffect, useRef } from "react";

const AsciiBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const ascii =
            "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
        const fontSize = 12;
        const scaleFactor = 2; // Increase this to reduce resolution
        const columns = Math.floor(window.innerWidth / fontSize / scaleFactor);
        const rows = Math.floor(window.innerHeight / fontSize / scaleFactor);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.font = `${fontSize * scaleFactor}px monospace`;

        let mouseX = 0;
        let mouseY = 0;

        // Generate a fixed grid of ASCII characters
        const grid = Array(rows)
            .fill(null)
            .map(() =>
                Array(columns)
                    .fill(null)
                    .map(() => ascii[Math.floor(Math.random() * ascii.length)]),
            );

        // Pre-render characters
        const charCanvas = document.createElement("canvas");
        charCanvas.width = fontSize * scaleFactor;
        charCanvas.height = fontSize * scaleFactor;
        const charCtx = charCanvas.getContext("2d");
        if (!charCtx) return;

        const preRenderedChars = new Map();
        ascii.split("").forEach((char) => {
            charCtx.fillStyle = "#0f0f0f";
            charCtx.fillRect(0, 0, charCanvas.width, charCanvas.height);
            charCtx.fillStyle = "#ffffff";
            charCtx.fillText(char, 0, fontSize * scaleFactor);
            preRenderedChars.set(
                char,
                charCtx.getImageData(0, 0, charCanvas.width, charCanvas.height),
            );
        });

        let lastDrawTime = 0;
        const drawInterval = 50; // ms between draws

        const drawBackground = (time: number) => {
            if (time - lastDrawTime < drawInterval) {
                requestAnimationFrame(drawBackground);
                return;
            }

            lastDrawTime = time;

            ctx.fillStyle = "#0f0f0f";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * fontSize * scaleFactor;
                    const y = j * fontSize * scaleFactor;
                    const char = grid[j][i];

                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 100 * scaleFactor;

                    if (distance < maxDistance) {
                        const alpha = 1 - distance / maxDistance;
                        ctx.globalAlpha = alpha * 0.5;
                        ctx.drawImage(charCanvas, x, y);
                    } else {
                        ctx.globalAlpha = 0.1;
                    }

                    const charImageData = preRenderedChars.get(char);
                    if (charImageData) {
                        ctx.putImageData(charImageData, x, y);
                    }
                }
            }

            requestAnimationFrame(drawBackground);
        };

        requestAnimationFrame(drawBackground);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

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

export default AsciiBackground;
