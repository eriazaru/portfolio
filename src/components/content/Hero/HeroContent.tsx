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
            <section className="h-screen flex items-center justify-center m-6">
                <div className="">
                    <h1 className={`font-mono text-xl py-5 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-200`}>Hi there! my name is</h1>
                    <h2 className={`font-poppins font-semibold tracking-tight text-5xl ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-700`}>Eleazar Moses Cabarles</h2>
                    <h2 className={`font-poppins tracking-tighter text-3xl py-6 ${isVisible ? 'animate-in fade-in slide-in-from-top-28' : 'opacity-0'} delay-1000`}>Web and Game Developer</h2>
                </div>
            </section>
        </>
    )
}

export default HeroContent