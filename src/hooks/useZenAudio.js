import { useState, useRef, useEffect, useCallback } from 'react';

export function useZenAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const droneOsc1Ref = useRef(null);
  const droneOsc2Ref = useRef(null);
  const lfoRef = useRef(null);
  const lfoGainRef = useRef(null);
  const filterRef = useRef(null);
  const chimeIntervalRef = useRef(null);

  const triggerChime = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === 'suspended') return;

    const chimeFreqs = [432, 540, 648, 864];
    const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();

    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(freq, ctx.currentTime);

    chimeGain.gain.setValueAtTime(0.001, ctx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(ctx.destination);

    chimeOsc.start();
    chimeOsc.stop(ctx.currentTime + 4.6);
  }, []);

  const startZenAudio = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
      masterGainRef.current = masterGain;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filterRef.current = filter;

      const drone1 = ctx.createOscillator();
      drone1.type = 'sine';
      drone1.frequency.setValueAtTime(108, ctx.currentTime);
      droneOsc1Ref.current = drone1;

      const drone2 = ctx.createOscillator();
      drone2.type = 'triangle';
      drone2.frequency.setValueAtTime(216.5, ctx.currentTime);
      droneOsc2Ref.current = drone2;

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
      lfoRef.current = lfo;

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(180, ctx.currentTime);
      lfoGainRef.current = lfoGain;

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      drone1.connect(filter);
      drone2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      drone1.start();
      drone2.start();
      lfo.start();

      triggerChime();
      chimeIntervalRef.current = setInterval(() => {
        triggerChime();
      }, 7500);

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }, [triggerChime]);

  const stopZenAudio = useCallback(() => {
    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;

    if (masterGain && ctx) {
      masterGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
      setTimeout(() => {
        if (droneOsc1Ref.current) { droneOsc1Ref.current.stop(); droneOsc1Ref.current.disconnect(); }
        if (droneOsc2Ref.current) { droneOsc2Ref.current.stop(); droneOsc2Ref.current.disconnect(); }
        if (lfoRef.current) { lfoRef.current.stop(); lfoRef.current.disconnect(); }
        if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
        if (ctx) ctx.close();
      }, 1000);
    }
    setIsPlaying(false);
  }, []);

  const toggleZenAudio = useCallback(() => {
    if (isPlaying) {
      stopZenAudio();
    } else {
      startZenAudio();
    }
  }, [isPlaying, startZenAudio, stopZenAudio]);

  useEffect(() => {
    return () => {
      if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return { isPlaying, toggleZenAudio };
}
