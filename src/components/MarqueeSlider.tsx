import Marquee from "react-fast-marquee"
import aologo from "../assets/ao-logo.png"
// import { GoDotFill } from "react-icons/go";

export const MarqueeSlider = () => {
    return <div>
        <Marquee >
            <div className="flex gap-16 text-2xl items-center">
                <img className="w-60" src={aologo} alt="arweave-logo" />
                {/* <GoDotFill className="text-gray-800" /> */}
                <div className="text-3xl font-bold text-gray-800">ArKey</div>
                {/* <GoDotFill className="text-gray-800" /> */}
                <img className="w-60" src={aologo} alt="arweave-logo" />
                {/* <GoDotFill className="text-gray-800" /> */}
                <div className="text-3xl font-bold text-gray-800">ArKey</div>
                {/* <GoDotFill className="text-gray-800" /> */}
                <img className="w-60" src={aologo} alt="arweave-logo" />
                <div className="text-3xl font-bold text-gray-800">ArKey</div>
            </div>
        </Marquee>

    </div>
}