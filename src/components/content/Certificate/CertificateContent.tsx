import { useEffect, useMemo, useState } from 'react';
import { useData } from '../../hooks/context/DataContextProvider';
import { Certificate } from '../../models/Content';
import { useAnimateOnVisible } from '../../hooks/useAnimateOnVisible';
import { CertificateModal } from './components/CertificateModal';
import HeaderText from '../../custom/component/HeaderText';

function CertificateContent() {
    const { data } = useData();
    const { sectionRef, visibleItems } = useAnimateOnVisible(data?.certificates || [], 100, 0.5 );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
    const [initialIndex, setInitialIndex] = useState<number | null>(null);

    // Group certificates by type
    const groupedCertificates = useMemo(() => (
        data?.certificates.reduce((acc: { [key: string]: Certificate[] }, cert: Certificate) => {
            if (!acc[cert.group]) {
                acc[cert.group] = [];
            }
            acc[cert.group].push(cert);
            return acc;
        }, {}) || {}
      ), [data?.certificates]);

    const openModal = (group: string, index: number) => {
        setSelectedGroup(group);
        setInitialIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedGroup(null);
        setInitialIndex(null);
    };

    useEffect(() => {
        // Prevent scrolling when the modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <>
            <section className='m-6' id='certifications' ref={sectionRef}>
                <HeaderText number='03.' title='Certifications' justify='center' observerRef={sectionRef} animationDirection='top' threshold={0.4}/>
                <div className="flex flex-wrap mx-auto flex-row justify-center items-start gap-3 md:gap-5">
                    {groupedCertificates && Object.entries(groupedCertificates).map(([group, certificates], index) => (
                        <div
                            key={index}
                            onClick={() => openModal(group, 0)} // Always open the first certificate in the group
                            className={`pb-2 items-center justify-center text-center bg-slate-900 max-w-36 md:max-w-72 lg:w-1/2 h-auto outline-amber-400 outline-1 hover:outline hover:drop-shadow-2xl hover:-translate-y-2 hover:cursor-pointer ${visibleItems[index] ? 'animate-in fade-in slide-in-from-bottom-36' : 'opacity-0'} duration-500`}
                        >
                            <img className='align-center md:max-h-44 w-auto md:w-72' src={`./src/assets/certificate/${certificates[0].type}/${certificates[0].src}`} alt={certificates[0].name} />
                            <span className='align-center w-auto font-poppins font-base text-xs md:text-base pb-2'>{certificates[0].group}</span>
                        </div>
                    ))}
                </div>
            </section>

            {isModalOpen && selectedGroup && initialIndex !== null && (
                <CertificateModal
                    groupedCertificates={groupedCertificates}
                    closeModal={closeModal}
                    selectedGroup={selectedGroup}
                    initialIndex={initialIndex}
                />
            )}
        </>
    );
}

export default CertificateContent;
