import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import SocialButton from "./SocialButton";

const socialButtons = [
    { icon: <FaXTwitter />, href: "https://x.com/aiopreme" },
    { icon: <FaGithub />, href: "https://github.com/tot" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/tony-tran03/" },
];

const SocialLinks = () => {
    return (
        <div className="grid text-white/70 grid-cols-3 gap-6 w-full md:w-72 text-xl">
            {socialButtons.map((button) => (
                <SocialButton key={button.href} {...button} />
            ))}
        </div>
    );
};

export default SocialLinks;
