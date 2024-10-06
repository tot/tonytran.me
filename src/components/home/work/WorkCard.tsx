import { cn } from "../../../lib/utils";

interface WorkCardProps {
    title: string;
    company: string;
    date: string;
    description: string;
    technologies: string[];
    index?: number;
}

const WorkCard = ({
    title,
    company,
    date,
    description,
    technologies,
    index,
}: WorkCardProps) => {
    return (
        <div className={`grid grid-cols-12 relative`}>
            <div className={`col-span-12 md:col-span-4`}>
                <div className="h-full pb-2 md:pb-0">
                    <p className="text-white/50 text-sm">{date}</p>
                </div>
            </div>
            <div className={`col-span-12 md:col-span-8`}>
                <div className={cn("space-y-2")}>
                    <p className="text-white font-departure font-medium tracking-wide">
                        {title} &mdash; {company}
                    </p>
                    <p className="text-white/60 text-sm leading-6">
                        {description}
                    </p>
                </div>
                <ul className="flex flex-wrap text-xs tracking-wider text-white/50 gap-2 pt-4">
                    {technologies.map((technology, index) => (
                        <li
                            key={index}
                            className={cn(
                                "py-1.5 px-3 rounded-md bg-white/5 w-fit",
                            )}
                        >
                            <p className="">{technology}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkCard;
