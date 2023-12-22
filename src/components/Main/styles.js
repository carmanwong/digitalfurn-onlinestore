import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  bannergroup1: {
    display: 'flex',
    paddingBottom: '5px',
  },
  banner1: {
    paddingRight: '1px',
    width: '49.7%',
  },
  banner2: {
    paddingLeft: '1px',
    width: '49.7%',
  },
  title: {
    marginTop: '5%',
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
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));