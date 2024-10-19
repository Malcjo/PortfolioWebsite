import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function DropdownLink ({to, children, DropdownLinks}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    return(
        <div className="relative inline-block text-left">
            {/* Main Link with Dropdown Arrow */}
            <div className="flex items-center">
                <Link
                to = {to}
                className="text-white px-4 py-2 bg-gray-800 rounded hover:bg:gray-700"
                onClick={closeDropdown}
                >
                    {children}
                </Link>
                <button
                onClick={toggleDropdown}
                className="ml-2 text-white focus:outline-none"
                >
                    <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && DropdownLinks && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {DropdownLinks.map((dropdownLink, index) =>(
                            <Link
                                key={index}
                                to={dropdownLink.to}
                                className="block px-4 py-2 text-white hover:bng-gray-700"
                                role="menuitem"
                                onClick={closeDropdown}
                                >
                                {dropdownLink.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}