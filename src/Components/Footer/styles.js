import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#222831',
        fontFamily: '"Segoe UI"',
        marginTop: '50px',
        paddingTop: '25px',
    },
    footer__copyRight:{
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        margin: '10px'
    },
    icon: {
        color: 'white',
        fontSize: '40px',
        marginLeft: '15px',
        padding: '6px',
        borderRadius: '50%',
        backgroundColor: '#222831',
        "&:hover": {
            color: '#111010',
            backgroundColor: 'white',
            transform: 'translateY(-2px)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
    },
}));