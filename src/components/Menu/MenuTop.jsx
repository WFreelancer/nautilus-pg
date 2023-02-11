import { CustomLink } from '../Button';
import { Link } from 'react-router-dom';

const topLinks = [
	{
		to: "/",
		title: "Book Now"
	},
	{
		to: "/Availability",
		title: "Availability"
	},
	{
		title: "Destinations",
		submenu: [
			{
				to: "#",
				title: "Ships Built For Safety",
			},
			{
				to: "#",
				title: "Ships Built For Safety",
			},
			{
				to: "#",
				title: "Ships Built For Safety",
			},
		]
	},
	{
		to: "/Guest Reviews",
		title: "Guest Reviews",
		star: true
	},
	{
		title: "About Us",
		submenu: [
			{
				to: "#",
				title: "Ships Built For Safety",
			},
			{
				to: "#",
				title: "Ships Built For Safety",
			},
			{
				to: "#",
				title: "Ships Built For Safety",
			},
		]
	},
];



const MenuTop = ({setMenuOpen}) => {
	return(
		<ul className="menu__top">
			{
				topLinks.map((link, index) => (
					!link.submenu ?
						<li className="menu__item-top" key={index} onClick={() => setMenuOpen(false)}>
							<CustomLink to={link.to} star={link.star}>{link.title}</CustomLink>
						</li>
					:
					<li className="menu__item-top" key={index}>
						<CustomLink button>{link.title}</CustomLink>
						<ul className="sub-menu__list">
							{
								link.submenu.map((sublink, index) => (
									<li key={index}>
										<Link to={sublink.to} className="sub-menu__link">{sublink.title}</Link>
									</li>
								))
							}
						</ul>
					</li>
				))
			}
		</ul>
	)
};

export {MenuTop};