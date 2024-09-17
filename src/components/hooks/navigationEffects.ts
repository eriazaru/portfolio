import { useState, useEffect } from "react";

export function NavigationScroll(){
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);

    const handleScroll = () => {
    const currScrollPosition = window.scrollY;
    
    setVisible(currScrollPosition < prevScrollPosition || currScrollPosition === 0);
    setAtTop(currScrollPosition === 0);
    setPrevScrollPosition(currScrollPosition)
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  });

  return { visible, atTop }
}
