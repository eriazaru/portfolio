import { memo, useMemo } from 'react';
import HeaderText from '../../custom/component/HeaderText';
import { useAnimateOnVisible } from '../../hooks/useAnimateOnVisible';
import { useData } from '../../hooks/context/DataContextProvider';
import { Projects } from '../../models/Content';
import ProjectCard from './component/ProjectCard';

const ProjectContent = memo(function ProjectContent() {
    const { data } = useData();

    const projects = useMemo(() => data?.projects || [], [data?.projects]);

    const { sectionRef, visibleItems } = useAnimateOnVisible(projects, 400, 0.2);

    return (
        <>
            <section className='m-6' id='projects' ref={sectionRef}>
                <HeaderText 
                    number='05.' 
                    title='Projects' 
                    justify='center' 
                    observerRef={sectionRef} 
                    animationDirection='left' 
                    threshold={0.1} 
                />
                <div className='flex flex-col md:flex-row md:flex-wrap space-y-5 mx-auto md:items-center md:justify-center'>
                    {projects.map((project: Projects, index: number) => (
                        <div 
                            key={index} 
                            className={`transition ${
                                visibleItems[index] 
                                    ? "animate-in fade-in slide-in-from-right-36" 
                                    : "opacity-0"
                            } delay-200 duration-500`}
                        >
                            <ProjectCard 
                                project={project} 
                                stack={project.stack} 
                                type={project.type} 
                                key={index} 
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
});

export default ProjectContent;
