import axios from 'axios';

const API_URL = `https://nautilus-pg.herokuapp.com/api`;

const getPost = async () => {
	const {data} = await axios.get(API_URL + `/products`);
	return data;
}

const loadFilters = async () => {
	const {data} = await axios.get(API_URL + `/filters`);
	return data;
}

export {
	loadFilters,
	getPost
}



