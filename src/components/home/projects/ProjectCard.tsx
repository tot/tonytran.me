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
                            <h3 className="text-base group-hover:bg-[#4de272] transition-all duration-100 group-hover:text-black font-medium flex items-center gap-2 underline underline-offset-2 text-white font-departure tracking-wide">
                                {title}
                                {/* <span className="inline-block flex-shrink-0">
                                    <OpenLinkIcon />
                                </span> */}
                            </h3>
                        </div>
                        <DotLine className="flex-shrink-0" />
                        <p className="text-white/60 text-sm font-departure text-left md:text-right">
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