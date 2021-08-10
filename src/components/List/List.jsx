import React, { createRef, useEffect, useState } from 'react';
import {
	CircularProgress,
	Typography,
	Grid,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from '@material-ui/core';

import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

function List({
	places,
	childClicked,
	isLoading,
	type,
	setType,
	rating,
	setRating,
}) {
	const classes = useStyles();
	const [elRefs, setElRefs] = useState([]);


	useEffect(() => {
		setElRefs((refs) =>
			Array(places?.length)
				.fill()
				.map((_, i) => refs[i] || createRef())
		);
		console.log({ childClicked });
	}, [places, childClicked]);

	return (
		<div className={classes.container}>
			<Typography variant="h4" className={classes.desc}>
				{type === 'restaurants' ? 'Find Food & Dining around you ' : (type === 'hotels' ?  'Find Hotels around you' : 'Find Attractions around you')}
			</Typography>
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress size="5rem" />
				</div>
			) : (
				<>
					<FormControl className={classes.formControl}>
						<InputLabel>Type</InputLabel>
						<Select value={type} onChange={(e) => setType(e.target.value)}>
							<MenuItem value="restaurants">Restaurants</MenuItem>
							<MenuItem value="hotels">Hotels</MenuItem>
							<MenuItem value="attractions">Attractions</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel>Rating</InputLabel>
						<Select value={rating} onChange={(e) => setRating(e.target.value)}>
							<MenuItem value={0}>All</MenuItem>
							<MenuItem value={3}>Above 3.0</MenuItem>
							<MenuItem value={4}>Above 4.0</MenuItem>
							<MenuItem value={4.5}>Above 4.5</MenuItem>
						</Select>
					</FormControl>
					<Grid container className={classes.list} spacing={3}>
						{places?.map((place, i) => (
							<Grid item key={i} xs={12} ref={elRefs[i]}>
								<PlaceDetails
									place={place}
									refProp={elRefs[i]}
									selected={Number(childClicked) === i}
								/>
							</Grid>
						))}
					</Grid>
				</>
			)}
		</div>
	);
}

export default List;
