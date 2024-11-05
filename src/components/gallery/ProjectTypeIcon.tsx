import { PenNib, BracketsCurly } from "@phosphor-icons/react";

interface ProjectTypeIconProps {
    type: string;
    className?: string;
}

const ProjectTypeIcon = ({ type, className }: ProjectTypeIconProps) => {
    const lowerCaseType = type.toLowerCase();
    if (lowerCaseType === "design") {
        return <PenNib size={20} className={className} />;
    } else if (
        lowerCaseType === "frontend" ||
        lowerCaseType === "backend" ||
        lowerCaseType === "fullstack"
    ) {
        return <BracketsCurly size={20} className={className} />;
    }
};

export default ProjectTypeIcon;
