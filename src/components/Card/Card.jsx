import { Link } from 'react-router-dom'
import {Button} from '../Button'
import { IoCalendarOutline } from "react-icons/io5";
import { MdAnchor, MdDirectionsBoatFilled } from "react-icons/md";


const Card = (props) => {
	const {id, img, info, price, title, data, label, spaces} = props;

	return(
		<div className="card" id={id}>
			<Link to="#" className="card__link"></Link>
			<div className="card__header">
				<h4 className="card__title">{title}</h4>
				<span className="card__sub-title">{label}</span>
			</div>
			<figure className="card__figure">
				{spaces !== '' && <span className='card__spaces'>{spaces} Spaces left</span>}
				<img src={img} alt={info}/>
			</figure>
			<div className="card__body">
				<span className="card__info"><IoCalendarOutline/>{data}</span>
				<span className="card__info"><MdDirectionsBoatFilled/>{info}</span>
				<span className="card__info"><MdAnchor/>{title}</span>
			</div>
			<div className="card__footer">
				<div className="card__price">
					<sup>From:</sup>
					<span>{price}</span>
				</div>
				<div className="card__action">
					<Button>RESERVE NOW</Button>
				</div>
			</div>
		</div>
	)
}

export {Card}