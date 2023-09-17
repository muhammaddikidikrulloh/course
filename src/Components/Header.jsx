import { useState, useEffect } from "react"
import { Button } from "./elements/Button"
import { NavbarMenu } from "./elements/Navbar"
import Aos from "aos"
import 'aos/dist/aos.css'

export const Header = () => {

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  }

  useEffect(() => {
    Aos.init();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('header').classList.add('scroll-header');
      setIsShow(false);
      document.querySelector('nav').style.backgroundColor = 'white'
    } else {
      document.querySelector('header').classList.remove('scroll-header');
      setIsShow(false);
      document.querySelector('nav').style.backgroundColor = 'transparent';
    }
  }



  return (
    <header data-aos="fade-down" className="fixed top-0 left-0 w-full py-3 z-50">
      <div className="container flex justify-between items-center lg:max-w-5xl px-3 mx-auto">
        <a href="#" className="text-xl font-bold text-black-color font-quicksand uppercase tracking-[1px] lg:text-2xl">codewithdiki</a>
        <Button className={'lg:hidden'} onClick={handleClick}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </Button>
        <NavbarMenu show={isShow} />
      </div>
    </header>
  )
}