import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = ["Founder", "Software Engineer", "Designer"];

const AnimatedTitles = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex(
                (prevIndex) => (prevIndex + 1) % titles.length,
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 flex items-center relative overflow-hidden">
            <AnimatePresence mode="sync">
                <motion.div
                    key={currentTitleIndex}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                                when: "beforeChildren",
                            },
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                staggerChildren: 0.05,
                                when: "afterChildren",
                            },
                        },
                    }}
                    className="text-sm font-sans text-white/60 absolute w-full py-1"
                >
                    {titles[currentTitleIndex].split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 20 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AnimatedTitles;
