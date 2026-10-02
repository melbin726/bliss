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
    if (!ctx || ctx.state === 'closed') return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
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
    } catch (_) {
      // Audio node scheduling exception safety
    }
  }, []);

  const startZenAudio = useCallback(async () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        console.warn('Web Audio API not supported in this browser.');
        return;
      }

      // Close lingering previous audio context if any
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try { audioCtxRef.current.close(); } catch (_) {}
      }

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Critical for iOS Safari & mobile browsers: AudioContext often starts suspended.
      // Resume must be triggered in the user interaction event loop.
      if (ctx.state === 'suspended') {
        await ctx.resume().catch(() => {});
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.2);
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

      // Trigger first gentle singing bowl chime promptly
      setTimeout(() => triggerChime(), 150);

      if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
      chimeIntervalRef.current = setInterval(() => {
        triggerChime();
      }, 7000);

      setIsPlaying(true);
    } catch (e) {
      console.warn('Zen Audio failed to start:', e);
    }
  }, [triggerChime]);

  const stopZenAudio = useCallback(() => {
    if (chimeIntervalRef.current) {
      clearInterval(chimeIntervalRef.current);
      chimeIntervalRef.current = null;
    }

    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    const osc1 = droneOsc1Ref.current;
    const osc2 = droneOsc2Ref.current;
    const lfo = lfoRef.current;

    if (masterGain && ctx && ctx.state !== 'closed') {
      try {
        masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      } catch (_) { /* ignore */ }

      setTimeout(() => {
        try {
          if (osc1) { osc1.stop(); osc1.disconnect(); }
          if (osc2) { osc2.stop(); osc2.disconnect(); }
          if (lfo) { lfo.stop(); lfo.disconnect(); }
          if (ctx && ctx.state !== 'closed') ctx.close();
        } catch (_) { /* already stopped */ }

        if (audioCtxRef.current === ctx) {
          audioCtxRef.current = null;
        }
      }, 850);
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
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    isPlaying,
    isZenPlaying: isPlaying,
    toggleZenAudio,
    toggleAudio: toggleZenAudio,
    toggleZen: toggleZenAudio,
    startZenAudio,
    stopZenAudio
  };
}
