import { Link } from 'react-router-dom';

const bottomLinks = [
	{
		to: "/info",
		title: "Know before you go"
	},
	{
		to: "/dealers",
		title: "Nautilus Dealers"
	},
	{
		to: "/log-in",
		title: "Guest Log-in"
	},
];

const MenuBottom = ({setMenuOpen}) => {
	return(
		<ul className='menu__bottom'>
			{
				bottomLinks.map((link, index) => (
					<li key={index} className="menu__item-bottom" onClick={() => setMenuOpen(false)}>
						<Link to={link.to} className='menu__link-bottom'>{link.title}</Link>
					</li>
				))
			}
		</ul>
	)
};

export {MenuBottom};