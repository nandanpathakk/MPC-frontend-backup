import { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Button } from '../elements/Button';
import { SecondaryButton } from '../elements/SecondaryButton';

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='font-[inter]'>
            <div className="flex justify-between items-center px-6 md:px-28 py-8 text-lg">
                <div className="flex justify-between items-center gap-4 md:gap-14">
                    <div className="flex items-center">
                        <div className="text-4xl md:text-5xl font-bold text-black">Ar</div>
                        <div className="text-4xl md:text-5xl font-bold text-gray-600">Key</div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 cursor-pointer">
                        <div>About</div>
                        <FaAngleDown />
                    </div>
                    <div className="hidden md:flex items-center gap-2 cursor-pointer">
                        <div>Features</div>
                        <FaAngleDown />
                    </div>
                    <div className="hidden md:flex cursor-pointer">Docs</div>
                    <div className="hidden md:flex cursor-pointer">Security</div>
                    <div className="hidden md:flex cursor-pointer">Pricing</div>
                </div>
                <div className="flex justify-between items-center gap-4 md:gap-14">
                    <div className='hidden md:flex'>
                        <SecondaryButton buttonName={"Demo"} />
                    </div>
                    <div className='hidden md:flex'>
                        <Button buttonName={"Dashboard"} />
                    </div>
                    <div className="md:hidden flex items-center text-xl cursor-pointer" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}>
                    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-6">
                        <div className="flex flex-col gap-6 text-lg">
                            <div className="flex items-center gap-2">
                                <div>About</div>
                                <FaAngleDown />
                            </div>
                            <div className="flex items-center gap-2">
                                <div>Features</div>
                                <FaAngleDown />
                            </div>
                            <div>Docs</div>
                            <div>Security</div>
                            <div>Pricing</div>
                            <SecondaryButton buttonName={"Demo"} />
                            <Button buttonName={"Dashboard"} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
