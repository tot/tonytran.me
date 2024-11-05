interface SortDescIconProps {
    className?: string;
}

const SortDescIcon = ({ className }: SortDescIconProps) => {
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
                d="M11 4H13V16H15V18H13V20H11V18H9V16H11V4ZM7 14V16H9V14H7ZM7 14V12H5V14H7ZM17 14V16H15V14H17ZM17 14V12H19V14H17Z"
            />
        </svg>
    );
};

export default SortDescIcon;
