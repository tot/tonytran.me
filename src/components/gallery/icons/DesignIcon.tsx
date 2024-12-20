interface DesignIconProps {
    className?: string;
}

const DesignIcon = ({ className }: DesignIconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 3H2V21H4H20H22V3H20H4ZM20 5V19H4V5H20ZM14 9H12V11H10V13H8V15H6V17H8V15H10V13H12V11H14V13H16V15H18V13H16V11H14V9ZM8 7H6V9H8V7Z"
            />
        </svg>
    );
};

export default DesignIcon;
