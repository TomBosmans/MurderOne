import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Info from './Info';
import TrackList from './TrackList';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateAreas: `
       'navbar navbar     navbar     navbar     navbar    '
       'info   track-list track-list track-list track-list'
    `,
  },

  navbar: {
    gridArea: 'navbar',
    height: theme.spacing(10),
  },

  info: {
    gridArea: 'info',
  },

  trackList: {
    gridArea: 'track-list',
    overflow: 'auto',
    scrollbarColor: `${theme.palette.action.focus} transparent`,
  }
  }));

export default () => {
  const classes = useStyles();
  const color = '#4a148c';
  const gradient = `linear-gradient(to top, rgba(0, 0, 0, 0), ${color} 250%)`;

  return (
    <div className={classes.root} style={{background: gradient}}>
      <div className={classes.navbar}>
        <Navbar className={classes.navbar}/>
      </div>

      <div className={classes.info}>
        <Info className={classes.info}/>
      </div>

      <div className={classes.trackList}>
        <TrackList className={classes.trackList}/>
      </div>
    </div>
  );
}
