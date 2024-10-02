import { useState, useEffect } from 'react';

const Hero = () => {

	return (
		<div className="">
			<h2 className="text-lg font-medium tracking-wide text-white mb-2 font-departure w-full"><span className="px-1">## About</span></h2>
			{/* <h2 className="text-lg font-bold text-white mb-2 font-departure space-x-1"><span>[</span><span className="px-1">About</span><span>]</span></h2> */}
			<div className="font-sans tracking-wide text-base text-white/50 space-y-4">
			<p className="">
				Builder at heart &mdash; I live to create, and create to live.
			</p>
			<p className="">
				I'm passionate about developing solutions for infrastructure, cybersecurity, finance, development, productivity, and software automation. As a wearer of many hats, I'm always learning and exploring new technologies.
			</p>
			<p className="">
				Currently exploring how user analytics can enhance AI products. On the side, I study Computer Science at the University of Virginia. 
			</p>
			</div>
		</div>
	)
}

export default Hero;