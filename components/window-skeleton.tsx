"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Skeleton = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <div className="flex items-center justify-end w-full flex-col pt-5">
      <div className="w-[100%] flex items-center pl-2 border-2 border-primary-foreground/30 rounded-t-[10px] h-[24px] space-x-1">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      </div>
      <div className="w-[100%] h-[150px] max-h-[300px] border-x border-primary-foreground/30">
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex flex-col border border-primary-foreground/30 space-y-2 p-5">
            <div className="w-full h-auto space-x-5 flex pb-5">
              <motion.span
                className="w-[30px] h-[30px] rounded-full bg-neutral-700"
                animate={controls}
              />
              <div className="w-[80%] space-y-2 h-[30px] flex flex-col">
                <motion.span
                  className="w-[80%] h-[6px] rounded-full bg-neutral-700"
                  animate={controls}
                />
                <motion.span
                  className="w-[80%] h-[6px] rounded-full bg-neutral-700"
                  animate={controls}
                />
              </div>
            </div>
            <motion.span
              className="w-[80%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-[60%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-[90%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-full h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
          </div>
          <div className="w-1/2 h-full flex flex-col border border-primary-foreground/30 space-y-2 p-5">
            <motion.span
              className="w-full h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-[80%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-[60%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-[90%] h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
            <motion.span
              className="w-full h-[6px] rounded-full bg-neutral-700"
              animate={controls}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
