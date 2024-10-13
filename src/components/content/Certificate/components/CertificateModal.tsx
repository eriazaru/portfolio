// Clean
// https://github.com/AyyazTech/create-carousel-slider-in-Tailwind-css-and-React-js/blob/main/src/components/carousel.component.js

import { ReactSVG } from 'react-svg';
import { Certificate } from '../../../models/Content';
import { useState } from 'react';

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

    const certificates = groupedCertificates[selectedGroup];
    const certificate = groupedCertificates[selectedGroup][selectedCertificateIndex];

    const totalCertificates = certificates.length;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    const handleCloseModal = () => {
        setIsExiting(true);
        setTimeout(() => {
            closeModal();
        }, 500); 
    };

    const goToPreviousCertificate = () => {
        if (selectedCertificateIndex > 0) {
            setTimeout(() => {
                setSelectedCertificateIndex((prevIndex) => prevIndex - 1);
            }, 100); // Adjust based on the duration of your animation
        }
    };

    const goToNextCertificate = () => {
        if (selectedCertificateIndex < totalCertificates - 1) {
            setTimeout(() => {
                setSelectedCertificateIndex((prevIndex) => prevIndex + 1);
            }, 100);
        }
    };

    const goToSlide = (index: number) => {
        setSelectedCertificateIndex(index);
    };

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 w-full h-full flex items-start justify-center bg-black bg-opacity-60 overflow-y-auto">
            <div className={`${isExiting ? 'animate-out fade-out slide-out-to-top-36 ' : ''} h-auto w-[55rem] m-4 md:place-items-center border border-lime-600 bg-neutral-900 rounded-lg cursor animate-in fade-in slide-in-from-top-36 duration-700`}>
                <div className="flex justify-end items-center text-center p-2 md:p-5 border-b-[1px] border-lime-600 inset-0">
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add('size-6', 'ease-in-out', 'duration-200', 'hover:scale-110','cursor-pointer', 'md:size-9');
                        }}
                        src={`./src/assets/icons/components/close-square.svg`}
                        onClick={handleCloseModal}
                    />
                </div>
                <div className='flex flex-row overflow-hidden m-3 md:m-5'>
                    {certificates.map((certificate, index) => (
                        <div className="w-full md:h-[40rem] inset-0 items-center transition ease-in-out duration-300 flex-shrink-0"
                        style={{
                            transform: `translateX(-${selectedCertificateIndex * 100}%)`,
                        }}
                        key={index}>
                        <img
                            className='object-cover'
                            src={`./src/assets/certificate/${certificate.type}/${certificate.src}`}
                            alt={certificate.name}
                        />
                        </div>
                    ))}
                </div>  
                <div className="relative font-poppins font-bold text-slate-200 text-center pb-5 md:pb-10 px-5">
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
                    <div className="flex space-x-3 bottom-5 justify-center mt-5 mb-3">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${selectedCertificateIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
