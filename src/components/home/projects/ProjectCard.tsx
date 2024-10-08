import DotLine from "./DotLine";
// import OpenLinkIcon from "./OpenLinkIcon";
import { isInternalLink } from "../../../lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    year: string;
    href: string;
}

const ProjectCard = ({ title, description, year, href }: ProjectCardProps) => {
    return (
        <a href={href} target={isInternalLink(href) ? "_self" : "_blank"}>
            <div className="flex gap-2 group">
                <div className="space-y-2 w-full">
                    <div className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                        <div className="flex flex-nowrap items-center gap-3">
                            <h3 className="text-base transition-all duration-100 group-hover:underline underline-offset-2 font-medium flex items-center gap-2 text-white font-sans tracking-wide">
                                {title}
                            </h3>
                        </div>
                        <DotLine className="flex-shrink-0" />
                        <p className="text-white/60 text-sm font-sans text-left md:text-right">
                            {year}
                        </p>
                    </div>
                    <div className="">
                        <p className="text-white/60 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
