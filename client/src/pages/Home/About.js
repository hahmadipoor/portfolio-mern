import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About() {

  const {loading, portfolioData}=useSelector(state=>state.root);
  const {about} =portfolioData;
  const {lottieURL =" ", description1= " ", description2 =" ", skills=[]}= about || {};

  return (
    <div className="flex flex-col items-start">
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
          <div className="h-[40vh] w-1/2 sm:w-full">
             <p>
                {description1}
            </p>
            <p>
                {description2}
            </p>
            <div className="flex flex-wrap gap-5">
              { 
                skills.map((skill, index)=>(
                  <div className="border border-primary py-1 px-1 rounded">
                    <h1>{skill}</h1>
                  </div> 
                ))
              }
            </div>
          </div>
          <div className="h-[40vh] w-1/2 flex justify-center items-center sm:w-full">
              <img src={lottieURL} className="h-full object-contain" alt="About" />
          </div>
      </div>
      
    </div>
  );
}

export default About;
