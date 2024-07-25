"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const openPdfAndDownload = (pdfUrl) => {
  const newTab = window.open(pdfUrl, '_blank');
  newTab.focus();
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="flex flex-col items-center text-center xl:text-left mx-8">
            <span className="text-4xl mb-20">Consultants & Developers</span>
            <h1 className="h1 mb-10">
              Hello We are <br /> <span className="text-accent">Ziad & Ayush</span>
            </h1>
            <p className="max-w-full mb-16 text-white/80 text-4xl whitespace-wrap">
              "Empowering businesses with innovative consulting and development solutions for success and growth."
            </p>
            {/* Social Icons and Download CV Buttons */}
            <div className="flex flex-col items-center mb-16">
              <div className="flex flex-row items-center gap-16 mb-8">
                {/* Ziad's Section */}
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl mb-4 font-bold">Ziad's Profile</h3>
                  <div className="flex gap-4 mb-4">
                    <Social
                      containerStyles="flex gap-4"
                      iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
                      links={{
                        github: "https://github.com/ziadaboughali",
                        linkedin: "https://www.linkedin.com/in/ziad-abou-ghali/",
                      }}
                    />
                  </div>
                  <Link href="/Ziad_Abou-Ghali_Resume.pdf" target="_blank" download>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="uppercase flex items-center gap-2 mt-4 bg-blue-500 text-white hover:bg-blue-700"
                      onClick={() => openPdfAndDownload('/Ziad_Abou-Ghali_Resume.pdf')}
                    >
                      <span>Download Ziad's CV</span>
                      <FiDownload className="text-lg" />
                    </Button>
                  </Link>
                </div>
                {/* Ayush's Section */}
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl mb-4 font-bold">Ayush's Profile</h3>
                  <div className="flex gap-4 mb-4">
                    <Social
                      containerStyles="flex gap-4"
                      iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
                      links={{
                        github: "https://github.com/ayush7patel",
                        linkedin: "https://www.linkedin.com/in/ayush7patel",
                      }}
                    />
                  </div>
                  <Link href="/Ayush_Patel_Resume.pdf" target="_blank" download>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="uppercase flex items-center gap-2 mt-4 bg-green-500 text-white hover:bg-green-700"
                      onClick={() => openPdfAndDownload('/Ayush_Patel_Resume.pdf')}
                    >
                      <span>Download Ayush's CV</span>
                      <FiDownload className="text-lg" />
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Button to Visualized Resume */}
              <Link href="#resume" passHref>
                <Button variant="primary" size="lg" className="bg-red-500 text-white hover:bg-red-700">
                  Go to Resume Visualization
                </Button>
              </Link>
            </div>
            <Stats statsData={{ experience: "6 Years", projects: "7 Projects Total", technologies: "4 Technologies Mastered", commits: "100+ Code Commits" }} />
          </div>
          <div className="resume-section text-center" style={{ marginTop: "64px" }}>
            {/* Header Removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
