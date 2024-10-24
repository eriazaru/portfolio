import { Education } from "../../../models/Content";

interface CardProps {
    item: Education;
}

function EducationCard({ item }: CardProps){
    return(
        <>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{item.duration}</time>
                <h3 className="text-lg font-semibold text-sky-400">{item.program}</h3>
                <h2 className="text-base italic font-medium text-amber-500">{item.honor}</h2>
                <p className="mb-4 text-base font-normal text-gray-200">{item.school}</p>
            </li>
        </>
    )
}

export default EducationCard