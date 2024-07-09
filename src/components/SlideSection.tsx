import { useState } from 'react';
import controls from "../assets/controls.jpg"
import customizable from "../assets/customizable.jpg"
import integration from "../assets/integrations.jpg"
import onboarding from "../assets/onboarding.jpg"

export const SlideSection = () => {
    const [selected, setSelected] = useState(1);

    const handleClick = (index:any) => {
        setSelected(index);
    };

    const images = [onboarding, integration, customizable, controls];
    const content = [
        {
            title: "Progressive Onboarding",
            description: "Bring the conveniences of web2 — like sign in with email and social — to web3"
        },
        {
            title: "Out of the box integrations",
            description: "Activate your users by plugging into account abstraction infrastructure, native onramps and other great integrations."
        },
        {
            title: "Customizable & delightful",
            description: "Full customizability—so you can tailor Privy to your product and deliver an on-brand experience."
        },
        {
            title: "Controls for all use cases",
            description: "Friction where it matters – match your users’ needs with secure controls like account linking, MFA, and more."
        }
    ];

    return (
        <div>
            <div className="flex justify-around items-center">
                <div className="">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className={`p-10 cursor-pointer ${selected === index ? 'border-l-4' : ''}`}
                            onClick={() => handleClick(index)}
                            style={{ borderColor: selected === index ? 'black' : 'transparent' }}
                        >
                            <div className="text-xl pb-5 font-[barlow]">{item.title}</div>
                            <div className="text-lg w-[28rem] text-gray-500 font-[inter]">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className='hidden md:flex'>
                    {selected !== null && (
                        <img className='w-[40rem]' src={images[selected]} alt="Selected" />
                    )}
                </div>
            </div>
        </div>
    );
};
