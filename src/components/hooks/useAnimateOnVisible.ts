import { useEffect, useRef, useState } from 'react';

export function useAnimateOnVisible<T>(items: T[], delay: number = 200, threshold: number = 0.1) {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: threshold } // Adjust the threshold as needed
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    useEffect(() => {
        if (isVisible && items.length) {
            items.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                }, index * delay);
            });
        }
    }, [isVisible, items, delay]);

    return { sectionRef, visibleItems };
}
