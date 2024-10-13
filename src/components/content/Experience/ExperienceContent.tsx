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
            <div className="space-y-5 mx-auto">
                {data?.experience.map((exp: Experience, index: number) => (
                    <div key={index} className={`${visibleItems[index] ? "animate-in fade-in slide-in-from-bottom-36" : "opacity-0"} duration-500`}>
                        <ExperienceCard exp={exp} description={exp.description}/>
                    </div>
                ))}
            </div>
        </section>
        </> 
    )

}

export default ExperienceContent