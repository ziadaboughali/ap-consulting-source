"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaFileExcel,
  FaAws,
  FaJava,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";
import {
  SiCplusplus,
  SiSap,
  SiC,
  SiTableau,
  SiPowerbi,
  SiGnubash,
  SiAndroidstudio,
  SiJupyter,
  SiVisualstudiocode,
  SiPandas,
  SiLatex,
  SiGit,
  SiKeras,
  SiTensorflow
} from "react-icons/si"
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Define two sets of data for two different resumes
const resumes = [
  {
    name: "Ziad",
    about: {
      title: "About Me",
      description: "I am Ziad, a Full Stack Developer with extensive experience in developing scalable web applications.",
      info: [
        { fieldName: "Name", fieldValue: "Ziad Abou Ghali" },
        { fieldName: "Phone", fieldValue: "(+1) 732-610-4014" },
        { fieldName: "Experience", fieldValue: "6+ Years" },
        { fieldName: "Nationality", fieldValue: "American" },
        { fieldName: "Email", fieldValue: "ziadaboughali@gmail.com" },
        { fieldName: "Languages", fieldValue: "English, Arabic, Tamil (basic)" },
      ],
    },
    experience: {
      icon: "/assets/resume/badge.svg",
      title: "Professional Experience",
      description: "An overview of my professional experience and roles I have undertaken.",
      items: [
        { company: "HONDA", position: "Sales Specialist / Business Analyst", duration: "June 2024 - Present" },
        { company: "NJIT", position: "Machine Learning Researcher", duration: "2023-2024" },
        { company: "KFC", position: "Junior Business Analyst", duration: "2016 - 2023" },
      ],
    },
    education: {
      icon: "/assets/resume/cap.svg",
      title: "Education",
      description: "Details of my academic background and certifications.",
      items: [
        { institution: "NJIT", degree: "B.S. Computer Science", duration: "Graduated May 2024" },
      ],
    },
    skills: {
      title: "Technical Skills",
      description: "A summary of my key technical skills and proficiencies.",
      skillList: [
        { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <SiC/>, name: "C" },
        { icon: <SiGnubash />, name: "Bash" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiGit />, name: "Git" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiKeras />, name: "Keras" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiLatex />, name: "LaTeX" },
        { icon: <FaFileExcel />, name: "Excel" },
        { icon: <SiTableau />, name: "Tableau" },
        { icon: <SiPowerbi />, name: "PowerBI" },


      ],
    },
  },
  {
    name: "Ayush",
    about: {
      title: "About Me",
      description: "I am Ayush, a Lead Developer specializing in innovative tech solutions and team leadership.",
      info: [
        { fieldName: "Name", fieldValue: "Ayush Patel" },
        { fieldName: "Phone", fieldValue: "(+1) 848-203-5822" },
        { fieldName: "Experience", fieldValue: "6+ Years" },
        { fieldName: "Nationality", fieldValue: "American" },
        { fieldName: "Email", fieldValue: "ayush7.ap@gmail.com" },
        { fieldName: "Languages", fieldValue: "English, Gujrati" },
      ],
    },
    experience: {
      icon: "/assets/resume/badge.svg",
      title: "Professional Experience",
      description: "An overview of my professional experience and roles I have undertaken.",
      items: [
        { company: "UST GLOBAL", position: "Developer 1 - Enterprise Solutions", duration: "July 2024 - Present" },
        { company: "ENDEAVOR CONSULTING GROUP", position: "Junior Business Analyst", duration: "Feb 2024 - July 2024" },
      ],
    },
    education: {
      icon: "/assets/resume/cap.svg",
      title: "Education",
      description: "Details of my academic background and certifications.",
      items: [
        { institution: "Rutgers University", degree: "B.Sc. in Computer Science", duration: "2019 - 2023" },
      ],
    },
    skills: {
      title: "Technical Skills",
      description: "A summary of my key technical skills and proficiencies.",
      skillList: [
        { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiGnubash />, name: "Bash" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiSap />, name: "SAP" },
        {icon: <SiTableau />, name: "Tableau"},
        {icon: <SiPowerbi />, name: "PowerBI"},
        { icon: <SiGit />, name: "Git" },
        { icon: <SiAndroidstudio/>, name: "Android Studio" },
        { icon: <SiJupyter />, name: "Jupyter Lab" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaFileExcel />, name: "Excel" },
        { icon: <SiLatex />, name: "LaTeX" },

      ],
    },
  },
];

const Resume = () => {
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);

  const toggleResume = () => {
    setCurrentResumeIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const currentResume = resumes[currentResumeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <button
        onClick={toggleResume}
        className="mb-10 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Toggle Resume
      </button>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">{currentResume.name}'s Profile</h2>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{currentResume.experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {currentResume.experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {currentResume.experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{currentResume.education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {currentResume.education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {currentResume.education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{currentResume.skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {currentResume.skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {currentResume.skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{currentResume.about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {currentResume.about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {currentResume.about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
