export const selectPlayer = (state) =>
  state.player;

export const selectSource = (state) =>
  selectPlayer(state).source;

export const selectVolume = (state) =>
  selectPlayer(state).volume;

export const selectIsPlaying = (state) =>
  selectPlayer(state).isPlaying;

export const selectIsMuted = (state) =>
  selectPlayer(state).isMuted;

export const selectDuration = (state) =>
  selectPlayer(state).duration;

export const selectCurrentTime = (state) =>
  selectPlayer(state).currentTime;
