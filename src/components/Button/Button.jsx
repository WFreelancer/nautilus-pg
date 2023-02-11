import {mouseEnterAnim, mouseLeaveAnim} from './LinkAnimation'

const Button = ({children}) => {
	return (
		<button
			className="button"
			onMouseEnter={(event) => mouseEnterAnim(event)}
			onMouseLeave={(event) => mouseLeaveAnim(event)}
		>
			<span className="button__child">
				{children}
			</span>
			<div className='link-hover-fill' data-hover-fill></div>
		</button>
	)
};

export {Button};