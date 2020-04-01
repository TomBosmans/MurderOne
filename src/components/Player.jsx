import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Info from './Player/Info';
import Control from './Player/Control';
import ExtraControl from './Player/ExtraControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },

  info: {
    alignSelf: 'center',
  },

  control: {
    alignSelf: 'center',
  },

  extraControl: {
    alignSelf: 'center',
  }
}));

export default ({albumName, albumCover, bandName, songName, song}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Info albumCover={albumCover} albumName={albumName} songName={songName} bandName={bandName}/>
      </div>

      <div className={classes.control}>
        <Control song={song}/>
      </div>

      <div className={classes.extraControl}>
        <ExtraControl/>
      </div>
    </div>
  );
}
