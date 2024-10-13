import { useCallback, useEffect, useState } from 'react';
import { NavigationScroll } from '../../hooks/navigationEffects';
import { useData } from '../../hooks/context/DataContextProvider';
import { Link } from '../../models/Content';
import HamburgerMenu from '../../custom/component/HamburgerMenu';

function NavigationBar() {
  const { data, loading, error } = useData();
  const { visible, atTop } = NavigationScroll();
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLinkClick = useCallback((id: string) => {
    setActiveLink(id);
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <nav className={`fixed w-full ${menuOpen ? 'h-full right-0' : ''} bg-sky-950/[.95] backdrop-filter backdrop-blur flex items-center justify-end px-5 ${atTop ? 'h-20' : 'h-16  shadow-xl'} ${visible ? 'top-0' : '-top-20'} transition-all ease-in-out duration-300 delay-100 sm:overflow-y-auto z-50`}>
      <ol className={`${menuOpen ? 'grid grid-cols-1 gap-10' : 'hidden'} font-mono font-base text-sm text-neutral-500 flex-col  m-5 lg:flex lg:flex-row md:gap-x-10 animate-in fade-in slide-in-from-top-9 duration-500`}>
        {data?.links.map(({ label, href, id }: Link) => (
          <li key={id} className='justify-self-end'>
            <a
              href={href}
              className={`ease-in-out duration-200 hover:text-lime-500 ${activeLink === id ? 'text-lime-500' : 'text-neutral-300'}`}
              onClick={() => handleLinkClick(id)}
            >
              {label}
            </a>
          </li>
        ))}
        <div className="ease-in-out duration-200 text-lime-500 justify-self-end hover:scale-110">
          <a className='border-2 rounded-lg border-lime-500 py-2 px-4' href="https://drive.google.com/file/d/1jqYY_Nw7SZU2Za_75FRJ-vulSE4gzrGR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </ol>
      <div className={`transition-all ease-in-out duration-200 absolute ${atTop ? 'top-8 right-5': 'top-6 right-5'}`}>
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu}/>
      </div>
    </nav>
  );
}

export default NavigationBar;
