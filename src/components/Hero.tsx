import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const titles = [
	{ text: 'Founder', fontClass: '' },
	{ text: 'Software Engineer', fontClass: '' },
	{ text: 'Designer', fontClass: '' },
];

const Hero = () => {
	const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
		}, 5000); // Change title every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { 
				staggerChildren: 0.05,
				delayChildren: 0.01,
			},
		},
		exit: {
			opacity: 0,
			transition: { 
				staggerChildren: 0.05,
				staggerDirection: -1,
				when: "afterChildren",
			},
		},
	};

	const child = {
		hidden: { opacity: 0, y: 5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 400,
			},
		},
		exit: {
			opacity: 0,
			y: -5,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 400,
			},
		},
	};

	return (
		<div className="">
			<h1 className="text-3xl font-bold text-white mb-2 font-departure uppercase tracking-wide">Tony Tran</h1>
			<div className="h-8 relative font-medium uppercase font-departure overflow-hidden tracking-wide">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentTitleIndex}
						variants={container}
						initial="hidden"
						animate="visible"
						exit="exit"
						className={`text-lg text-white/50 absolute w-full ${titles[currentTitleIndex].fontClass}`}
					>
						{titles[currentTitleIndex].text.split("").map((letter, index) => (
							<motion.span
								key={index}
								variants={child}
								className="inline-block"
							>
								{letter === " " ? "\u00A0" : letter}
							</motion.span>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Hero;