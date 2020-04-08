// never set currentTime directly, this is only allowed for the audio element.
// If you want to skip time set skipTime.
const defaultState = {
  source: 'songs/code.mp3',
  queue: [],
  volume: 1,
  duration: 0,
  currentTime: 0,
  skipTime: 0,
  isMuted: false,
  isPlaying: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
  case 'SET_CURRENT_TIME':
    return { ...state, currentTime: action.value };
  case 'SET_DURATION':
    return { ...state, duration: action.value };
  case 'SET_IS_PLAYING':
    return { ...state, isPlaying: action.value };
  case 'SET_IS_MUTED':
    return { ...state, isMuted: action.value };
  case 'SET_VOLUME':
    return { ...state, volume: action.value };
  case 'SET_SKIP_TIME':
    return { ...state, skipTime: action.value };
  default:
    return state;
  }
}
