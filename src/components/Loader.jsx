import Load from '../assets/images/loader.svg';

const Loader = () => {
	return (
		<div className='loader'>
			<img src={Load} alt="Load" />
		</div>
	)
}

export {Loader};