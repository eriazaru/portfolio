import { useData } from "../../hooks/context/DataContextProvider";
import { Technology } from "../../models/Content";
import { ReactSVG } from "react-svg";
import { useAnimateOnVisible } from "../../hooks/useAnimateOnVisible";
import HeaderText from "../../custom/component/HeaderText";

function TechnologyContent() {
    const { data } = useData();
    const { sectionRef, visibleItems } = useAnimateOnVisible(data?.technology || [], 80, 0.4);

    
    return (
        <section className="m-6" id='skills' ref={sectionRef}>
            <HeaderText number="02." title="Technology" justify='center' observerRef={sectionRef} animationDirection="left" threshold={0.3}/>
            <div className="items-center justify-center flex flex-wrap text-center gap-x-3 md:gap-x-7 md:px-4">
                {data?.technology?.map((tech: Technology, index: number) => (
                    <div
                        key={index}
                        className={`tech-item grid grid-flow-row items-center justify-center py-2 transition-opacity  ${visibleItems[index] ? 'animate-in fade-in zoom-in' : 'opacity-0'} duration-500`}
                    >
                        <ReactSVG className="rounded-lg size-20 md:size-28 bg-cyan-900 overflow-hidden transition-all"
                            beforeInjection={(svg) => {
                                svg.classList.add('size-20', 'md:size-28', 'fill-slate-200', 'p-5', 'hover:scale-110', 'ease-in', 'duration-200');
                            }}
                            src={`./src/assets/icons/technology/${tech.src}`}
                        />
                        <p className="py-2 font-poppins text-xs md:text-base md:font-semibold">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechnologyContent;
