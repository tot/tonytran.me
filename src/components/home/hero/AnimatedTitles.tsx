import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = ["Founder", "Software Engineer", "Designer"];

const glyphs =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const AnimatedTitles = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex(
                (prevIndex) => (prevIndex + 1) % titles.length,
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 flex items-center relative overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentTitleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-departure text-white/50 absolute w-full py-1"
                >
                    {titles[currentTitleIndex]
                        .split("")
                        .map((letter, index) => (
                            <span key={index} className="inline-block">
                                {letter === " " ? (
                                    "\u00A0"
                                ) : (
                                    <GlitchText
                                        finalLetter={letter}
                                        delay={index * 50}
                                    />
                                )}
                            </span>
                        ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

interface GlitchTextProps {
    finalLetter: string;
    delay: number;
}

const GlitchText = ({ finalLetter, delay }: GlitchTextProps) => {
    const [displayLetter, setDisplayLetter] = useState(
        () => glyphs[Math.floor(Math.random() * glyphs.length)],
    );

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;
        let iterationCount = 0;
        const maxIterations = 10;

        const scramble = () => {
            if (iterationCount < maxIterations) {
                setDisplayLetter(
                    glyphs[Math.floor(Math.random() * glyphs.length)],
                );
                iterationCount++;
            } else {
                setDisplayLetter(finalLetter);
                clearInterval(interval);
            }
        };

        setDisplayLetter(glyphs[Math.floor(Math.random() * glyphs.length)]);

        timeout = setTimeout(() => {
            interval = setInterval(scramble, 50);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [finalLetter, delay]);

    return displayLetter;
};

export default AnimatedTitles;
