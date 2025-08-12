"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#181818]">
      <div className="relative group h-52 md:h-72 w-full">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-opacity duration-500 rounded-t-xl">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-4 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="px-4 py-6 rounded-b-xl">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
