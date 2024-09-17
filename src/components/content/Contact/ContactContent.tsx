import { useRef } from "react";
import HeaderText from "../../custom/component/HeaderText"

function ContactContent () {

    const sectionRef = useRef<HTMLElement>(null);

    return(
        <>
            <section className="m-6" ref={sectionRef}>
                <HeaderText title="Contact" number="07." justify="center" observerRef={sectionRef} animationDirection="top"/>
                <div className="flex flex-col items-center justify-center transition-transform">
                    <h3>

                    </h3>
                    <p>
                        
                    </p>
                    <div className="ease-in-out duration-200 text-lime-500 hover:scale-110">
                        <a href="mailto:cabarleseleazarmoses@gmail.com" className="border-2 font-poppins font-semibold rounded-md border-lime-500 py-4 px-14">Email Me!</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactContent