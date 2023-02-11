const Burger = ({menuOpen, toggleMenu = Function.prototype}) => {
	return (
		<div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => toggleMenu()}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export {Burger}