import React from 'react';
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Chip,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';
import { LocationOn } from '@material-ui/icons';
import PhoneIcon from '@material-ui/icons/Phone';

function PlaceDetails({ place, selected, refProp }) {
	const classes = useStyles();
	if (selected)
		refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

	// console.log(place);
	return (
		<Card elevation={6} className={classes.root}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{place.name}
				</Typography>
				<Box display="flex" justifyContent="space-between">
					<Rating value={Number(place.rating)} precision={0.5} readOnly />
					<Typography variant="subtitle1" gutterBottom>
						out of {place.num_reviews} reviews
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">{place.distance_string ? 'Distance' :'Class' }</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{place.distance_string ? place.distance_string : place.hotel_class}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1" className={classes.mRight}>Ranking</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award) => (
					<Box
						my={1}
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						{/* <img src='https://image.flaticon.com/icons/png/512/30/30665.png' alt={award.display_name} style={{height:'20px', width:'20px', color : '#C7C7C7'}}/> */}
						<i class="fas fa-medal" style={{ color : '#C7C7C7' }}/>
						<Typography variant="subtitle2" color="textSecondary">
							{award.display_name}
						</Typography>
					</Box>
				))}
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className={classes.subtitle}
					>
						<LocationOn className={classes.mRight}/> {place.address}
					</Typography>
				)}
				{place?.phone && (
					<div className={classes.spacing}>
						<Typography
							gutterBottom
							variant="subtitle2"
							color="textSecondary"
						>
							<PhoneIcon className={classes.mRight}/> {place.phone}
						</Typography>
					</div>
				)}
			</CardContent>
			<CardActions>
				<Button
					size="small"
					color="warning"
					onClick={() => window.open(place.web_url, '_blank')}
					variant="outlined"
					
				>
					Travelogue
				</Button>
				<Button
					size="small"
					color="secondary"
					onClick={() => window.open(place.website, '_blank')}
					variant="contained"
				>
					Website
				</Button>
			</CardActions>
		</Card>
	);
}

export default PlaceDetails;
