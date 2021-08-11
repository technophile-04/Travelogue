import { Header, List, Map } from './components';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { getPlacesData, getWeatherData } from './api/index';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
	const [weatherData, setWeatherData] = useState([]);
	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});
	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [type, setType] = useState('restaurants');
	const [rating, setRating] = useState('');

	const darkTheme = createTheme({
		palette: {
			type : 'dark',
			primary: {
				main : '#892CDC'
			},
		 },
	})

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating > rating);
		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	useEffect(() => {
		if (bounds.sw && bounds.ne) {
			setIsLoading(true);
			getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
				setWeatherData(data)
			);
			getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				setIsLoading(false);
			});
		}
	}, [bounds, type]);

	return (
		<ThemeProvider theme={darkTheme}>
			<div style={{position: 'relative', minHeight : '100%'}}>
				<CssBaseline />
				<Header setCoordinates={setCoordinates} />
				<Grid container spacing={3} style={{ width: '100%' }}>
					<Grid item xs={12} md={4}>
						<List
							places={filteredPlaces.length ? filteredPlaces : places}
							childClicked={childClicked}
							isLoading={isLoading}
							type={type}
							setType={setType}
							rating={rating}
							setRating={setRating}
						/>
					</Grid>
					<Grid item xs={12} md={8}>
						<Map
							setCoordinates={setCoordinates}
							setBounds={setBounds}
							coordinates={coordinates}
							places={filteredPlaces.length ? filteredPlaces : places}
							setChildClicked={setChildClicked}
							weatherData={weatherData}
						/>
					</Grid>
				</Grid>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
