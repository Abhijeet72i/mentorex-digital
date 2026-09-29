/**
 * Web Audio API ambient spatial soundscape generator.
 * Creates an organic, subtle cinematic drone pad tuned to C minor/pentatonic
 * when user enables soundscape mode.
 */

class AmbientDroneSynth {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private lfo: OscillatorNode | null = null;
  private isPlaying = false;

  public init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    this.ctx = new AudioContextClass();
  }

  public async start(volume = 0.35) {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isPlaying) {
      if (this.masterGain) {
        this.masterGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.4);
      }
      return;
    }

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(Math.max(volume, 0.01), now + 1.8);
    this.masterGain.connect(this.ctx.destination);

    // Warm Low-pass filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(320, now);
    this.filter.Q.setValueAtTime(2.5, now);
    this.filter.connect(this.masterGain);

    // Subtle LFO modulating the filter frequency for analog warmth
    this.lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    this.lfo.frequency.setValueAtTime(0.12, now); // Slow 8.3-second breathing cycle
    lfoGain.gain.setValueAtTime(140, now);
    this.lfo.connect(lfoGain);
    lfoGain.connect(this.filter.frequency);
    this.lfo.start(now);

    // Cinematic chord roots: C2 (65.4 Hz), G2 (98.0 Hz), D#3 (155.6 Hz), A#3 (233.1 Hz)
    const frequencies = [65.41, 97.99, 130.81, 155.56, 196.0];
    this.oscillators = [];

    frequencies.forEach((freq, idx) => {
      if (!this.ctx || !this.filter) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      // Slightly detune for rich spatial chorusing
      const detune = (idx - 2) * 6;
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(detune, now);

      // Relative amplitude for harmonic balance
      const amp = 0.18 / (idx + 1);
      oscGain.gain.setValueAtTime(amp, now);

      osc.connect(oscGain);
      oscGain.connect(this.filter);
      osc.start(now);
      this.oscillators.push(osc);
    });

    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.setTargetAtTime(0.001, now, 0.5);

    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      this.oscillators = [];

      if (this.lfo) {
        try {
          this.lfo.stop();
          this.lfo.disconnect();
        } catch {
          // ignore
        }
        this.lfo = null;
      }

      this.isPlaying = false;
    }, 700);
  }

  public setVolume(volume: number) {
    if (this.masterGain && this.ctx && this.isPlaying) {
      this.masterGain.gain.setTargetAtTime(Math.max(0.001, volume), this.ctx.currentTime, 0.1);
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const ambientSynth = new AmbientDroneSynth();
