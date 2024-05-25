import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.25"
      className="h-screen px-5 sm:px-10 lg:px-20 flex items-center justify-center sm:justify-between"
    >
      <h1 className="font-founders-grotesk text-7xl sm:text-8xl lg:text-9xl leading-[1] sm:leading-[0.8] lg:leading-[0.8] flex flex-col items-center sm:items-start">
        <span>I CREATE</span>
        <div className="flex items-end h-fit space-x-0 sm:space-x-2.5">
          <motion.div
            initial={{ x: -123, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-[61px] lg:h-[82px] w-[90px] lg:w-[123px] rounded-md mb-[4px] bg-[url(/images/heading.jpg)] bg-teal-900 bg-cover hidden sm:block"
          />
          <motion.span initial={{ x: -133 }} animate={{ x: 0 }} className="hidden sm:inline">
            EYE OPENING
          </motion.span>
          <span className="inline sm:hidden">EYE OPENING</span>
        </div>
        <span className="hidden sm:block">WEB APPLICATIONS</span>
        <span className="block sm:hidden">WEB APPS</span>
      </h1>
    </div>
  );
}
