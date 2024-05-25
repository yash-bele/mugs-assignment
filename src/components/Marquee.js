import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="bg-zinc-900">
      <div className="bg-teal-900 py-16 sm:py-20 font-founders-grotesk text-[10rem] sm:text-[15rem] lg:text-[20rem] rounded-t-3xl">
        <div className="flex border-y border-dashed border-y-zinc-400 pb-[18px] sm:pb-[26px] lg:pb-8 leading-[0.75] whitespace-nowrap overflow-hidden">
          {Array(3)
            .fill(0)
            .map((_, j) => (
              <motion.h1
                key={j}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                className="pr-10"
              >
                YASH BELE
              </motion.h1>
            ))}
        </div>
      </div>
    </div>
  );
}
