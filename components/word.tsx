"use client";
import React, { PropsWithChildren } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

interface WordProps extends PropsWithChildren<{}> {
  range: [number, number];
  progress: MotionValue<number>;
}

export const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3 mt-3 relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{
          opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
