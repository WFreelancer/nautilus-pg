import { NavLink } from 'react-router-dom'
import { IoIosArrowDown, IoIosStar } from "react-icons/io";
import {mouseEnterAnim, mouseLeaveAnim} from './LinkAnimation'
import {isMobile} from '../../assets/js/checkMobile'

const activeLink = ({ isActive }) => isActive ? 'custom-link is-active' : 'custom-link';

const CustomLink = ({children, to, button = false, star, arrow, toggleMenu = Function.prototype }) => {
	const openDropDown = (e) => {
		const target = e.target;

		if(isMobile.any()){
			const subMenu = target.nextElementSibling;

			target.classList.toggle('active');
			subMenu.classList.toggle('open');
		}
	}

	return(
		<>
			{!button ?
				<NavLink
					onClick={() => toggleMenu()}
					onMouseEnter={(event) => mouseEnterAnim(event)}
					onMouseLeave={(event) => mouseLeaveAnim(event)}
					to={to}
					className={activeLink}
				>
					{star && <IoIosStar className='link-star'/>}
					<span>{children}</span>
					<div className='link-hover-fill' data-hover-fill></div>
				</NavLink>
				:
				<button
					type='button'
					className='custom-link'
					onClick={(e) => openDropDown(e)}
					onMouseEnter={(event) => mouseEnterAnim(event)}
					onMouseLeave={(event) => mouseLeaveAnim(event)}
				>
					{star && <IoIosStar className='link-star'/>}
					<span>{children}</span>
					<IoIosArrowDown className='link-arrow'/>
					<div className='link-hover-fill' data-hover-fill></div>
				</button>
			}
		</>
	)
}

export {CustomLink}
