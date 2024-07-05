import OpportunityBanner from "./components/oppertunity";
import PhotoGallerySection from "./components/pictures";
import Profile from "./components/profile";
import ProjectsSection from "./components/projects";
import SimpleBio from "./components/simplebio";
import WorkTimeline from "./components/timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:px-24 md:py-12">
      <div className="flex flex-col items-center">
        <OpportunityBanner />
        <Profile />
        <SimpleBio />
        <WorkTimeline />
        <ProjectsSection />
        <PhotoGallerySection />
      </div>
    </main>
  );
}
