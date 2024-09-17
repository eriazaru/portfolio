import HeaderText from "../../custom/component/HeaderText"

function AboutContent(){
    return(
        <>
            <section className="m-6">
                <HeaderText number="01." title="About Me" justify="start" animationDirection="left"/>
                <div className="flex flex-col">
                    <p className="font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>


                </div>
            </section>
        </>
    )
}

export default AboutContent