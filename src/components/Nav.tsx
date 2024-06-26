import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import '../index.css'

const Nav: React.FC = ()=>{
    return(
        <div className='container-fluid sticky-top'>
          <nav className='navbar navbar-expand-md navbarColor  navbar-static-top '>
            <Link className='navbar-brand link' to = '/'>Find My Subscriptions</Link>
            <AiOutlineMenu
              type='button'
              className='navbar-toggler'
              data-bs-toggle = 'collapse'
              data-bs-target = '#toggleMobileMenu'
              aria-controls = 'toggleMobileMenu'
              aria-expanded='false'
              aria-label = 'Toggle navigation'
              size={'50px'}
            />
            <div 
            className='collapse navbar-collapse' 
            id = 'toggleMobileMenu'
            >
              <ul className = 'nav navbar-nav ms-auto text-center '>
                <li>
                  <Link className='nav-link' to = '/'>Search</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/'>Movie List</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/subscriptions'>Subscriptions</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/account'>Account</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/logout'>Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
}


export default Nav