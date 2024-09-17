import { ReactSVG } from 'react-svg';
import { Certificate } from '../models/Content';
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

    const certificate = groupedCertificates[selectedGroup][selectedCertificateIndex];
    const totalCertificates = groupedCertificates[selectedGroup].length;

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
            }, 200); // Adjust based on the duration of your animation
        }
    };

    const goToNextCertificate = () => {
        if (selectedCertificateIndex < totalCertificates - 1) {
            setTimeout(() => {
                setSelectedCertificateIndex((prevIndex) => prevIndex + 1);
            }, 300);
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto">
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
                <div className="flex justify-center items-center m-3 md:m-5 overflow-clip">
                    <img
                        className='w-auto md:h-[40rem]'
                        src={`./src/assets/certificate/${certificate.type}/${certificate.src}`}
                        alt={certificate.name}
                    />
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
                            <p className='text-sm md:text-2xl content-center items-center duration-500'>{certificate.name}</p>
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
                    <div className="text-xs md:text-sm lg:text-base text-slate-400 mt-2">
                        {selectedCertificateIndex + 1} of {totalCertificates}
                    </div>
                </div>
            </div>
        </div>
    );
}
