import { useEffect, useRef, useState} from "react";
import HeaderText from "../../custom/component/HeaderText"

function AboutContent(){

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return(
        <>
            <section id="about" className="m-6 select-none" ref={sectionRef}>
                <HeaderText observerRef={sectionRef} number="01." title="About Me" justify="start" animationDirection="left" threshold={0.3}/>
                <div className="flex flex-col-reverse items-center lg:items-start justify-start lg:flex-row gap-9">
                    <div className={`gap-2 text-slate-200 ${isVisible ? "animate-in fade-in slide-in-from-top-28" : "opacity-0"} duration-300 delay-500`}>
                        <p className="md:px-12 lg:p-0 tracking-normal text-justify font-poppins text-base text-white font-normal">
                        Hello! I am <span className="text-yellow-500 font-semibold">Eleazar Moses</span>, I like drawing digitally and to design and create things. I am currently practicing and honing my skills in web development.
                        </p>
                        <br />
                        <p className="md:px-12 lg:p-0 tracking-normal text-justify font-poppins text-base text-white font-normal">I am a Software Engineer with experience in AI Tech, Web Dev, Mobile App Dev and Game Dev. I have an eagerness-to-learn mindset that helped me adapt to new technologies used in previous projects.</p>
                        <br />
                        <p className="md:px-12 lg:p-0 tracking-normal text-pretty font-poppins text-base text-white font-normal">You can reach me out through this <a className="underline underline-offset-2 decoration-yellow-500" href="mailto:cabarleseleazarmoses@gmail.com"><span className="text-yellow-500 font-semibold">cabarleseleazarmoses@gmail.com</span></a> or through my phone number here: <span className="text-yellow-500 font-semibold">(+61) 0480620058</span></p>
                        <div className="pt-9 md:px-12 lg:px-0">
                            <h2 className="font-poppins text-base pb-4">Technologies I have been tinkering with recently:</h2>
                            <ol className="list-image-[url(./src/assets/icons/components/list-arrow.svg)] list-inside grid grid-cols-2 font-mono items-center justify-center text-sky-500">
                                <li >HTML</li>
                                <li>Tailwind CSS</li>
                                <li>ReactJS</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>Unity</li>
                            </ol>
                        </div>
                    </div>
                    <img src="src/assets/img/profile.jpg" alt="My Profile" className={`h-auto w-44 md:w-56 lg:w-60 rounded-md lg:justify-self-center outline outline-1 outline-offset-8 outline-white ${isVisible ? "animate-in fade-in slide-in-from-top-28" : "opacity-0"} duration-300 delay-400`}/>
                </div>
            </section>
        </>
    )
}

export default AboutContent