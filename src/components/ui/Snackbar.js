import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoWarningOutline, IoCheckmarkCircleOutline, IoCloseOutline } from "react-icons/io5";

const Snackbar = ({ children, type, openSnackbar, setOpenSnackbar }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenSnackbar(false);
    }, 5000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSnackbar]);

  return (
    <AnimatePresence>
      {openSnackbar && (
        <motion.div
          initial={{ opacity: 0, y: -20 - 40 }}
          animate={{ opacity: 100, y: 0 }}
          exit={{ opacity: 0, y: -20 - 40 }}
          className={`fixed z-10 top-2.5 sm:top-5 left-0 sm:left-auto right-0 sm:right-5 mx-auto sm:mx-0 w-fit rounded-xl h-10 px-2.5 pb-px border text-black font-medium flex items-center ${
            type === "warning"
              ? "bg-orange-200 border-orange-300"
              : type === "error"
              ? "bg-red-200 border-red-300"
              : type === "success"
              ? "bg-emerald-200 border-emerald-300"
              : null
          }`}
        >
          <div className="text-xl">
            {type === "error" || type === "warning" ? (
              <IoWarningOutline />
            ) : type === "success" ? (
              <IoCheckmarkCircleOutline />
            ) : null}
          </div>
          <h1 className="ml-2.5 mr-5">{children}</h1>
          <button onClick={() => setOpenSnackbar(false)} className="text-xl">
            <IoCloseOutline />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
