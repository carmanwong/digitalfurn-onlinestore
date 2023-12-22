import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    position: 'absolute',
    textDecoration: 'none',
    color: '#000000',
    padding: '5px',
    fontFamily: 'Hind,sans-serif',
    fontSize: '25px',

  },
  desciption: {
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: '300',
    color: '#777',

  },
  bigcontainer:{
    backgroundColor: 'white',

  },

  container: {
    marginTop: '10px',
    color: '#000000',
    fontFamily: 'Hind,sans-serif',
    fontSize: '20px',
    marginTop: '14%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  leftBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: '5px',
    width: '50%',
    padding: '5%',
    borderColor: 'grey',
    borderWidth: '1px',
    borderStyle: 'solid',
    margin: '1%',

  },
  rightBox: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '5px',
    width: '50%',
    margin: '1%',
    padding: '5%',
    borderColor: 'grey',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  button: {
    margin: '5px',
    background: 'transparent',
    color: '#2879fe',
    border: '2px solid #2879fe',
    height: '40px',
    paddingLeft:'29px',
    paddingRight:'29px',
    fontSize:'14px',
    fontWeight:'400',
    letterSpacing:'.03em',
    borderRadius:'6px',
    '&:hover': {
      backgroundColor: '#191919',
      color:'#fff',
      borderColor:'#191919',

    },
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
 
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));