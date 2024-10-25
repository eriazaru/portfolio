import { useEffect, useRef, useState } from "react";

function HeroContent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showContinue, setShowContinue] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    const timer = setTimeout(() => {
                        setShowContinue(true);
                    }, 2000); 
                    return () => clearTimeout(timer);
                } else {
                    setShowContinue(false); 
                }
            },
            { threshold: 0.1 } 
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

    return (
        <section ref={sectionRef} className="m-6">
            <div className="h-screen flex flex-col justify-center items-center relative"> {/* Added relative positioning here */}
                <h1 className={`font-mono text-md md:text-xl py-5 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-300 duration-300`}>
                    Hi there! my name is
                </h1>
                <h2 className={`font-poppins font-semibold text-2xl md:text-5xl ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-700 duration-300`}>
                    Eleazar Moses Cabarles
                </h2>
                <h2 className={`font-poppins text-lg md:text-3xl py-6 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-1000 duration-300`}>
                    Web and Game Developer
                </h2>
                <a
                    href="#about"
                    className={`absolute bottom-16 md:bottom-24 bg-amber-500 py-3 px-5 font-bold text-sm md:text-base rounded-full ${showContinue ? "opacity-100" : "opacity-0"} text-white animate-in fade-in slide-in-from-top-10 duration-300`}
                >
                    Continue
                    <span className="absolute inset-0 rounded-full border-[1px] md:border-2 border-amber-500 animate-ping"></span>
                </a>
            </div>
        </section>
    );
}

export default HeroContent;
