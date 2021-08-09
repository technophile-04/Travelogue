import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Box, InputBase, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import useStyles from './styles';

function Header({ setCoordinates }) {
	const classes = useStyles();
	const [autoComplete, setAutoComplete] = useState(null);
	const onLoad = (autoC) => setAutoComplete(autoC);
	const onPlaceChanged = () => {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();
		setCoordinates({ lat, lng });
	};
	const isDesktop = useMediaQuery('(min-width: 600px)');
	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" className={classes.title}>
					Travelogue
				</Typography>
				<Box display="flex">
					<Typography variant="h6" className={classes.title}>
						Explore new places
					</Typography>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchOutlined />
							</div>
							<InputBase
								placeholder={!isDesktop ?'Travelogue...' : 'Search..'}
								classes={{ root: classes.inputRoot, input: classes.inputInput }}
							/>
						</div>
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
