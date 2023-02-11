import { Outlet } from 'react-router-dom'
import { useState } from 'react';

import {Header} from './Header'
import {Footer} from './Footer'
import { Overlay } from '../components/Overlay';

const Layout = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<div className={`wrapper ${menuOpen ? 'lock' : ''}`}>
			<Overlay active={menuOpen} toggle={toggleMenu}/>
			<Header toggleMenu={toggleMenu} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
			<main className='main'>
				<div className="main__container container">
					<Outlet />
				</div>
			</main>
			<Footer/>
		</div>
	)
}

export { Layout }