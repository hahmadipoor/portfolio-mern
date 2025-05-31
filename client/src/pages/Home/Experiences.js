import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences(){

    const [selectedExperienceIndex, setSelectedExperienceIndex]=useState(0);
    const {loading, portfolioData}=useSelector(state=>state.root);
    const {experiences} =portfolioData;
    //const {firstName =" ", lastName= " ", description =" "}= intro || {};
    
    return (
        <div>
            <SectionTitle title="Experience" />
            <div className="flex sm:flex-col ">
                <div className="flex flex-col gap-1 mr-10 sm:flex-row sm:w-full sm:gap-0 sm:mr-0 w-48">
                    {experiences.map((experience, index)=>(
                        <div className="cursor-pointer " onClick={()=>{setSelectedExperienceIndex(index)}}>
                            <h1 className={`text-xl px-1 rounded text-white text-md ${selectedExperienceIndex===index?'bg-primary':'bg-secondary'}`}>{experience.period}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 w-2/3 border-[1px] border-primary rounded-md p-2 sm:w-full sm:mt-10 w-full">
                    <h1 className="text-primary text-xl"> {experiences[selectedExperienceIndex].title}</h1>
                    <h1 className="text-xl"> {experiences[selectedExperienceIndex].company}</h1>
                    <p className=" text-xs"> {experiences[selectedExperienceIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
