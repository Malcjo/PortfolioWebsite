import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";

export default function DropdownLink ({to, children, DropdownLinks}){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    useEffect(() =>{
        const handleClickOutside = (event) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [dropdownRef]);


    return(
        <div className="relative inline-block text-left mx-4 " ref={dropdownRef}>

            {/* Main Link with Dropdown Arrow */}
            <div className="flex items-center">
                <Link
                to = {to}
                className="text-blue-400 pr-2 py-2rounded hover:bg-gray-700 hover:text-white"
                onClick={closeDropdown}
                >
                    {children}
                </Link>
                <button
                onClick={toggleDropdown}
                className="ml-0 text-white focus:outline-none rounded hover:bg-gray-400"
                >
                    <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
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
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                                role="menuitem"
                                onClick={closeDropdown}
                                >
                                {dropdownLink.text} test
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}