import React, { createContext, useContext } from 'react';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
const AudioContextContext = createContext(audioContext);

audioContext.gainNode = gainNode; // tmp hack

export const useAudioContext = () =>
  useContext(AudioContextContext);

export const AudioContextProvider = ({ children }) =>
  <AudioContextContext.Provider value={audioContext}>{children}</AudioContextContext.Provider>;
