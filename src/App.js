import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About'; 
import List from './components/List';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function HomeIcon (props){
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h2L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const classes = useStyles();
  return (
    
    <Router>
      <div className={classes.root + "App"}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>Menu</Button>
            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}><Link className="link" to={'/'}><HomeIcon className={classes.icon}/></Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className="link" to={'/list'}>List of our Beers</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link className="link" to={'/about'}>About Us</Link></MenuItem>
            </Menu>
            <Typography variant="h6" color="inherit">Welcome Beers</Typography>  
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
