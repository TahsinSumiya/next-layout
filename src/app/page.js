
import Descriptions from "./descriptions/Descriptions";
import Difference from "./differnece/Difference";
import Hero from "./hero/Hero";
import OurService from "./ourservice/OurService";
import SubPara from "./subpara/SubPara";

export default function Home() {
  return (
  <>
  <div className="bg-gray-100  ">
      <div className=" ">
        <Hero />
        <div className='  absolute  justify-center items-center -my-5 mx-[50px] xs:mx-[100px] sm:mx-[150px] md:mx-[250px]  lg:mx-[350px]  xl:mx-[400px] 2xl:mx-[750px] rounded-xl 
        shadow-2xl w-auto sm:w-auto md:w-80 lg:w-96 xl:w-96 h-10 bg-dark-orange'>
      <p className="items-center text-white text-sm lg:text-lg px-1">Unlock Your Business’s Full Potential Now..!</p>
    </div>
        <SubPara/>
        <OurService/>
        <Difference/>
        <Descriptions/>

      </div>
    </div>

  </>
  );
}
