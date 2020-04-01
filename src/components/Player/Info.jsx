
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
      'cover cover .'
      'cover cover song-name'
      'cover cover band-name'
      'cover cover .'
    `
  },

  albumCover: {
    gridArea: 'cover',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  bandName: {
    gridArea: 'band-name',
    paddingLeft: '10px',
  },

  songName: {
    gridArea: 'song-name',
    paddingLeft: '10px',
  }
}));

export default ({ albumCover, albumName, songName, bandName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant='rounded' src={albumCover} className={classes.albumCover}>
        {albumName[0]}
      </Avatar>

      <Typography variant='subtitle1' className={classes.songName}>{songName}</Typography>
      <Typography variant='subtitle2' className={classes.bandName}>{bandName}</Typography>
    </div>
  );
}
