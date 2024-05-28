import codeImg from "../../assests/code.jpg";
import { checklistItems } from "../../constants";

export const WorkFLow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        WEBSITE
        <span className="bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">
          {" "}
          OVERVIEW
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-2 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} classNAme="felx mb-12">
              {/* <div classNAme="text-orange-400 mx-6 bg-neutral-900 h-10 w-10 p-0
                        justify-center items-center rounded-full">
                            <CheckCircle2/>
                            </div>  */}

              <div>
                <h5 className=" mt-[50px] mb-2 text-xl  ">{item.title}</h5>
                <p className="text-md mb-10 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
