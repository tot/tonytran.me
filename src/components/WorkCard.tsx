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
        <div
            className={`grid grid-cols-12 ${first ? "border-t border-white/10" : ""}`}
        >
            <div className={`col-span-4 border-b border-white/10`}>
                <div className="p-4 h-full border-r border-white/10">
                    <p className="text-white/30 text-sm font-departure tracking-wider">
                        {date}
                    </p>
                </div>
            </div>
            <div className={`col-span-8`}>
                <div className="p-4 space-y-2 border-r border-white/10">
                    <p className="text-white font-departure font-medium tracking-wide">
                        {title} &mdash; {company}
                    </p>
                    <p className="text-white/60">{description}</p>
                </div>
                <div className="border-t border-white/10">
                    <ul className="flex flex-wrap text-sm font-departure tracking-wider text-white/30">
                        {technologies.map((technology, index) => (
                            <li
                                key={index}
                                className="py-2 px-4 border-r border-b border-white/10 flex-grow"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
