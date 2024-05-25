import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiPalmTree } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    hidden: { width: 0, height: 0 },
    visible: { width: 112, height: 128 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div id="about" className="bg-teal-900">
      <div className="relative overflow-hidden bg-lime-300 rounded-t-3xl py-16 sm:py-20 text-black font-neue-montreal">
        <div className="border-b border-dashed border-b-zinc-600 pb-5 sm:pb-10 px-5 sm:px-10 lg:px-20">
          <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl w-fit lg:w-3/4 leading-[1.1]">
            Passionate about leveraging technology to solve real world problems and dedicated to
            staying updated with the latest industry trends.
          </h1>
        </div>
        <div className="pt-5 sm:pt-10 px-5 sm:px-10 lg:px-20">
          <p className="w-fit lg:w-2/4 text-lg sm:text-xl">
            Experienced in crafting seamless user experiences through the MERN stack, with a strong
            focus on React.js and Next.js. With over 2 year of hands-on experience, I&apos;ve honed
            my skills in building dynamic and responsive web applications.
          </p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative group flex items-center bg-black text-white rounded-full w-52 h-14 mt-5"
          >
            <span className="absolute left-5 text-lg">OPEN PHOTO</span>
            <span className="absolute right-5 w-5 aspect-square rounded-full bg-lime-300 group-hover:scale-[2] duration-200 grid place-items-center">
              <BsArrowUpRight className="opacity-0 group-hover:opacity-100 text-black duration-200 text-xs" />
            </span>
          </button>
        </div>
        <GiPalmTree className="absolute hidden lg:block -bottom-5 right-0 text-[35rem] text-black/5 scale-x-[-1]" />
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={variants}
          className="absolute z-10 top-5 right-5 rounded-2xl h-32 w-28 overflow-hidden"
        >
          <Image src="/images/profile.jpg" alt="profile" fill />
        </motion.div>
      </div>
    </div>
  );
}
