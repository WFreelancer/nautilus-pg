import {useState, useEffect} from 'react';

import {Card} from '../components/Card';
import {Filter} from '../components/Filter';
import {Loader} from '../components/Loader';
import {getPost} from '../config'

const Home = ({posts, postsFilter, setPosts, setPostsFilter}) => {
	const [loading,  setLoading] = useState(false);
	

	useEffect(() => {
		if(!posts.length){
			setLoading(true);
			getPost()
			.then(data => {
				setPosts(data);
				setPostsFilter(data);
			})
			.finally(() => {
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			})
		}
		// eslint-disable-next-line
	}, []);


	const handleFilter = (destination, year) => {
		let data = [...posts];

		if(destination && destination !== 'all') {
			data = data.filter(post => post.id.toLowerCase().includes(destination.toLowerCase()))
		}else{
			setPostsFilter(data);
		}

		if(year && year !== 'all'){
			data = data.filter(post => post.year.toLowerCase().includes(year.toLowerCase()))
		}else{
			setPostsFilter(data);
		}

		setPostsFilter(data);
	};

	return(
		<div className='content'>
			<div className='product'>
				{loading ? <Loader/> :
					postsFilter.map((post, index) => {
						return (
							<Card {...post} key={index}/>
						)
					})
				}
			</div>
			<aside className='aside'>
				<Filter handleFilter={handleFilter}/>
			</aside>
		</div>
	)
}

export {Home}