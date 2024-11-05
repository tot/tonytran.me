interface DevelopedIconProps {
    className?: string;
}

const DevelopedIcon = ({ className }: DevelopedIconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M7.99957 4.99994H9.99957V6.99994H7.99957V4.99994Z" />
            <path d="M5.99957 6.99994H7.99957V8.99994H5.99957V6.99994Z" />
            <path d="M3.99957 8.99994H5.99957V10.9999H3.99957V8.99994Z" />
            <path d="M1.99957 10.9999H3.99957V12.9999H1.99957V10.9999Z" />
            <path d="M3.99957 12.9999H5.99957V14.9999H3.99957V12.9999Z" />
            <path d="M5.99957 14.9999H7.99957V16.9999H5.99957V14.9999Z" />
            <path d="M7.99957 16.9999H9.99957V18.9999H7.99957V16.9999Z" />
            <path d="M15.9996 4.99994H13.9996V6.99994H15.9996V4.99994Z" />
            <path d="M17.9996 6.99994H15.9996V8.99994H17.9996V6.99994Z" />
            <path d="M19.9996 8.99994H17.9996V10.9999H19.9996V8.99994Z" />
            <path d="M21.9996 10.9999H19.9996V12.9999H21.9996V10.9999Z" />
            <path d="M19.9996 12.9999H17.9996V14.9999H19.9996V12.9999Z" />
            <path d="M17.9996 14.9999H15.9996V16.9999H17.9996V14.9999Z" />
            <path d="M15.9996 16.9999H13.9996V18.9999H15.9996V16.9999Z" />
        </svg>
    );
};

export default DevelopedIcon;
