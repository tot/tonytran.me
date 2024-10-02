import { useState, useEffect } from 'react';

const titles = [
	'Founder',
	'Software Engineer',
	'Designer',
];

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

const Hero = () => {
	const [currentTitle, setCurrentTitle] = useState(titles[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = titles.indexOf(currentTitle);
			const nextIndex = (currentIndex + 1) % titles.length;
			setCurrentTitle(titles[nextIndex]);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentTitle]);

	return (
		<div className="">
			<h1 className="text-2xl font-bold text-white mb-2">Tony Tran</h1>
			<div className="h-8 relative overflow-hidden">
				<div className="text-base text-white/50 absolute w-full py-1">
					{currentTitle.split("").map((letter, index) => (
						<span key={index} className="inline-block">
							{letter === " " ? "\u00A0" : <GlitchText finalLetter={letter} delay={index * 50} />}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

interface GlitchTextProps {
	finalLetter: string;
	delay: number;
}

const GlitchText = ({ finalLetter, delay }: GlitchTextProps) => {
	const [displayLetter, setDisplayLetter] = useState(() => 
		glyphs[Math.floor(Math.random() * glyphs.length)]
	);
	
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		let interval: NodeJS.Timeout;
		let iterationCount = 0;
		const maxIterations = 10;
		
		const scramble = () => {
			if (iterationCount < maxIterations) {
				setDisplayLetter(glyphs[Math.floor(Math.random() * glyphs.length)]);
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

export default Hero;