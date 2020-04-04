import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Player from './Player';
import Album from './Album';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateAreas: `
       'sidebar main   main   main   main   main   main   main   main'
       'player  player player player player player player player player'
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
      <Paper square className={classes.sidebar} elevation={0}>
        <Sidebar/>
      </Paper>

      <Paper square className={classes.main} elevation={1}>
        <Album/>
      </Paper>

      <Paper square className={classes.player} elevation={2}>
        <Player/>
      </Paper>
    </div>
  );
}
