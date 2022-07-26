import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'

const Nav: React.FC = ()=>{
    return(
        <div className='container-fluid sticky-top'>
          <nav className='navbar navbar-expand-md bg-light navbar-light navbar-static-top '>
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
                  <Link className='nav-link' to = '/'>Home</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/'>Search</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/'>Account</Link>
                </li>
                <li>
                  <Link className='nav-link' to = '/'>Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
}


export default Nav