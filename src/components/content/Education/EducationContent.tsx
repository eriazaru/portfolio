import EducationCard from "./components/EducationCard"
import HeaderText from "../../custom/component/HeaderText"
import { useRef } from "react";

function EducationContent(){

    const sectionRef = useRef<HTMLDivElement>(null);

    return(
        <>
        <section className='m-6' id='education' ref={sectionRef}>
            <HeaderText number="01." title="Acads" justify='center' observerRef={sectionRef} animationDirection="left"/>
            <div className="flex flex-wrap justify-center gap-5">
                <EducationCard 
                    name="Technological Institute of the Philippines" 
                    year="2019 - 2023" 
                    award="With Distinction"
                    src="./src/assets/img/logo/tip.png"
                />
                <EducationCard 
                    name="Nuestra Senora de Guia Academy of Marikina" 
                    year="2017 - 2019" 
                    award="With Honors"
                    src="./src/assets/img/logo/nsdga.png"
                />
            </div>
        </section>
        </>
    )

}

export default EducationContent