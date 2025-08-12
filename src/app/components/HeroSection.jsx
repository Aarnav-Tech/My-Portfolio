"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="min-h-[4rem] text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-snug font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
            "Aarnav Lokesh          ",
            1000,
            "a Web Developer",
            1000,
            "a Python Programmer",
            1000,
            "a UI/UX Designer (css/tailwind)",
            1000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="text-cyan-400" // optional for extra pop
          />
</h1>

          <p className="text-gray-400 text-lg sm:text-xl mt-4 mb-16 object-center">
            I create code because I have free will. 😼
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
<Image
  src="/images/hero-image.jpg"
  alt="hero image"
  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-full cursor-not-allowed"
  width={400}
  height={400}
/>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
