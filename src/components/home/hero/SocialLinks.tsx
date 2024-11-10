import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import SocialButton from "./SocialButton";

const socialButtons = [
    {
        icon: <FaXTwitter size={20} />,
        href: "https://x.com/aiopreme",
    },
    { icon: <FaGithub size={20} />, href: "https://github.com/tot" },
    {
        icon: <FaLinkedin size={20} />,
        href: "https://www.linkedin.com/in/tony-tran03/",
    },
];

const SocialLinks = () => {
    return (
        <div className="text-white/70 flex items-center justify-normal md:justify-end w-full gap-2 md:w-72 text-xl">
            {socialButtons.map((button) => (
                <SocialButton key={button.href} {...button} />
            ))}
        </div>
    );
};

export default SocialLinks;
