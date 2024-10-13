import { Experience } from "../../../models/Content"

interface CardProps {
    exp: Experience;
    description?: string[];
}

function ExperienceCard ({exp, description}: CardProps) {

    return (
        <>
            <div className="max-w-sm h-50 md:max-w-2xl">
                <p className="font-semibold font-poppins text-lg">{exp.role}</p>
                <p className="italic font-mono text-sm">{exp.type}</p>
                <ul className="list-disc list-inside">
                {description?.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
                <p>{exp.duration}</p>
            </div>
        </>
    )

}

export default ExperienceCard