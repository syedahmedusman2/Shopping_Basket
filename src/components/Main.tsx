import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';

// Importing Pages from Components Folder
import Home from './Home/Home'
import Checkout from './Checkout/Checkout';
import Info from './Info/Info'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    backgroundColor: '#efefef',
    margin: "0 auto",
  },
});

const Main = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  


  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>

    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
  
    

    
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        component={Link}
        to="/"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/cart"
        label="Cart"
        value="Cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/info"
        label="Info"
        value="Info"
        icon={<InfoIcon />}
      />
    </BottomNavigation>

    </Router>
    </>
    
  );
};

export default Main;