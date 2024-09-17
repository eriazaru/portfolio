import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
    title: string;
    number: string;
    justify: 'start' | 'center' | 'end';
    observerRef?: React.RefObject<HTMLElement>;
    animationDirection: 'left' | 'right' | 'top';
}

function HeaderText({ title, number, justify, observerRef, animationDirection }: HeaderProps) {
    const justifyClass = {
        start: 'md:justify-start',
        center: 'md:justify-center',
        end: 'md:justify-end',
    }[justify];

    const animation = {
        left: 'animate-in fade-in slide-in-from-left-36',
        right: 'animate-in fade-in slide-in-from-right-36',
        top: 'animate-in fade-in slide-in-from-top-36',
    }[animationDirection];

    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const targetRef = observerRef?.current || headerRef.current;

        if (!targetRef) return;

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.3,
        });

        observer.observe(targetRef);

        return () => observer.disconnect();
    }, [observerRef]);

    return (
        <div
            ref={headerRef}
            className={`pt-16 pb-7 w-full inline-flex items-center justify-start ${justifyClass} space-x-4 ${isVisible ? animation : 'opacity-0'} duration-500`}
        >
            <h1 className="font-poppins text-xl md:text-2xl">
                <span className="font-mono pr-2 font-semibold">{number}</span>
                {title}
            </h1>
            <hr className="w-10 flex-grow h-[1px] mx-auto bg-gray-100 border-0 rounded md:flex-grow-0 md:w-72 md:my-10 dark:bg-gray-700" />
        </div>
    );
}

export default HeaderText;
