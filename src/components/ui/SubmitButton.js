import { BsArrowUpRight } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function SubmitButton({ isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="relative group flex items-center bg-white text-black rounded-full w-52 h-14 disabled:cursor-not-allowed"
    >
      <span className="absolute left-5 text-lg">SEND INQUIRY</span>
      <span
        className={`absolute right-5 w-5 aspect-square rounded-full bg-zinc-900 group-hover:scale-[2] duration-200 grid place-items-center ${
          isLoading && "scale-[2]"
        }`}
      >
        {isLoading ? (
          <ImSpinner2 className="text-white text-xs animate-spin" />
        ) : (
          <BsArrowUpRight className="opacity-0 group-hover:opacity-100 text-white duration-200 text-xs" />
        )}
      </span>
    </button>
  );
}
