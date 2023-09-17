import { navLinks } from '../../data';
import propTypes from 'prop-types';

export const NavbarMenu = ({show}) => {
  return (
    <nav className={`absolute top-12 left-0 w-full py-3 shadow-md lg:static lg:shadow-none lg:flex lg:justify-between lg:basis-full lg:text-center lg:py-0 ${show ? 'block' : 'hidden'}`}>
      <ul className='lg:flex lg:justify-center lg:w-full'>
        {navLinks.map((link) => (
          <li key={link.id}><a href={link.path} className='block text-center text-base font-semibold text-black-color py-2.5 lg:text-lg lg:px-3 hover:text-primary'>{link.text}</a></li>
        ))}
      </ul>
      <div className='text-center lg:mt-1'>
        <a href="#" className='inline-block bg-primary text-white font-quicksand font-semibold px-3 py-2 rounded lg:whitespace-nowrap hover:bg-orange-500 hover:transition-colors hover:duration-300 hover:ease-in'>Join With Us</a>
      </div>
    </nav>
  )
}

NavbarMenu.propTypes = {
  show: propTypes.bool,
}