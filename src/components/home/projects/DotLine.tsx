import React, { useRef, useEffect, useState } from "react";

const DotLine: React.FC<{ className?: string }> = ({ className = "" }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dotCount, setDotCount] = useState(0);

    useEffect(() => {
        const updateDots = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                const dotWidth = 12; // 2px dot + 4px gap
                const count = Math.floor(width / dotWidth);
                setDotCount(count);
            }
        };

        updateDots();
        window.addEventListener("resize", updateDots);
        return () => window.removeEventListener("resize", updateDots);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`hidden flex-grow md:flex items-center justify-between ${className}`}
        >
            {Array.from({ length: dotCount }).map((_, index) => (
                <div
                    key={index}
                    className="w-[2px] h-[2px] bg-white/10 rounded-full"
                />
            ))}
        </div>
    );
};

export default DotLine;
