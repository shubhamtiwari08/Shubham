"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]  text-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={
                "https://res.cloudinary.com/dmyost0l3/image/upload/v1711711227/picofme_mf4eam.png"
              }
              alt="shubham potrait"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl text-center font-medium !leading-[1.5]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shubham.</span> I'm a
        <span className="font-bold"> Full-stack Developer</span> with
        <span className="font-bold"> Good projects.</span> I enjoy building{" "}
        <span className=" italic">sites and apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div className="flex flex-col items-center justify-center sm:flex-row gap-2 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{delay: 0.1}}
      >
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here
         <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="/CV.pdf" download={true}>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>

        <a href="https://linkedin.com" className="group bg-white px-4 text-gray-700 py-3 flex items-center gap-2 rounded-full border border-black/10  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 cursor-pointer transition" target="_blank"><BsLinkedin /></a>
         
        <a href="https://github.com" className="bg-white px-4 text-gray-700 text-[1.35rem] py-3 flex items-center gap-2 rounded-full border border-black/10  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 transition" target="_blank"><FaGithubSquare/></a>

      </motion.div>
    </section>
  );
}
