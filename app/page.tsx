import Hero from "@/Components/Hero";
import ProjectMangement from "@/Components/ProjectMangement";
import WorkTogether from "@/Components/WorkTogether";
import Navbar from "@/Components/navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <ProjectMangement/>
      <WorkTogether/>
    </div>
  );
}



