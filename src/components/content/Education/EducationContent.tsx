import EducationCard from "./components/EducationCard"
import HeaderText from "../../custom/component/HeaderText"
import { useAnimateOnVisible } from "../../hooks/useAnimateOnVisible";
import { useData } from "../../hooks/context/DataContextProvider";
import { Education } from "../../models/Content";

function EducationContent(){

    const { data } = useData();
    const { sectionRef, visibleItems } = useAnimateOnVisible(data?.education || [], 400, 0.3);

    return(
        <>
        <section className='m-6' id='education' ref={sectionRef}>
            <HeaderText number="01." title="Acads" justify='center' observerRef={sectionRef} animationDirection="left" threshold={0.2}/>
            <ol className="relative border-s mx-5 border-gray-200">                  
                {data?.education.map((item: Education, index: number) => (
                    <div key={index} className={`transition ${visibleItems[index] ? "animate-in fade-in slide-in-from-right-36" : "opacity-0"} delay-200 duration-500`}>
                        <EducationCard item={item} key={index}/>
                    </div>
                ))}
            </ol>
        </section>
        </>
    )

}

export default EducationContent