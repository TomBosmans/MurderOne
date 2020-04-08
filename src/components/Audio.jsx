import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime, setDuration, selectPlayer } from '../state/player';

export default () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const playerState = useSelector(state => selectPlayer(state));
  const { source, volume, isPlaying, isMuted, skipTime } = playerState;
  const onDurationChange = () => dispatch(setDuration(audioRef.current.duration));
  const onTimeUpdate = () => dispatch(setCurrentTime(audioRef.current.currentTime));

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = isMuted ? 0 : volume;
  }, [isMuted, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.currentTime = skipTime;
  }, [skipTime]);

  return (
    <audio ref={audioRef}
           src={source}
           onTimeUpdate={onTimeUpdate}
           onDurationChange={onDurationChange}/>
  );
}
