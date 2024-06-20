import Link from "next/link";
import Image from "next/image";
import React from "react";
import ItemTransition from "../item-transition";
import { Badge } from "./badge";

interface CardProps {
  link: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ link, title, description, tags }: CardProps) => {
  return (
    <div className="border-2 flex border-[#7fddf4] w-full h-[300px] rounded-[24px] hover:shadow-[#0083AD]/70 hover:shadow-md">
      <div className="flex w-1/2 h-full">
        <div className="bg-black w-full h-full flex flex-col p-2 md:p-10 space-y-1 rounded-[24px]">
          <Link
            href={link}
            className="flex h-10 w-1/2 text-3xl sm:text-3xl font-bold text-white/80 transition-all duration-700 hover:text-white"
          >
            <ItemTransition delay={0.7}>
              <h1 className=" ">{title}</h1>
            </ItemTransition>
          </Link>
          <div className="space-x-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className="bg-white border-none text-[#2b2b2b] hover:text-black px-2 py-0.2 text-[0.2rem]"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </div>

      <div className="bg-black rounded-[22px] w-1/2 h-auto relative">
        <div className="flex absolute bg-[#00000070] rounded-[24px] z-10 w-full h-full"></div>
        <Image
          src="/sscart.png"
          objectFit="cover"
          fill
          objectPosition="top"
          alt="alt-text"
          className="rounded-[22px] p-2"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
