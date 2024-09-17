type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function HamburgerMenu({ isOpen, toggleMenu }: HamburgerMenuProps){

  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center transition-all duration-100 md:hidden"
    >
      <span
        className={`bg-slate-200 block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}
      ></span>
      <span
        className={`bg-slate-200 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`bg-slate-200 block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-2' : 'translate-y-1'
                    }`}
      ></span>
    </button>
  );
}

export default HamburgerMenu;
