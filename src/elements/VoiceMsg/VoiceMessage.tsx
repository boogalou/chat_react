import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './VoiceMsg.module.scss';
import { PlayButton } from './PlayButton';
import { Waveform } from './Waveform';
import { audioTimeRange } from '../../Utils';

type VoiceMessageProps = {
  voice: string;
}

export const VoiceMessage: FC<VoiceMessageProps> = ({voice}: VoiceMessageProps) => {

  const [isPlay, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const voiceMsg = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    if (voiceMsg && voiceMsg.current) {
      voiceMsg.current.addEventListener('ended', () => {
        setPlay(isPlay);
        setProgress(0);
        setCurrentTime(0);
      });
    }

    if (voiceMsg && voiceMsg.current) {
      voiceMsg.current.addEventListener('timeupdate', () => {
        const duration = voiceMsg.current && voiceMsg.current.duration || 0;
        setCurrentTime(voiceMsg.current!.currentTime);
        setProgress((voiceMsg.current!.currentTime / duration) * 100);
      });
    }

  }, []);


  const playButtonHandler = (evt: MouseEvent<HTMLButtonElement>): void => {
    setPlay(!isPlay);
    playVoice();
  };

  const playVoice = () => {
    if (voiceMsg && voiceMsg.current) {
      !isPlay ? voiceMsg.current.play() : voiceMsg.current.pause();
    }
  };


  return (
    <div className={ styles['message-box__voice'] }>
      <PlayButton callback={ playButtonHandler } isPlay={ isPlay }/>
      <Waveform
        className={ styles['voice__progress'] }
        progress={ progress }
        currentTime={ audioTimeRange(currentTime) }
      />
      <audio ref={ voiceMsg } src={ voice } preload="auto"/>
    </div>
  );
};
