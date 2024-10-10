"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export type CardProps = {
  name: string;
  job: string;
  image: string;
  delay: number;
  className: string;
  animate: object;
};

const Card = ({ image, job, name, delay, className, animate }: CardProps) => {
  return (
    <motion.div
      className={cn(
        "w-72 h-20 absolute z-10 backdrop-blur-xl -mt-[1500px] rotate-3 rounded-xl items-center px-4 flex border gap-4",
        className
      )}
      animate={animate}
      transition={{ type: "spring", stiffness: 100, delay }}
    >
      <div>
        <Image
          src={image}
          alt="profile"
          width={10}
          height={10}
          className="h-14 w-14 rounded-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-base font-semibold drop-shadow-2xl">{name}</h2>
        <h4 className="text-xs text-neutral-600">{job}</h4>
      </div>
    </motion.div>
  );
};

export default Card;
