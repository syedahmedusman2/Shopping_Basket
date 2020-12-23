import React from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {displayState} from '../controller/slicetypes'
import './../App.css';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import logo from './Home/logo.png';
import logo2 from './Home/logo2.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
      
    },
  })
);

function Navbar() {
  const classes = useStyles();
  const numberOfItems = useSelector((state: displayState)=>(state.baskets.basket.length))
  return (
    <div className="nav">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo2} className="pic"/>
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" component= {Link} to= '/cart' className="pi">
            <Badge badgeContent={numberOfItems} color="secondary" className="badge">
            <ShoppingCartIcon className="ico"/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;