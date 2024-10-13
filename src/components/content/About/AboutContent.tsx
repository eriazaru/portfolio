import HeaderText from "../../custom/component/HeaderText"

function AboutContent(){

    

    return(
        <>
            <section className="m-6">
                <HeaderText number="01." title="About Me" justify="start" animationDirection="left" threshold={0.3}/>
                <div className="flex flex-col items-center lg:items-start justify-start lg:flex-row gap-9">
                    <div className="gap-2">
                        <p className="md:px-12 lg:p-0 tracking-normal text-justify font-poppins text-base text-white font-normal">
                        Hello! I am Eleazar Moses, I like drawing digitally and to design and create things. I am currently practicing and honing my skills in web development.
                        </p>
                        <br />
                        <p className="md:px-12 lg:p-0 tracking-normal text-justify font-poppins text-base text-white font-normal">I am a Software Engineer with experience in AI Tech, Web Dev, Mobile App Dev and Game Dev. I have an eagerness-to-learn mindset that helped me adapt to new technologies used in previous projects.</p>
                        <br />
                        <p className="md:px-12 lg:p-0 tracking-normal text-pretty font-poppins text-base text-white font-normal">You can reach me out through this <a className="underline underline-offset-2" href="mailto:cabarleseleazarmoses@gmail.com"><span>Email</span></a> or through my phone number here: <span className="text-lime-500">(+61) 0480620058</span></p>
                        <div className="pt-9 md:px-12 lg:px-0">
                            <h2 className="font-poppins text-base pb-4">Technologies I have been tinkering with recently:</h2>
                            <ol className="list-image-[url(src/assets/icons/components/list-arrow.svg)] list-inside grid grid-cols-2 font-mono items-center justify-center">
                                <li>HTML</li>
                                <li>Tailwind CSS</li>
                                <li>ReactJS</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>Unity</li>
                            </ol>
                        </div>
                    </div>
                    <img src="src/assets/img/profile.jpg" alt="My Profile" className=" h-auto w-44 md:w-56 lg:w-60 rounded-md lg:justify-self-center outline outline-1 outline-offset-8 outline-white"/>
                </div>
            </section>
        </>
    )
}

export default AboutContent