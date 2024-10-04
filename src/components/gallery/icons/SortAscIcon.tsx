interface SortAscIconProps {
    className?: string;
}

const SortAscIcon = ({ className }: SortAscIconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 20H13V8H15V6H13V4H11V6H9V8H11V20ZM7 10V8H9V10H7ZM7 10V12H5V10H7ZM17 10V8H15V10H17ZM17 10V12H19V10H17Z"
            />
        </svg>
    );
};

export default SortAscIcon;
