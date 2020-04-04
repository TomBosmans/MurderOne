import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  moreButton: {
    paddingRight: theme.spacing(10),
  },

  playButton: {
    alignSelf: 'flex-start',
    flexGrow: '0',
    paddingRight: theme.spacing(2),
  },

  duration: {
    alignSelf: 'flex-start',
    textAlign: 'right',
  }
}));

export default ({name, bandName, duration}) => {
  const classes = useStyles();
  const [focussed, setFocussed] = useState(false);
  const PlayIcon = () => focussed ? <PlayArrowIcon/> : <AudiotrackIcon/>;

  return (
    <ListItem selected={focussed} onMouseEnter={() => setFocussed(true)} onMouseLeave={() => setFocussed(false)}>
      <ListItemText className={classes.playButton}><PlayIcon/></ListItemText>
      <ListItemText primary={name} secondary={bandName}/>

      <ListItemText secondary={duration} className={classes.duration}/>
      <ListItemSecondaryAction className={classes.moreButton}>
        { focussed && <IconButton><MoreIcon/></IconButton>}
      </ListItemSecondaryAction>
    </ListItem>
  );
};
