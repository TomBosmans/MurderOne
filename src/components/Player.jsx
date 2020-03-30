import React, { Fragment, useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', marginBottom: 'auto' },
  details: { display: 'flex', flexDirection: 'column' },
  content: { flex: '1 0 auto' },
  cover: { width: 151 },
  playIcon: { height: 38, width: 38 },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default ({albumName, albumCover, bandName, songName, song}) => {
  const classes = useStyles();
  const player = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    player.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    player.current.pause();
  };

  const PlayButton = () => {
    if (!isPlaying) {
      return (
	<IconButton onClick={play} aria-label="play">
	  <PlayArrowIcon className={classes.playIcon}/>
	</IconButton>
      );
    } else {
      return (
	<IconButton onClick={pause} aria-label="pause">
	  <PauseIcon className={classes.playIcon}/>
	</IconButton>	
      );
    }
  };
  
  return (
    <Fragment>
      <audio ref={player} src={song}/>

      <Card className={classes.root}>
	<CardMedia className={classes.cover} image={albumCover}/>

	<div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">{songName}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{bandName}</Typography>
          </CardContent>

          <div className={classes.controls}>
            <IconButton aria-label="previous"><SkipPreviousIcon/></IconButton>
	    <PlayButton/>
            <IconButton aria-label="next"><SkipNextIcon/></IconButton>
          </div>
	</div>
      </Card>
    </Fragment>
  );
}
