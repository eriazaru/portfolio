import { lazy } from "react";
const HeroSection = lazy(() => import("../content/Hero/HeroContent"));
const AboutSection = lazy(() => import("../content/About/AboutContent"));
const TechSection = lazy(() => import("../content/Technology/TechnologyContent"));
const CertSection = lazy(() => import("../content/Certificate/CertificateContent"));
const EducationSection = lazy(() => import("../content/Education/EducationContent"));
const ExperienceSection = lazy(() => import("../content/Experience/ExperienceContent"));
const ProjectSection = lazy(() => import("../content/Project/ProjectContent"));

function MainContent() {
    return (
        <>
            <main>
                <div className='relative text-neutral-200 w-full max-w-screen-lg mx-auto'>
                    {/* Lazy Loaded Sections */}
                    <HeroSection/>
                    <AboutSection/>
                    <ExperienceSection/>
                    <TechSection/>
                    <EducationSection/>
                    <CertSection/>
                    <ProjectSection/>
                </div>
            </main>
        </>
    )
}

export default MainContent;