import { useEffect, useState } from 'react';

import { Bolt, Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

import { Container } from './container';
import { HeaderNavLinks } from './header-nav-links';
import { LanguageSelector } from './language-selector';
import { ToggleThemeBtn } from './toggle-theme-btn';
import { useTranslation } from 'react-i18next';


export const Header = () => {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(false);
  
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      } else {
        setIsLgScreen(false);
      }
    };
  
    useEffect(() => {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);
  

  return (
    <header className='fixed w-full h-20 flex items-center bg-gray-100 dark:bg-gray-800 opacity-85 backdrop-blur-xl shadow-md'>
        <Container>
                <nav className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Vinicius</h1>
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition" aria-label={t('header.iconMenuAria')}>
                                <Menu className='cursor-pointer'/>
                            </SheetTrigger>
                            <SheetContent side="right" className="lg:hidden flex gap-24 bg-gray-100 dark:bg-gray-800 transition-transform duration-500 ease-out transform">
                                <SheetHeader className="hidden">
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription></SheetDescription>
                                </SheetHeader>
                                <div className='flex justify-center items-center gap-4 my-10'>    
                                    <LanguageSelector />
                                    <ToggleThemeBtn />
                                </div>
                                <HeaderNavLinks />
                            </SheetContent>
                        </Sheet> 
                    </div>
                    <div className='hidden lg:flex'>
                        <HeaderNavLinks />
                    </div>
                    <div className='hidden lg:flex xl:hidden'>
                        <DropdownMenu>
                            <DropdownMenuTrigger aria-label={t('header.iconConfigAria')}>
                                <Bolt className='cursor-pointer'/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='flex items-center flex-col gap-2 py-4'>
                                <DropdownMenuItem>
                                    <LanguageSelector />
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <ToggleThemeBtn />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='hidden xl:flex gap-10 items-center'>
                        <LanguageSelector />
                        <ToggleThemeBtn />
                    </div>
                </nav>
        </Container>
    </header>
  )
}
