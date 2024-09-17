interface CardProps {
    name: string;
    year: string;
    award: string;
    src: string;
}

function EducationCard({name, year, award, src}: CardProps){
    return(
        <>
            <div className='font-poppins rounded-lg bg-neutral-600 border border-lime-700 flex flex-col justify-evenly items-center max-w-sm p-5 md:max-w-md md:flex-row lg:gap-6'>
                <img className="object-scale-down max-w-40 pb-5 md:w-32 md:p-0" src={src} alt="school logo"/>
                <div className="flex flex-col text-center md:text-start">
                    <h5 className="font-bold">{name}</h5>
                    <p>{year}</p>
                    <p>{award}</p>
                </div>
            </div>
        </>
    )
}

export default EducationCard