import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {loadFilters} from '../../config';


const Filter = ({handleFilter}) => {
	const [destinations, setDestinations] = useState([]);
	const [years, setYears] = useState([]);
	const [searchForm, setSearchForm] = useState({
		destination: '',
		year: '',
	});

	const handleForm = (event) => {
        setSearchForm({...searchForm, [event.target.name]: event.target.value});
	};

	useEffect(() => {
		if(destinations.length === 0){
			loadFilters()
			.then(data => setDestinations(data.destinations))
		}
		if(years.length === 0){
			loadFilters()
			.then(data => setYears(data.yearList))
		}

		handleFilter(searchForm.destination, searchForm.year);
		// eslint-disable-next-line
	}, [searchForm.destination, searchForm.year]);


	return(
		<div className="filter">
			<div className="filter__header">
				<h3>Find the perfect Adventure!</h3>
			</div>
			<div className="filter__body">
				<FormControl sx={{marginBottom: 3}} fullWidth >
					<InputLabel>Destination</InputLabel>
					<Select
						value={searchForm.destination}
						label="destination"
						name="destination"
						onChange={handleForm}
					>
						<MenuItem value="all">
							<em>Choose an option</em>
						</MenuItem>
						{destinations.map(destination => <MenuItem key={destination.id} value={destination.id}>{destination.value}</MenuItem>)}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel>Year</InputLabel>
					<Select
						value={searchForm.year}
						label="year"
						name="year"
						onChange={handleForm}
					>
						<MenuItem value="all">
							<em>All Years</em>
						</MenuItem>
						{years.map(year => <MenuItem key={year.value} value={year.value}>{year.value}</MenuItem>)}
					</Select>
				</FormControl>
			</div>
		</div>
	)
}

export {Filter}