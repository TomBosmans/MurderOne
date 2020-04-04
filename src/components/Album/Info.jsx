import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFilledIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  cover: {
    height: theme.spacing(40),
    width: theme.spacing(40),
  },

  playButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }
}));

export default () => {
  const classes = useStyles();
  const name = 'Disguise';
  const bandName = 'Motionless in White';
  const releaseDate = '2019';
  const songCount = 11;
  const [favorite, setFavorite] = useState(false);
  const FavoriteIcon = () => favorite ? <FavoriteFilledIcon/> : <FavoriteBorderIcon/>;

  return (
    <div className={classes.root}>
      <img src='images/disguise.jpeg' className={classes.cover} alt={bandName}/>
      <Typography variant='h6'>{name}</Typography>
      <Typography variant='subtitle2'>{bandName}</Typography>
      <Button className={classes.playButton} variant="contained" color="primary">PLAY</Button>
      <div>
        <IconButton onClick={() => setFavorite(!favorite)}><FavoriteIcon/></IconButton>
        <IconButton><MoreIcon/></IconButton>
      </div>
      <Typography variant='subtitle2'>{releaseDate} . {songCount} SONGS</Typography>
    </div>
  );
}
