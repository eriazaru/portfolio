import { ReactSVG } from 'react-svg';
import { Certificate } from '../../../models/Content';
import { useState, useMemo, useCallback } from 'react';

interface CertificateModalProps {
    groupedCertificates: { [key: string]: Certificate[] };
    closeModal: () => void;
    selectedGroup: string;
    initialIndex: number;
}

export function CertificateModal({
    groupedCertificates,
    closeModal,
    selectedGroup,
    initialIndex,
}: CertificateModalProps) {
    const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(initialIndex);
    const [isExiting, setIsExiting] = useState(false);

    // Memoize the selected certificates and total count to avoid re-calculating
    const certificates = useMemo(() => groupedCertificates[selectedGroup], [groupedCertificates, selectedGroup]);
    const totalCertificates = useMemo(() => certificates.length, [certificates]);

    const certificate = certificates[selectedCertificateIndex];

    // Memoize handlers to avoid unnecessary re-creation
    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    }, [closeModal]);

    const handleCloseModal = useCallback(() => {
        setIsExiting(true);
        setTimeout(() => {
            closeModal();
        }, 500); // Adjust based on the duration of your exit animation
    }, [closeModal]);

    const goToPreviousCertificate = useCallback(() => {
        if (selectedCertificateIndex > 0) {
            setTimeout(() => {
                setSelectedCertificateIndex((prevIndex) => prevIndex - 1);
            }, 100); // Adjust based on your animation duration
        }
    }, [selectedCertificateIndex]);

    const goToNextCertificate = useCallback(() => {
        if (selectedCertificateIndex < totalCertificates - 1) {
            setTimeout(() => {
                setSelectedCertificateIndex((prevIndex) => prevIndex + 1);
            }, 100);
        }
    }, [selectedCertificateIndex, totalCertificates]);

    const goToSlide = useCallback((index: number) => {
        setSelectedCertificateIndex(index);
    }, []);

    // Memoize the certificate slides to prevent re-renders
    const certificateSlides = useMemo(() => (
        certificates.map((certificate, index) => (
            <div
                className="w-full md:h-[40rem] inset-0 items-center transition ease-in-out duration-300 flex-shrink-0"
                style={{
                    transform: `translateX(-${selectedCertificateIndex * 100}%)`,
                }}
                key={index}
            >
                <img
                    className='object-cover'
                    src={`./src/assets/certificate/${certificate.type}/${certificate.src}`}
                    alt={certificate.name}
                />
            </div>
        ))
    ), [certificates, selectedCertificateIndex]);

    // Memoize the navigation buttons and indicators
    const navigationButtons = useMemo(() => (
        <div className="flex justify-between py-4">
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('size-5', 'md:size-10', 'fill-slate-400', 'ease-in', 'duration-200', 'hover:fill-slate-300');
                }}
                src="./src/assets/icons/components/arrow-left.svg"
                className={`${selectedCertificateIndex === 0 ? 'opacity-50' : 'cursor-pointer'}`}
                onClick={goToPreviousCertificate}
            />
            <div className='overflow-clip duration-500'>
                <p className='text-sm md:text-2xl content-center items-center duration-200'>{certificate.name}</p>
            </div>
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('size-5', 'md:size-10', 'fill-slate-400', 'ease-in', 'duration-200', 'hover:fill-slate-300');
                }}
                src="./src/assets/icons/components/arrow-right.svg"
                className={`${selectedCertificateIndex === totalCertificates - 1 ? 'opacity-50' : 'cursor-pointer'}`}
                onClick={goToNextCertificate}
            />
        </div>
    ), [certificate.name, selectedCertificateIndex, totalCertificates, goToPreviousCertificate, goToNextCertificate]);

    const navigationIndicators = useMemo(() => (
        <div className="flex space-x-3 bottom-5 justify-center mt-5 mb-3">
            {certificates.map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${selectedCertificateIndex === index ? 'bg-amber-400' : 'bg-gray-400'}`}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </div>
    ), [certificates, selectedCertificateIndex, goToSlide]);

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 w-full h-full flex items-start justify-center bg-black bg-opacity-60 overflow-y-auto">
            <div className={`${isExiting ? 'animate-out fade-out slide-out-to-top-36 ' : ''} h-auto w-[55rem] m-4 border border-amber-600 bg-slate-950 rounded-lg cursor animate-in fade-in slide-in-from-top-36 duration-700`}>
                <div className="flex justify-end items-center text-center p-2 md:p-5 border-b-[1px] border-amber-600 inset-0">
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add('size-6', 'ease-in-out', 'duration-200', 'hover:scale-110','cursor-pointer', 'md:size-9');
                        }}
                        src={`./src/assets/icons/components/close-square.svg`}
                        onClick={handleCloseModal}
                    />
                </div>
                <div className='flex flex-row overflow-hidden m-3 md:m-5'>
                    {certificateSlides}
                </div>  
                <div className="relative font-poppins font-bold text-slate-200 text-center pb-5 md:pb-10 px-5">
                    {navigationButtons}
                    {navigationIndicators}
                </div>
            </div>
        </div>
    );
}
