import { Experience } from "../../../models/Content"

interface CardProps {
    exp: Experience;
    description?: string[];
}

function ExperienceCard ({exp, description}: CardProps) {

    return (
        <>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-slate-500">{exp.duration}</time>
                <h3 className="text-lg font-semibold text-sky-500">{exp.role}</h3>
                <h2 className="text-base italic font-medium text-yellow-600">{exp.type}</h2>
                <ul className="mb-10 ms-4 list-image-[url(src/assets/icons/components/list-arrow.svg)] list-inside">
                {description?.map((item: string, index: number) => (
                    <li className="text-slate-300" key={index}>{item}</li>
                ))}
                </ul>
            </li>
        </>
    )

}

export default ExperienceCard