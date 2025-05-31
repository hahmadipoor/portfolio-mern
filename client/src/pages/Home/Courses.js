import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses(){

    const {loading, portfolioData}=useSelector(state=>state.root);
    const {courses} =portfolioData;

    const [selectedCourseIndex, setSelectedCourseIndex]=useState(0);
    return (
        <div>
            <SectionTitle title="Courses" />
            <div className="flex items-start sm:flex-col">
                <div className="flex flex-col gap-1 mr-10 sm:flex-row sm:w-full sm:gap-0 sm:mr-0 w-48">
                    {courses.map((course, index)=>(
                        <div className="cursor-pointer" onClick={()=>{setSelectedCourseIndex(index)}}>
                            <h1 className={`text-xl px-1 rounded text-white ${selectedCourseIndex===index?'bg-primary':'bg-secondary'}`}>{course.title}</h1>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 w-2/3 border-[1px] border-primary rounded-md p-2 sm:w-full sm:mt-10 w-full ">
                    <div className="w-1/3 flex bg-red-300">
                        <img src={courses[selectedCourseIndex].image} alt="" className="h-60 w-full"/>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <h1 className="text-primary text-xl"> {courses[selectedCourseIndex].title}</h1>
                        <p className=" text-xm">{courses[selectedCourseIndex].description}</p>
                        <a href={courses[selectedCourseIndex].link} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xl">link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
