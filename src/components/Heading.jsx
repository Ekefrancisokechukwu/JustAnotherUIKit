import { MoveRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";

const Heading = () => {
  const { ref } = useActiveSection("#home");

  return (
    <section ref={ref} id="home" className="py-24 px-3 scroll-mt-24 mt-24">
      <div className="grid place-items-center ">
        <h1 className="text-white md:text-[50px] text-[30px] font-bold md:leading-[60.51px]">
          <span className="block">
            It doesn’t matter what <span className="text-[#FFFF00]">JS</span>
          </span>
          <span className=" text-[#FFFF00]">Framework</span> you work with.
        </h1>
        <p className="text-[white] text-lg">
          Our boilerplates works with it{" "}
          <span className="text-[#91D2F7] font-bold">out-of-the-box</span> .
        </p>
        <div className="flex items-center gap-x-11 mt-8">
          <button className=" bg-[#FFFF00] hover:-translate-y-1 transition-all duration-300   font-bold flex items-center rounded-[3px] gap-x-4 py-2 px-4">
            Get started <MoveRight className="w-[20px] h-[20px]" />
          </button>
          <button className=" border border-[#FFFF00] font-bold flex hover:-translate-y-1 transition-all duration-300   transform items-center text-[#FFFF00] rounded-[3px] gap-x-4 py-2 px-4">
            See repo <FaGithub />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Heading;
