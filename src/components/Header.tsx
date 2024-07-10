import { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Button } from '../elements/Button';
import { SecondaryButton } from '../elements/SecondaryButton';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className='font-[inter]'>
            <div className="flex justify-between items-center px-6 md:px-28 py-8 text-lg">
                <div className="flex items-center gap-6 md:gap-14">
                    <Link to={"/"}>
                    <div className="flex items-center">
                        <span className="text-4xl md:text-5xl font-bold text-black">Ar</span>
                        <span className="text-4xl md:text-5xl font-bold text-gray-600">Key</span>
                    </div>
                    </Link>
                  
                    <nav className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1 cursor-pointer">
                            About <FaAngleDown />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            Features <FaAngleDown />
                        </div>
                        <div className="cursor-pointer">Docs</div>
                    </nav>
                </div>
                <div className="flex items-center gap-4 md:gap-14">
                    <div className='hidden md:flex'>
                        <Link to={"/demo"}>
                        <SecondaryButton buttonName={"Demo"} />
                        </Link>
                    </div>
                    <div className='hidden md:flex'>
                        <Button buttonName={"Dashboard"} />
                    </div>
                    <div className="md:hidden flex items-center text-2xl cursor-pointer" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}>
                    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 text-lg">
                        <div className="flex items-center gap-2 cursor-pointer">
                            About <FaAngleDown />
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            Features <FaAngleDown />
                        </div>
                        <div className="cursor-pointer">Docs</div>
                        {/* <div className="cursor-pointer">Security</div> */}
                        {/* <div className="cursor-pointer">Pricing</div> */}
                        <Link to={"/demo"}>
                        <SecondaryButton buttonName={"Demo"} />
                        </Link>
                        <Button buttonName={"Dashboard"} />
                    </div>
                </div>
            )}
        </header>
    );
};
