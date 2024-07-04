import OpportunityBanner from "./components/oppertunity";
import PhotoGallerySection from "./components/pictures";
import Profile from "./components/profile";
import ProjectsSection from "./components/projects";
import WorkTimeline from "./components/timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <OpportunityBanner />
        <Profile />
        <WorkTimeline />
        <ProjectsSection />
        <PhotoGallerySection />
      </div>
    </main>
  );
}
