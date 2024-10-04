interface WorkCardProps {
    title: string;
    company: string;
    date: string;
    description: string;
    technologies: string[];
    first?: boolean;
}

const WorkCard = ({
    title,
    company,
    date,
    description,
    technologies,
    first,
}: WorkCardProps) => {
    return (
        <div className={`grid grid-cols-12 relative group`}>
            <div
                className={`col-span-12 md:col-span-4 md:border-b border-white/10`}
            >
                <div className="px-6 pt-6 pb-3 md:p-6 h-full border-r border-white/10">
                    <p className="text-white/50 text-sm font-departure tracking-wider">
                        {date}
                    </p>
                </div>
            </div>
            <div className={`col-span-12 md:col-span-8`}>
                <div className="px-6 pb-6 md:p-6 space-y-2 border-r border-white/10">
                    <p className="text-white font-departure font-medium tracking-wide group-hover:text-corner-highlight transition-all duration-100">
                        {title} &mdash; {company}
                    </p>
                    <p className="text-white/60 text-sm leading-6">
                        {description}
                    </p>
                </div>
                <div className="border-t border-white/10">
                    <ul className="flex flex-wrap text-xs font-departure tracking-wider text-white/30">
                        {technologies.map((technology, index) => (
                            <li
                                key={index}
                                className="py-1.5 px-1.5 flex-grow border-r border-b border-white/10"
                            >
                                <div className="flex-1 py-1.5 px-3.5 bg-white/5 md:bg-transparent">
                                    {technology}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-corner-highlight transition-all duration-100"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-corner-highlight transition-all duration-100"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-corner-highlight transition-all duration-100"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-corner-highlight transition-all duration-100"></div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
