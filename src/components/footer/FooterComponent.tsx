import FooterLinks from "./components/FooterLinks";

function FooterComponent(){
    return (
        <>
            <div className="w-full h-20 md:h-40 flex flex-auto flex-col gap-y-1 items-center text-slate-200 text-center justify-center">
                <p className="font-poppins text-xs md:text-sm p-0 md:p-5">Created by Moses | HTML, Tailwind and React</p>
                <div className="flex flex-row gap-x-2 md:gap-x-4">
                    <FooterLinks href="https://www.linkedin.com/in/emcabarles/" src="./src/assets/icons/technology/linkedin.svg"/>
                    <FooterLinks href="https://github.com/eriazaru" src="./src/assets/icons/technology/github.svg"/>
                </div>
            </div>
        </>
    )
}

export default FooterComponent