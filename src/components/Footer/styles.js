import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        height: '30px',
        position: 'absolute',
        bottom: '0px',
        left : '0px',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '100%',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },
    link : {
        display: 'inline-block',
        marginTop : '0.2px',
        textDecoration : "none",
        color: 'rgba(255, 255, 255, 0.8)',
    },

    logo : {
        marginRight : '5px'
    },

    copyRightContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    }

}));
