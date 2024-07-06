import React from "react";
import Divider from "@mui/material/Divider";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="h-full w-full grid grid-cols-12 grid-rows-12 gap-1">
      <div className="h-fll w-full col-span-12 row-span-6 flex flex-col px-4 sm:px-10 justify-center items-center  space-y-2 py-2  ">
       
      <div className="flex flex-col space-y-2 ">
        <div className="text-[30px] font-bold text-[rgba(255,255,255,0.8)] animate__animated animate__bounceInDown">
          About me
        </div>
        <div className="lg:text-[18px] sm:text-[17px] text-[16px] text-[rgba(255,255,255,0.6)] animate__animated animate__bounceInRight">
          Hello! I'm Vishal Kushwaha, currently pursuing a B.Tech in Information
          Technology from Harcourt Butler Technical University (HBTU), Kanpur. I
          have a deep passion for transforming complex problems into simple,
          beautiful, and intuitive designs. My goal is to craft websites that
          are not only functional and user-friendly but also visually appealing.
        </div>
      </div>
      <Divider
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          width: "50%",
        }}
      />
      <div className="text-[30px] font-bold text-[rgba(255,255,255,0.8)] animate__animated animate__bounceIn ">
        What I'm Doing
      </div>

      </div>
      <div className=" col-span-12 row-span-6 flex justify-center items-center  overflow-hidden ">
        <AboutCard />
      </div>
    </div>
  );
}

export default About;
