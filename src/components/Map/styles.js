import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	paper: {
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100px',
	},
	mapContainer: {
		height: '85vh',
		width: '100%',
		marginTop: '20px'
	},
	mobileMapContainer: {
		height: '85vh',
		width: '104%',
		marginTop: '20px'
	},
	markerContainer: {
		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
		'&:hover': { zIndex: 2 },
	},
	pointer: {
		cursor: 'pointer',
	},
}));
