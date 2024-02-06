"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { Word } from "./word";

interface WordsProps {
  value: string;
}

export function Words({ value }: WordsProps) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      className="container mx-auto flex flex-wrap px-4 font-black xl md:2xl lg:text-5xl text-white leading-none"
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
