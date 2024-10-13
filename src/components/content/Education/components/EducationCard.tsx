import { Education } from "../../../models/Content";

interface CardProps {
    item: Education;
}

function EducationCard({ item }: CardProps){
    return(
        <>
            <div className='m-2 flex md:flex-col items-center justify-center w-[20rem] lg:w-[25rem] h-60 md:h-72 lg:h-80 p-2 bg-sky-900 shadow-md hover:scale-105 transition-transform duration-300'>
                <img className="mt-5 mb-2 object-scale-down w-20 md:w-28 lg:w-36 duration-200" src={`src/assets/img/logo/${item.src}`} alt="school logo"/>
                <ul className="text-center">
                    <li className="font-semibold font-poppins text-md">
                        {item.program}
                    </li>
                    <li className="italic text-sm">
                        {item.school}
                    </li>
                    <li className="font-medium font-sans text-xs">
                        {item.honor}
                    </li>
                    <li className="font-mono text-xs">
                        {item.duration}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default EducationCard