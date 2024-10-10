"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="absolute w-full h-full flex justify-between">
      <div className="w-96 flex justify-between flex-col py-10">
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-r-2xl"
          animate={{ width: "60%" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-r-2xl"
          animate={{ width: "80%" }}
          transition={{ type: "spring", stiffness: 100 }}
        ></motion.div>
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-r-2xl "
          animate={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        ></motion.div>
      </div>
      <div className=" w-96 flex justify-between flex-col py-10 items-end">
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-l-2xl "
          animate={{ width: "60%" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-l-2xl"
          animate={{ width: "80%" }}
          transition={{ type: "spring", stiffness: 100 }}
        ></motion.div>
        <motion.div
          className="h-20 bg-[#edf8f6] w-0 rounded-l-2xl"
          animate={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Footer;
