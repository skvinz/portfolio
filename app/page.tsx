import Tech from "@/components/tech";
import Contact from "@/components/contact-icons";
import PageTransitionProvider from "@/components/page-transition-provider";
import ItemTransition from "@/components/item-transition";
import ProjectCard from "@/components/ui/project-card";
import HandWave from "@/components/hand-wave";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const TechStack = [
    "TypeScript",
    "Go",
    "Next.js",
    "React.js",
    "RESTful API",
    "JWT",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Vitest",
    "Jest",
    "Playwright E2E",
    "Mock Service Worker",
    "Tailwind CSS",
    "Github",
  ];

  const Web3Stack = [
    "Blockchain Technology",
    "Solidity",
    "Ethereum Virtual Machine",
    "Smart Contracts",
    "Foundry",
    "Hardhat",
    "Sepolia testnet",
    "Chainlink Oracle",
    "JSON-RPC",
    "Alchemy",
    "Web3.js",
    "Consensus Mechanisms",
    "DeFi",
  ];

  const Projects = [
    {
      link: "/portfolio",
      title: "eCommmerce",
      description:
        "Gardening Store with fundamental Store operations. Register using OAuth to Add/Delete items to your Cart, Review and Pay using Stripe Checkout. This projects also features an Admin Dashboard to manage your Products and Categories, your account must be Admin to access the Dashboard.",
      tags: [
        "TypeScript",
        "Next.js",
        "Server Actions",
        "MySQL",
        "JWT",
        "Clerk",
      ],
    },
    // {
    //   link: "/portfolio",
    //   title: "eCommmercce2",
    //   description: "This 2 is a test description",
    //   tags: ["tag1", "tag2", "tag3", "tag4"],
    // },
  ];

  return (
    <PageTransitionProvider>
      <main className="bg-black flex h-auto w-full flex-col items-start sm:items-center justify-start sm:justify-center">
        <div className="bg-black w-full min-h-screen h-full 2xl:max-w-[1080px] text-primary-foreground flex-shrink-0">
          <div className="p-20 min-h-[700px] flex flex-col justify-center space-y-10">
            <div className="space-y-2">
              <ItemTransition delay={0.5}>
                <HandWave />
                <h1 className="text-3xl sm:text-6xl text-[#6bd6f0] font-bold inline-block pb-1">
                  Vincenzo H. Paredes
                </h1>
              </ItemTransition>
              <div className="flex space-x-4">
                <span className="text-4xl">🇲🇽</span>
                <p className="text-xl text-white/80 sm:text-2xl text- font-semibold pb-5">
                  Ingeniero de Sistemas
                </p>
              </div>
              <p className="text-xl text-white/80">
              Hola quien te habla es un ingeniero de sistemas titulado con más de tres años de experiencia como desarrollador web. He trabajado en diversos proyectos, creando soluciones web robustas y eficientes. 
              Además, tengo experiencia en soporte TI y seguridad informática. Mi capacidad para abordar problemas desde múltiples ángulos me convierte en un profesional versátil y efectivo en el ámbito tecnológico.
              </p>
            </div>

            <div className="">
              <Tech techlist={TechStack} direction="right" />
              <Tech techlist={Web3Stack} direction="left" />
            </div>
          </div>

          <div className="flex flex-col w-full h-auto py-10 space-y-5">
            {Projects.map((project, index) => (
              <ProjectCard
                key={index}
                link={project.link}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>

          <Contact />
        </div>
      </main>
    </PageTransitionProvider>
  );
}
