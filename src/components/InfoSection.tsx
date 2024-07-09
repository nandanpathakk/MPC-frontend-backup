import { Button } from "../elements/Button"
export const InfoSection = ({tag, description, subHeading}:any) =>{
    return <div className="flex flex-col items-center font-[inter]">
        <div className="text-gray-600 text-lg pb-10">{subHeading}</div>
        <div className="text-4xl md:text-5xl pb-14 font-[barlow]">{tag}</div>
        <div className="w-[30rem] md:w-[50rem] text-xl text-center text-gray-800 pb-5">{description}</div>
        <Button buttonName={"Get Started"}/>
    </div>
}