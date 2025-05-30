import { useSelector } from "react-redux";

function Intro() {
  
  const {loading, portfolioData}=useSelector(state=>state.root);
  const {intro} =portfolioData;
  const {firstName =" ", lastName= " ", description =" "}= intro || {};
  
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-5xl text-primary font-semibold sm:text-2xl"> <span>{firstName}</span> <span>{lastName}</span> </h1>
      <p className="text-2xs w-1/2 mt-5 mb-5 sm:text-2xl sm:text-sm">  {description} </p>
      <button className="border-1 border-teriary bg-secondary text-white px-1 py-2 rounded"> Get Started</button>
    </div>
  );
}

export default Intro;
