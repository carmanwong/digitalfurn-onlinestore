import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  toolbar: theme.mixins.toolbar,

  singleItem: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    // textAlign: 'center',
    verticalAlign: 'middle',
    padding: '10px',
    paddingTop:'0px',
    paddingBottom:'30px',
    height:'60px',

  },
  separation: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    // textAlign: 'center',
    verticalAlign: 'middle',
    padding: '20px',
    height: '1px',
  },
  bigcontainer:{
    backgroundColor: 'white',

  },
  product: {
    color: 'grey',
    padding: '0px',
    // justifyContent: 'center',
    resizeMode: 'contain',
    top: '-50',
    left: '-70',
    borderRadius: '5px',
    verticalAlign: 'middle',
    display: 'block',
    width: '90%',
    // flex: '0.8',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: 'grey',
    marginLeft: '5%',
  },
  image: {
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    width: '100px',
    height: '100px',
    resizeMode: 'contain',
    top: '-50',
    left: '-70',
    borderRadius: '5px',
    verticalAlign: 'middle',
    display: 'block',
  },
  name: {
    width: '50%',
    padding: '0px',
    // flex: '0.8',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: '#191919',
    marginLeft: '5%',
    paddingRight: '0px',
    verticalAlign: 'middle',
  },
  quantity: {
    width: '40%',
    padding: '0px',
    // flex: '0.8',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: 'grey',
    marginLeft: '5%',
    verticalAlign: 'left',
  },
  
  price: {
    width: '30%',
    padding: '0px',
    flex: '0.8',
    display: 'flex',
    flexDirection: 'row',
    left: '20%',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: '#191919',
    marginLeft: '5%',
    verticalAlign: 'middle',
  },

  description: {
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: '#191919',
    marginLeft: '15px',
    verticalAlign: 'middle',
  },
 

  quantityinput: {

    "direction": "ltr",
    "boxSizing": "border-box",
    "margin": "0",
    "overflow": "visible",
    "display": "block",
    "fontSize": "14px",
    "border": "1px solid #f7f8fa",
    "fontFamily": "Hind,sans-serif",
    "boxShadow": "none",
    "outline": "none",
    "color": "#777",
    "fontWeight": "500",
    "transition": "all .2s linear",
    textAlign: "center",
    backgroundColor: 'light-grey',
    color: '#191919',
    borderWidth: '0px',
    // height: '50%',
    width: '40%',
  },

  select: {

    "direction": "ltr",
    "boxSizing": "border-box",
    "margin": "0",
    "overflow": "visible",
    "display": "block",
    "width": "100%",
    "background": "#f7f8fa",
    "fontSize": "14px",
    "border": "1px solid #f7f8fa",
    "padding": "11px 12px 10px 15px",
    "fontFamily": "Hind,sans-serif",
    "boxShadow": "none",
    "outline": "none",
    "color": "#777",
    "fontWeight": "300",
    "borderRadius": "6px",
    "transition": "all .2s linear",
    "height": "40px",
    "WebkitAppearance": "none",
    "paddingTop": "3px",
    "paddingBottom": "1px",
    "lineHeight": "2.9"

  },
  button: {
    margin: '0px',
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
  selectButton: {
    margin: '0px',
    background: 'transparent',
    color: '#2879fe',
    border: '2px solid #2879fe',
    width: '100% ',
    height: '40px',
    paddingLeft: '29px',
    paddingRight: '29px',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '.03em',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#191919',
      color: '#fff',
      borderColor: '#191919',

    },
  },
  tablerow: {
    boxSizing: 'border-box',
    display: 'table-row-group',
    padding: '0px',
    display: 'flex',
    flexDirection: 'row',
  },
  subtotal: {
    flexDirection: 'row',
    width: '80%',
    marginTop: '5%',
    textDecoration: 'none',
    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    lineHeight: '44px',
    fontWeight: '500',
    color: '#191919',

  },
  subtotalPrice: {
    flexDirection: 'row',
    marginTop: '5%',
    textDecoration: 'none',
    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    lineHeight: '44px',
    fontWeight: '500',
    textAlign: 'right',
  },
  grandTotalTitle: {
    flexDirection: 'row',
    width: '80%',
    marginTop: '5%',
    textDecoration: 'none',
    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    lineHeight: '44px',
    fontWeight: 'bold',
    color: '#191919',
  },
  grandTotal: {
    flexDirection: 'row',
    marginTop: '5%',
    textDecoration: 'none',
    fontFamily: 'Hind,sans-serif',
    fontSize: '19px',
    lineHeight: '44px',
    fontWeight: 'bold',
    color: '#2879fe',
    textAlign: 'right',
  },
  adddrop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    margin: '0px',
    height: '40%',

    padding: '0px',

  },
  adddropButton: {
    backgroundColor: 'white',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    styles: 'bold',
    color: '#191919',
    borderWidth: '0px',
    // height: '5%',
    width: '30px',
    borderRadius: '3px',
    margin: '0px',
    padding: '0px',

  },
  adddropInput: {
    backgroundColor: 'white',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    color: 'white',
    borderWidth: '0px',
    height: '5%',
    width: '50%',
    textAlign: 'center',

  },



  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(3),
  },
  subTitle: {
    marginTop: '5%',
    textDecoration: 'none',

    fontFamily: 'Hind,sans-serif',
    fontSize: '15px',
    lineHeight: '44px',
    fontWeight: '500',
    color: '#191919',
  },
  title: {
    textAlign: 'center',
    marginTop: '5%',
    position: 'relative',
    textDecoration: 'none',
    display: 'block',
    fontFamily: 'Hind,sans-serif',
    color: '#191919',
    fontSize: '25px',
    lineHeight: '44px',
    fontWeight: '500',
    color: '#191919',
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
  container: {
    // borderTop: 'black',
    borderTopWidth: '1px',
    // borderTopStyle: 'solid',
    marginTop: '2%',
    padding: '0px',
    color: '#000000',
    fontFamily: 'Libre Baskerville',
    fontSize: '20px',
    // marginTop: '14%',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',

  },
  leftBox: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    padding: '5px',
    width: '60%',
    padding: '5%',
    margin: '15px',
    // borderRightStyle: 'solid',
  },
  rightBox: {
width: '22%',
    marginTop: '100px',
    borderWidth: '0.5px',
    borderColor: '#ced4da',
    borderStyle: 'solid',
    margin: '15px',
    // backgroundColor: 'grey',
    justifyContent: 'center',
    // backgroundColor: 'green',
    // width: '50%',
    height: '100%',
    padding: '5%'
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
  titleProduct: {
    display: 'block',
    position: 'relative',
    fontFamily: 'Hind,sans-serif',
    color: '#191919',
    marginBottom: '0',
    fontSize: '30px',
    lineHeight: '40px',
    fontWeight: '500',
    marginTop: '19pfx',
    color: '#191919',
  },



  priceProduct: {
    display: 'block',
    position: 'relative',
    fontFamily: 'Hind,sans-serif',
    color: '#191919',
    marginBottom: '0',
    // fontSize: '30px',
    // lineHeight: '40px',
    fontWeight: '500',
    // marginTop: '19px',
    color: '#2879fe',
    textAlign: 'right',
  },
  descriptionProduct: {
    marginTop: '11 px',
    color: '#777',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: '300',
    textAlign: 'left',
  },
  addButton: {
    borderRadius: '10px',
    width: '100%',
    padding: '7px 10px',
    textAlign: 'center',
    border: 'none',
    height: '50px',
    padding: '7px 10px',
    fontSize: '14px',
    margin: '10px 0 0 0',
    backgroundColor: '#2879fe',
    color: '#fff',
    outline: 'none',
    fontFamily: 'Hind,sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: '400',
    letterSpacing: '.03em',
    display: 'block',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#2267d8',
    },
  },
}));