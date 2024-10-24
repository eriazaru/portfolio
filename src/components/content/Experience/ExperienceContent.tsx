import ExperienceCard from "./component/ExperienceCard"
import HeaderText from "../../custom/component/HeaderText"
import { useData } from "../../hooks/context/DataContextProvider"
import { Experience } from "../../models/Content";
import { useAnimateOnVisible } from "../../hooks/useAnimateOnVisible";

function ExperienceContent(){
    const { data } = useData();
    const { sectionRef, visibleItems } = useAnimateOnVisible(data?.experience || [], 400, 0.3);
    
    return(
        <>
        <section className='m-6' id='jobs' ref={sectionRef}>
            <HeaderText number="01." title="Experience" justify="center" animationDirection="right" threshold={0.4}/>
            <ol className="relative border-s mx-5 border-gray-200">
                {data?.experience.map((exp: Experience, index: number) => (
                    <div key={index} className={`transition ${visibleItems[index] ? "animate-in fade-in slide-in-from-bottom-36" : "opacity-0"} delay-200 duration-500`}>
                        <ExperienceCard exp={exp} description={exp.description}/>
                    </div>
                ))}
            </ol>
        </section>
        </> 
    )

}

export default ExperienceContent