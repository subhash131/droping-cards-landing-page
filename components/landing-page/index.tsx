"use client";
import React from "react";
import { SparklesHeading } from "./heading";
import Card, { CardProps } from "./card";
import Footer from "./footer";

import { motion } from "framer-motion";

const items: CardProps[] = [
  {
    name: "Prabhas",
    job: "actor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVixU4mQ2IdqtJFeYrHs90tmnXw_TTweCy1y-pIsFig&s",
    delay: 0.3,
    className: "ml-200",
    animate: { marginTop: "220px", marginLeft: 200 },
  },
  {
    name: "Kajal",
    job: "actress",
    image:
      "https://i.pinimg.com/474x/71/0f/58/710f585ef1fde3f977c5351864cab536.jpg",
    delay: 0.4,
    className: "-ml-[500px] rotate-6",
    animate: { marginTop: "150px" },
  },
  {
    name: "Ram Charan",
    job: "actor",
    image:
      "https://imgix.ranker.com/list_img_v2/16236/496236/original/the-top-south-indian-actors-of-today-u1",
    delay: 0.2,
    className: "ml-[500px] rotate-6",
    animate: { marginTop: "0px" },
  },
  {
    name: "Allu Arjun",
    job: "actor",
    image:
      "https://www.beyoung.in/beyoungistan/wp-content/uploads/2022/09/Allu-Arjun-1024x709.jpg",
    delay: 1,
    className: "-ml-[400px] -rotate-12",
    animate: { marginTop: "250px" },
  },
  {
    name: "The Vijay",
    job: "actor",
    image: "https://static.toiimg.com/photo/100582499.cms",
    delay: 0.8,
    className: "ml-[100px] -rotate-12",
    animate: { marginTop: "-100px" },
  },
  {
    name: "Sudeep",
    job: "Actor",
    image:
      "https://images.filmibeat.com/img/1200x675/popcorn/movie_lists/south-india-actors-who-worked-in-bollywood-20231204162308-7478.jpg",
    delay: 0.5,
    className: "ml-[550px] rotate-6",
    animate: { marginTop: "200px" },
  },
  {
    name: "Sudeep",
    job: "Actor",
    image:
      "https://images.filmibeat.com/img/1200x675/popcorn/movie_lists/south-india-actors-who-worked-in-bollywood-20231204162308-7478.jpg",
    delay: 0.5,
    className: "-ml-[500px] -rotate-6",
    animate: { marginTop: "-100px" },
  },
  {
    name: "Yash",
    job: "actor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ifBBczmeyeaTFWtKyZ0DrOiHHgM2DnL-ra4E2sBB4BFO1zbOMgjuVcuvv435_2qzVl0&usqp=CAU",
    delay: 1.5,
    className: "-rotate-3 -ml-[350px]",
    animate: { marginTop: "20px", marginLeft: 100 },
  },
];

const LandingPage = () => {
  return (
    <div className="w-full h-full  ">
      <div className="h-[50vh] w-full flex items-center justify-end flex-col ">
        <SparklesHeading
          heading="Creators Hub"
          subHeading="The best place to find the actors"
        />
      </div>
      <div className="h-[50vh] w-full grid place-content-center relative">
        <div className="w-screen flex items-center justify-center h-[50vh]">
          {items.map(({ className, delay, image, job, name, animate }, idx) => {
            return (
              <Card
                className={className}
                delay={delay}
                image={image}
                job={job}
                name={name}
                animate={animate}
                key={`card-${name}-${idx}`}
              />
            );
          })}
          <motion.button
            className="absolute z-50 bg-black text-white backdrop-blur-xl -mt-[1500px] rotate-3 rounded-xl items-center flex shadow-xl gap-4 py-4 px-8 w-60 justify-center "
            animate={{ marginTop: "50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 2 }}
          >
            Get Started
          </motion.button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
