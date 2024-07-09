import { Header } from "../components/Header";
// import { SubHeading } from "../components/SubHeading";
import heroImage from "../assets/hero-animation.gif";
import { Button } from "../elements/Button";
import { SecondaryButton } from "../elements/SecondaryButton";
import { MarqueeSlider } from "../components/MarqueeSlider";
import { Card } from "../components/Card";
import desc1 from "../assets/desc-1.jpg";
import desc2 from "../assets/desc2.jpg";
import desc3 from "../assets/desc3.jpg";
import desc4 from "../assets/desc4.jpg";
import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
import { SlideSection } from "../components/SlideSection";

export const Home = () => {
    return (
        <div>
            <Header />
            {/* <SubHeading /> */}
            <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-28 pt-20 md:pt-40 text-left">
                <div>
                    <div className="text-5xl md:text-6xl leading-snug pb-6 font-[barlow]">
                        <div>Next-gen security for</div>
                        <div>digital assets</div>
                    </div>
                    <div className="text-md md:text-2xl pb-6 font-[inter]">
                        <div>Over 3 million users secured across hundreds of deployments.</div>
                        <div>Enhance user trust with cutting-edge security technology.</div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <div>
                            <Button buttonName={"Get Started"} />
                        </div>
                        <div>
                            <SecondaryButton buttonName={"View Docs"} />
                        </div>
                    </div>
                </div>
                <div className="mt-16 md:mt-0 md:ml-10 md:block flex justify-center ">
                    <img className="w-[18rem] md:w-[23rem]" src={heroImage} alt="Hero-Image" />
                </div>
            </div>
            <div className="mb-24">
                <MarqueeSlider />
            </div>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-32">
                    <Card image={desc1} tag={"Unparalleled Security"} description={"Leverage MPC technology to protect user assets with state-of-the-art security."} />
                    <Card image={desc2} tag={"User-Controlled Wallets"} description={"Empower users with full control over their assets without compromising on security."} />
                    <Card image={desc3} tag={"Seamless Integrations"} description={"Easily integrate MPC wallets into your platform with our robust API."} />
                    <Card image={desc4} tag={"Proven Reliability"} description={"Join millions of users who trust our battle-tested and highly secure solution."} />
                </div>
            </div>
            <div className="pb-24">
                <InfoSection tag={"Just a few lines of code."} subHeading={"Estimated setup time: 9 Minutes"} description={"We make the hard things easy, so you can focus on your product. Spin up embedded wallets and beautiful authentication flows for all users. Scale your product across all devices, wallets, and browsers in minutes."} />
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-center md:text-left my-12 px-4">
                <div className="text-4xl md:text-5xl font-[barlow] font-semibold mb-8 md:mb-0">
                    <div>Web2 Convenience.</div>
                    <div>Web3 Guarantees.</div>
                </div>
                <div className="max-w-md md:max-w-lg text-lg md:text-xl text-gray-600 font-[inter]">
                    Privy brings web2-caliber UX — like sign in with email and social — to web3 products. Don't just increase conversion, increase the amount of potential users for your app.
                </div>
            </div>

            <div>
                <SlideSection />
            </div>
            <Footer />
        </div>
    );
};
