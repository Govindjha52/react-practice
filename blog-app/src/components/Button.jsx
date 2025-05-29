import React from "react";

export default function Button({
    children,    // its is nothing but text.
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props  // if user add additional properties then it's add. 
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor}
         ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}