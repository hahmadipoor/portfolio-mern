import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects(){

    const {loading, portfolioData}=useSelector(state=>state.root);
    const {projects} =portfolioData;
    
    const [selectedProjectIndex, setSelectedProjectIndex]=useState(0);
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className="flex items-start sm:flex-col">
                <div className="flex flex-col gap-1 mr-10 sm:flex-row sm:w-full sm:gap-0 sm:mr-0 w-48">
                    {projects.map((project, index)=>(
                        <div className="cursor-pointer" onClick={()=>{setSelectedProjectIndex(index)}}>
                            <h1 className={`text-xl px-1 rounded text-white ${selectedProjectIndex===index?'bg-primary':'bg-secondary'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 w-2/3 border-[1px] border-primary rounded-md p-2 sm:w-full sm:mt-10 w-full ">
                    <div className="w-1/3 flex bg-red-300">
                        <img src={projects[selectedProjectIndex].image} alt="" className="h-60 w-full"/>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <h1 className="text-primary text-xl"> {projects[selectedProjectIndex].title}</h1>
                        <p className="text-xs"> {projects[selectedProjectIndex].description}</p>
                        <p className="text-xs"> {projects[selectedProjectIndex].technologies}</p>
                        <a href={projects[selectedProjectIndex].link} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xl">link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
