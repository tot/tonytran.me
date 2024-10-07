interface SocialButtonProps {
    icon: React.ReactNode;
    href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className="flex items-center justify-center hover:text-white w-10 h-10 rounded-md hover:bg-white/5 transition-colors duration-100"
            aria-label={href}
        >
            {icon}
        </a>
    );
};

export default SocialButton;
