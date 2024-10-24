import { useEffect, useState } from "react";

function HeroContent () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Adjust the delay time (500ms) as needed
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <section className="m-6">
                <div className="pt-20 md:pt-0 md:h-screen flex flex-col justify-center items-center">
                    <h1 className={`font-mono text-xl py-5 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-300 duration-300`}>Hi there! my name is</h1>
                    <h2 className={`font-poppins font-semibold text-5xl ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-700 duration-300`}>Eleazar Moses Cabarles</h2>
                    <h2 className={`font-poppins text-3xl py-6 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-1000 duration-300`}>Web and Game Developer</h2>
                </div>
            </section>
        </>
    )
}

export default HeroContent