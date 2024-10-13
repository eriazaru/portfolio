import { ReactSVG } from "react-svg";

interface FoooterLinkProps {
    src: string;
    href: string;
}

function FooterLinks({src, href} : FoooterLinkProps){
    return(
        <>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.classList.add('size-7', 'ease-in-out', 'duration-200', 'fill-lime-400', 'md:hover:-translate-y-[4px]', 'cursor-pointer', 'md:size-8');
                    }}
                    src={src}
                />
            </a>
        </>
    )
}

export default FooterLinks