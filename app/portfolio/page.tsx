import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageTransitionProvider from "@/components/page-transition-provider";
import { Sprout, VideoIcon } from "lucide-react";
import Tech from "@/components/tech";

import { Tooltip } from "@/components/ui/tooltip";
import CopyToClipboard from "@/components/ui/copy-clipboard";

const storeFeatures = [
  "Home Landing Page",
  "Clerk OAuth Account System",
  "Products Page",
  "Categories Sections",
  "Cart sync with Database to persist in Desktop and Mobile",
];

const Portfolio = () => {
  const TechStack = [
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Planet Scale DB Management",
    "Prisma ORM",
    "Server Actions",
    "RESTful API",
    "JWT",
    "Axios",
    "Tailwind CSS",
    "TanStack Query",
    "TanStack Table",
    "Vercel",
  ];

  return (
    <PageTransitionProvider>
      <div className="w-full bg-black flex justify-center items-center">
        <div className="flex p-5 w-[95%] md:w-[80%] max-w-[1440px] 2xl:min-h-screen">
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "absolute hidden lg:flex md:top-10 w-[50px] m-5 h-[50px] md:left-10 rounded-full"
            )}
            href={"/"}
          >
            <FaArrowLeft className="w-[40px] h-[40px]" />
          </Link>

          <div className="w-full h-auto bg-gradient-to-r from-[#0083AD] via-purple-400 to-blue-800 rounded-[24px] items-center flex flex-col p-[2px]">
            <div className="bg-black rounded-[24px] w-full h-full flex flex-col p-5 md:p-10 space-y-5 items-between justify-between">
              <div className="space-y-2 text-white/70">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl md:text-5xl font-bold">
                    Rhiz e-Commerce
                  </h3>
                  <Sprout width={60} height={60} />
                </div>
                <hr className="border-white/30" />

                <div className="pt-5">
                  <Tech techlist={TechStack} direction="right" />
                </div>
                <div className="py-5 space-y-5">
                  <p>
                    This is an e-Commerce created using App Directory inspired
                    in a gardening business.
                  </p>

                  <p className="space-x-2">
                    For the <span className="font-bold">Store</span> operations
                    like fetching products and categories, cart management,
                    payment server actions.
                    <span className="font-bold">Admin dashboard</span> use
                    Client components and REST API endpoints, fetching data with
                    Tanstack Query.
                  </p>

                  <div className="space-y-5 lg:space-y-0 lg:flex">
                    <div className="lg:w-1/2 space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        Store Features
                      </h3>
                      <ul className="list-disc list-inside">
                        <li className="w-auto ml-4">Clerk OAuth System</li>
                        <li className="ml-4">Product and Categories pages</li>
                        <li className="ml-4">Add/Delete items in your Cart</li>
                        <li className="ml-4">
                          Cart sync with Database to persist in Desktop and
                          Mobile
                        </li>
                        <li className="ml-4">Cart Review</li>
                        <li className="ml-4">Stripe Checkout and Payment</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/2 space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        Admin Dashboard Features
                      </h3>
                      <p>
                        Manage your products and categories. Protected routes
                        and pages, must be registered and admin to access.
                      </p>
                      <ul className="list-disc list-inside">
                        <li className="ml-4">Clerk OAuth System</li>
                        <li className="ml-4">Product and Categories pages</li>
                        <li className="ml-4">
                          Cart sync with Database to persist in Desktop and
                          Mobile
                        </li>
                        <li className="ml-4">
                          Cart Review Page, manage your Cart with CRUD
                          Operations
                        </li>
                        <li className="ml-4">Stripe Checkout and Payment</li>
                      </ul>
                    </div>
                  </div>

                  <p className="space-x-5">
                    Test card for payment{" "}
                    <CopyToClipboard text={"4242424242424242"} />
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://store-gardening.vercel.app/"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TbWorld className="w-[30px] h-[30px]" />
                  <span>Live Website</span>
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://github.com/Labastidaa/store-gardening"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="w-[30px] h-[30px]" />
                  <span>View Github Repository</span>
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://vimeo.com/manage/videos/898797134"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <VideoIcon className="w-[30px] h-[30px]" />
                  <span>Demo Video</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransitionProvider>
  );
};

export default Portfolio;
