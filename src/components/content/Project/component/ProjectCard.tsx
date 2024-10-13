import { Projects, Technology } from "../../../models/Content"
import { ReactSVG } from "react-svg";

interface ProjectCardProps{
    project: Projects;
    stack: Technology[];
    type: string[]
}

function ProjectCard ({ project, stack, type }: ProjectCardProps) {
    return(
        <>
            <div className="flex-grow w-full h-50 md:w-[48rem] lg:w-[50rem] bg-sky-900 p-5 shadow-md shadow-neutral-950/40">
                <div className="flex justify-between items-start  pt-2 pb-4">
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add('size-12', 'fill-slate-200', 'ease-in-out', 'duration-200');
                        }}
                            src="./src/assets/icons/components/folder.svg"
                    />
                    <div className="flex flex-row">
                        <a href={project.github} target="_blank" className={`${project.github ? "": 'hidden'}`}>
                            <ReactSVG
                            beforeInjection={(svg) => {
                                svg.classList.add('size-10', 'fill-slate-200', 'p-2', 'ease-in-out', 'duration-200', 'md:hover:-translate-y-[4px]', 'hover:fill-lime-400');
                            }}
                                src="./src/assets/icons/technology/github.svg"
                            />
                        </a>
                        <a href={project.link} target="_blank" className={`${project.link ? "": 'hidden'}`}>
                            <ReactSVG
                            beforeInjection={(svg) => {
                                svg.classList.add('size-10', 'fill-slate-200', 'p-2', 'ease-in-out', 'duration-200', 'md:hover:-translate-y-[4px]', 'hover:fill-lime-400');
                            }}
                                src="./src/assets/icons/components/external-link.svg"
                            />
                        </a>
                    </div>
                </div>
                <p className="py-2 font-poppins font-medium text-base">{project.title}</p>
                <ul  className="flex flex-row space-x-3 text-xs">
                {type.map((item: string, index: number) => (
                        <li key={index} className="italic font-mono">{item}</li>
                ))}
                </ul>
                <p className="py-4 text-sm">{project.description}</p>
                <div className="flex flex-row">
                    {stack.map((tech: Technology, index: number) => (
                        <div className="flex flex-col flex-wrap items-center text-center" key={index}>
                            <ReactSVG 
                                beforeInjection={(svg) => {
                                    svg.classList.add('size-10', 'fill-slate-200', 'py-2');
                                }}
                                src={`./src/assets/icons/technology/${tech.src}`}
                            />
                            <p className="text-xs">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectCard