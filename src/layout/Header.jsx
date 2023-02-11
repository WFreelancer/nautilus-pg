import { Link } from 'react-router-dom'

import {Burger} from '../components/Button'
import { IoIosClose } from "react-icons/io";
import { MenuBottom } from '../components/Menu/MenuBottom';
import { MenuTop } from '../components/Menu/MenuTop';





const Header = ({menuOpen, toggleMenu = Function.prototype, setMenuOpen}) => {
	return(
		<header className='header'>
			<div className="header__container container">
				<Link to="/" className="header__logo">
					<img src="https://nautilusliveaboards.com/wp-content/uploads/2020/03/logo-white-500x203-web.png" alt="logo" />
				</Link>
				<nav className={`header__menu menu ${menuOpen ? 'open' : ''}`}>
					<div className="menu__body">
						<div className='menu__header'>
							<span onClick={toggleMenu}>Close Menu <IoIosClose/></span>
						</div>
						<MenuTop setMenuOpen={setMenuOpen}/>
						<MenuBottom setMenuOpen={setMenuOpen}/>
					</div>
					<div className='rounded-menu'>
						<div className={`rounded-menu__body ${menuOpen ? 'active' : ''}`}>
							<div className="rounded-menu__child"></div>
						</div>
					</div>
				</nav>
				<Burger menuOpen={menuOpen} toggleMenu={toggleMenu}/>
			</div>
		</header>
	)
};

export {Header};