const Overlay = ({active, toggle = Function.prototype}) => {
	return <div className={`overlay ${active ? 'active' : ''}`} onClick={toggle}/>
}

export {Overlay};