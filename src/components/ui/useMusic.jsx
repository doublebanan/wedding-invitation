import { useRef, useState } from "react";

export const useMusic = () => {
    const audioRef = useRef(null);
    const intervalRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        } else {
            audioRef.current.volume = 0;
            audioRef.current.currentTime = 15;

            audioRef.current.play().catch(() => {});

            let vol = 0;

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            intervalRef.current = setInterval(() => {
                if (vol < 0.3) {
                    vol += 0.02;
                    audioRef.current.volume = vol;
                } else {
                    clearInterval(intervalRef.current);
                }
            }, 100);
        }

        setIsPlaying(!isPlaying);
    };

    return { audioRef, toggleMusic, isPlaying };
};
