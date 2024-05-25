import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { projects } from "@/projects";

export default function Projects() {
  return (
    <div id="projects" className="bg-lime-300">
      <div className="bg-teal-900 rounded-t-3xl grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 sm:px-10 lg:px-20 py-16 sm:py-20 font-neue-montreal">
        {projects.map((i, j) => (
          <div key={j} className="bg-teal-800 shadow w-full h-[50vh] rounded-xl p-5 sm:p-10">
            <div className="relative group w-full h-full rounded-xl overflow-hidden">
              <Image src={i.image} fill className="absolute group-hover:scale-110 duration-500" />
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-t from-black/25 to-black/0 grid place-items-center">
                <div className="absolute bottom-2.5 px-2.5 sm:px-5">
                  <h3 className="text-xl line-clamp-1">{i.title}</h3>
                  <p className="line-clamp-2">{i.description}</p>
                </div>
                <a href={i.link}>
                  <GoLinkExternal className="text-5xl cursor-pointer hover:text-blue-500 duration-200" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
