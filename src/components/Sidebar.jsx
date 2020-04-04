import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
  }
}));

export default () => {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className={classes.root}>
      <List>
        <ListItem button selected={activeItem === 'home'} onClick={() => setActiveItem('home')}>
          <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
          <ListItemText primary='Home'/>
        </ListItem>

        <ListItem button selected={activeItem === 'search'} onClick={() => setActiveItem('search')}>
          <ListItemIcon><SearchOutlinedIcon/></ListItemIcon>
          <ListItemText primary='Search'/>
        </ListItem>

        <ListItem button selected={activeItem === 'library'} onClick={() => setActiveItem('library')}>
          <ListItemIcon><LibraryMusicOutlinedIcon/></ListItemIcon>
          <ListItemText primary='Library'/>
        </ListItem>
      </List>
    </nav>
  );
}
