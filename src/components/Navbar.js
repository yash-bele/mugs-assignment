import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 64 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: -64 } }}
      animate={hidden ? "hidden" : "visible"}
      className="px-5 sm:px-10 lg:px-20 h-16 flex items-center justify-between fixed z-20 w-full backdrop-blur-sm top-0 left-0"
    >
      <div className="font-founders-grotesk text-3xl">Yash Bele</div>
      <div className="font-neue-montreal flex items-center space-x-5 capitalize text-base sm:text-lg text-zinc-400">
        {["about", "projects", "contact"].map((i) => (
          <motion.span key={i} whileHover={{ scale: 1.1 }} className="hover:text-white">
            <Link href={`#${i}`}>
              <span>{i}</span>
            </Link>
          </motion.span>
        ))}
      </div>
    </motion.nav>
  );
}
