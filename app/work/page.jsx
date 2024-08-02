"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMysql, SiVisualstudiocode } from "react-icons/si";

const ziadProjects = [
  {
    num: "01",
    category: "A&P Consulting Portfolio",
    title: "A&P Consulting Portfolio",
    description: "Explore my portfolio website, showcasing diverse projects and expertise in front-end and back-end development, using technologies such as Next.js, HTML5, CSS3, and more.",
    stack: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiVisualstudiocode/>, name: "VSCode" },
    ],
    image: "/assets/APWebsiteImage.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Fullstack Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind.css" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
    image: "/assets/work/thumb2.png",
    live: "#",
    github: "#",
  },
];

const ayushProjects = [
  {
    num: "01",
    category: "Migration of A Workload",
    title: "Migration of A Workload",
    description: "Successfully migrated a corporate data center workload to AWS, leveraging Amazon EC2 and RDS for scalable and efficient cloud solutions. This project involved meticulous planning, seamless execution, and optimization to enhance performance and cost-effectiveness.",
    stack: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
    image: "/assets/MigrationOfAWorkload.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "A* Algorithm Simulation",
    title: "A* Algorithm Simulation",
    description: "An interactive simulation of the A* algorithm, demonstrating its pathfinding capabilities through a visual grid. Users can set start and end points, obstacles, and watch the algorithm find the optimal path.",
    stack: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiVisualstudiocode/>, name: "VSCode" },
    ],
    image: "/assets/A*Preview.png",
    live: "#",
    github: "#",
  },
];

const Work = () => {
  const [ziadProjectIndex, setZiadProjectIndex] = useState(0);
  const [ayushProjectIndex, setAyushProjectIndex] = useState(0);

  const handleZiadPrev = () => {
    setZiadProjectIndex((prevIndex) => (prevIndex === 0 ? ziadProjects.length - 1 : prevIndex - 1));
  };

  const handleZiadNext = () => {
    setZiadProjectIndex((prevIndex) => (prevIndex === ziadProjects.length - 1 ? 0 : prevIndex + 1));
  };

  const handleAyushPrev = () => {
    setAyushProjectIndex((prevIndex) => (prevIndex === 0 ? ayushProjects.length - 1 : prevIndex - 1));
  };

  const handleAyushNext = () => {
    setAyushProjectIndex((prevIndex) => (prevIndex === ayushProjects.length - 1 ? 0 : prevIndex + 1));
  };

  const ziadProject = ziadProjects[ziadProjectIndex];
  const ayushProject = ayushProjects[ayushProjectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 bg-[#1c1c22] text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[60px]">
          <div className="w-full xl:w-[50%] flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ziad's Projects</h2>
            <div className="relative w-full h-[300px] mb-8">
              <Image src={ziadProject.image} fill className="object-cover rounded-xl" alt={ziadProject.title} />
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{ziadProject.num}</div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {ziadProject.category}
              </h2>
              <p className="mb-4">{ziadProject.description}</p>
              <ul className="flex gap-4 mb-4">
                {ziadProject.stack.map((item, index) => (
                  <TooltipProvider delayDuration={100} key={index}>
                    <Tooltip>
                      <TooltipTrigger className="group">
                        <div className="w-16 h-16 border-2 border-accent rounded-full flex justify-center items-center text-accent text-5xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </ul>
              <div className="border border-gray-200 mb-4"></div>
              <div className="flex items-center gap-4 mb-8">
                <Link href={ziadProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500">
                        <BsArrowUpRight className="text-5xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={ziadProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500">
                        <BsGithub className="text-5xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={handleZiadPrev} className="text-2xl bg-accent hover:bg-accent-hover transition-all duration-500 rounded-full p-2">
                  <BsArrowLeft />
                </button>
                <button onClick={handleZiadNext} className="text-2xl bg-accent hover:bg-accent-hover transition-all duration-500 rounded-full p-2">
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="my-16 w-full"></div> {/* Space between Ziad's and Ayush's sections */}
          <div className="w-full xl:w-[50%] flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ayush's Projects</h2>
            <div className="relative w-full h-[300px] mb-8">
              <Image src={ayushProject.image} fill className="object-cover rounded-xl" alt={ayushProject.title} />
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{ayushProject.num}</div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {ayushProject.category}
              </h2>
              <p className="mb-4">{ayushProject.description}</p>
              <ul className="flex gap-4 mb-4">
                {ayushProject.stack.map((item, index) => (
                  <TooltipProvider delayDuration={100} key={index}>
                    <Tooltip>
                      <TooltipTrigger className="group">
                        <div className="w-16 h-16 border-2 border-accent rounded-full flex justify-center items-center text-accent text-5xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </ul>
              <div className="border border-gray-200 mb-4"></div>
              <div className="flex items-center gap-4 mb-8">
                <Link href={ayushProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500">
                        <BsArrowUpRight className="text-5xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={ayushProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500">
                        <BsGithub className="text-5xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={handleAyushPrev} className="text-2xl bg-accent hover:bg-accent-hover transition-all duration-500 rounded-full p-2">
                  <BsArrowLeft />
                </button>
                <button onClick={handleAyushNext} className="text-2xl bg-accent hover:bg-accent-hover transition-all duration-500 rounded-full p-2">
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
