import React from "react";
import Divider from "@mui/material/Divider";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-1">
      <div className="col-span-12 row-span-6 flex flex-col px-10 space-y-2  ">
       
      <div className="flex flex-col ">
        <div className="text-[30px] font-bold text-[rgba(255,255,255,0.8)] animate__animated animate__bounceInDown">
          About me
        </div>
        <div className="text-[18px] text-[rgba(255,255,255,0.6)] animate__animated animate__bounceInRight">
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
      <div className=" col-span-12 row-span-6 flex justify-center items-center ">
        <AboutCard />
      </div>
    </div>
  );
}

export default About;
