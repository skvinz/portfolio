"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const Tech = ({
  techlist,
  direction,
}: {
  techlist: string[];
  direction: string;
}) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      setAnimated(true);
    }
  }, []);

  // Duplicate the original content to create a loop effect
  const duplicatedContent = [...techlist, ...techlist];

  return (
    <>
      <div
        className={`scroller ${animated ? "animated" : ""}`}
        data-speed="slow"
        data-direction={direction}
      >
        <ul className="tag-list scroller__inner">
          {duplicatedContent.map((item, index) => (
            <li key={index}>
              <Badge variant={"outline"}>{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tech;
