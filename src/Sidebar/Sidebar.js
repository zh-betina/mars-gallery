import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Calendar from 'react-calendar';
import HomeIcon from '@material-ui/icons/Home';
import 'react-calendar/dist/Calendar.css';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: '#000',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 40
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#000'
  }
}));

const Sidebar = ({ setUrlToFetch }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [calendarOn, setCalendarOn] = useState(false);
  const [calendarVal, setCalendarValue] = useState(new Date());
  //  const currentlocation = useLocation();
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCalendarOn(false);
  };

  const toggleCalendarOn = () => {
    if (calendarOn === true) {
      setCalendarOn(false);
    } else {
      setOpen(true);
      setCalendarOn(true);
    }
  };

  const handleDateChoice = (e) => {
    setCalendarValue(new Date(e));
    handleNewDate(e);
  };

  const handleNewDate = (e) => {
    const objDate = { day: e.getDate(), month: e.getMonth() + 1, year: e.getFullYear() };
    setUrlToFetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${objDate.year}-${objDate.month}-${objDate.day}&api_key=${process.env.REACT_APP_API_KEY}`);
    history.push('/');
  };

  return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                          [classes.hide]: open
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Nasa Mars Gallery
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })}
                classes={{
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                  })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem onClick={toggleCalendarOn} button key="Display by date">
                        <ListItemIcon><EventIcon /></ListItemIcon>
                        <ListItemText primary="Display by date" />
                    </ListItem>
                    {
                        calendarOn
                          ? <React.Fragment>
                                <Divider />
                                <Calendar value={calendarVal} onChange={(e) => handleDateChoice(e)}
                                /></React.Fragment>
                          : null
                    }
                    <Divider />
                    <Link to="/">
                        <ListItem button key="Home">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItem>
                    </Link>
                    <Link to="/gallery">
                        <ListItem button key="Gallery">
                            <ListItemIcon><PhotoSizeSelectActualIcon /></ListItemIcon>
                            <ListItemText primary="Gallery" />
                        </ListItem>
                    </Link>
                    <ListItem button key="Favorites">
                        <ListItemIcon><FavoriteIcon /></ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </div>
  );
};

export default Sidebar;
