import React from "react";
import WorkItems from "./WorkItems";
import myGif from "../myGif.gif"

const data = [
  {
    year: 2020,
    title: "Freelance Graphic Designer",
    details:
      "During my career as a freelance graphic designer, I have had the opportunity to work with international clients, specializing in creating anime headers, banners, and thumbnails. With a deep appreciation for anime aesthetics and a keen eye for visual composition, I have crafted captivating designs that effectively capture the essence of the content. Additionally, I am currently involved in designing vlog thumbnails for a prominent YouTube content creator, using my skills to create eye-catching visuals that entice viewers to click and watch. ",
  },
  {
    year: 2020,
    title: "Freelance Video Editor",
    details:
      "I have had the opportunity to work with international clients as a video editor, specializing in editing gaming videos, creating montages, and incorporating various editing techniques such as transitions and camera tracking.Through my work, I continue to explore new editing techniques and stay updated with the latest trends, ensuring that I provide high-quality editing services that meet and exceed the expectations of my clients. Through my work, I continue to explore new editing techniques and stay updated with the latest trends, ensuring that I provide high-quality editing services that meet and exceed the expectations of my clients. I also make anime edits xD"
  },
  {
    year: 2023,
    title: "Student Ambassador at Zuno by foundit",
    details:"During my time as a student ambassador for Zuno by Foundit, I have had the incredible opportunity to connect my fellow college students with amazing internship programs and job opportunities. In addition to facilitating connections between Zuno and college students, I have also been instrumental in forging partnerships with coding clubs within my college. Being the face of Zuno at my college has been an incredibly fulfilling experience. I have had the privilege of witnessing firsthand the positive impact that internships can have on students' career trajectories."
  },
];

export const Work = () => {
  return (
    <div id="work" className="max-w-[1080px] m-2 md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold pb-6 left-[10%]">Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItems
          key={idx}
          year={item.year}
          title={item.title}
          details={item.details}
        />
      ))}
    </div>
  );
};
