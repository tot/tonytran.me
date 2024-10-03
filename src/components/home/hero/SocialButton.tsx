interface SocialButtonProps {
    icon: React.ReactNode;
    href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className="flex items-center justify-center py-6 border border-white/10 hover:border-white/50"
            aria-label={href}
        >
            {icon}
        </a>
    );
};

export default SocialButton;
