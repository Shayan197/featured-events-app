import React from 'react';

interface IconProps {
    color?: string; // Stroke color
    fill?: string; // Fill color
    size?: number; // Width & height in px
    bg?: string; // Optional background color
    className?: string; // Extra CSS classes
}

const CustomIcon: React.FC<IconProps> = ({
    color = 'currentColor',
    fill = 'currentColor',
    size = 24,
    bg = 'transparent',
    className = '',
}) => {
    return (
        <div
            className={`inline-flex items-center justify-center ${className}`}
            style={{
                backgroundColor: bg,
                width: size,
                height: size,
                borderRadius: bg !== 'transparent' ? '50%' : undefined,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={fill}
            >
                <g fill="none" stroke={color} strokeWidth={1.5}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                    />
                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011" />
                </g>
            </svg>
        </div>
    );
};

export default CustomIcon;
