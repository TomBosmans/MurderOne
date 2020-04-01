import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Player from './Player';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    gridTemplateAreas: `
       'sidebar main   main   main   main   main'
       'player  player player player player player'
    `,    
  },

  main: {
    gridArea: 'main',
    height: '90vh',
  },

  sidebar: {
    gridArea: 'sidebar',
  },

  player: {
    gridArea: 'player',
    height: '10vh',
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square className={classes.main} elevation={0}>
      </Paper>

      <Paper square className={classes.sidebar} elevation={1}>
      </Paper>

      <Paper square className={classes.player} elevation={2}>
        <Player
          song='songs/code.mp3'
          songName='<c0de>'
          bandName='Motionless in White'
          albumName='Disguise'
          albumCover='images/disguise.jpeg'
         />
      </Paper>
    </div>
  );
}
