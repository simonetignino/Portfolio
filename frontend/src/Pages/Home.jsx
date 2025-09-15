import React from "react";
import LeftSection from "../components/LeftSection.jsx";
import MainSection from "../components/MainSection.jsx";

export default function Home() {
  return (
    <div className="bg-[#1d1f26] flex">
      <LeftSection />
      <MainSection />
    </div>
  );
}
