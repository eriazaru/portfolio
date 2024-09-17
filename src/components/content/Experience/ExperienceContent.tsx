import ExperienceCard from "./component/ExperienceCard"
import HeaderText from "../../custom/component/HeaderText"

function ExperienceContent(){

    return(
        <>
        <section className='m-6' id='jobs'>
            <HeaderText number="01." title="Experience" justify="center" animationDirection="right"/>
            <ExperienceCard/>
        </section>
        </>
    )

}

export default ExperienceContent