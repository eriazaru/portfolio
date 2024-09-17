import {} from 'react';
import HeaderText from '../../custom/component/HeaderText';
import { useAnimateOnVisible } from '../../hooks/useAnimateOnVisible';
import { useData } from '../../hooks/context/DataContextProvider';

function ProjectContent(){
    const { data } = useData();
    const { sectionRef, visibleItems } = useAnimateOnVisible(data?.certificates || [], 100, 0.1);

    return(
        <>
            <section className='m-6' id='projects' ref={sectionRef}>
                <HeaderText number='05.' title='Project' justify='center' observerRef={sectionRef} animationDirection='left'/>
            </section>
        </>
    )

}

export default ProjectContent