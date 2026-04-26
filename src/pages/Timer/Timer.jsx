import { useState, useEffect } from "react";

const Timer = () => {
    // Установи здесь дату своей свадьбы!
    const targetDate = new Date("2026-08-08T15:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <span className="text-3xl  text-cherry font-breathe">
                {String(value).padStart(2, "0")}
            </span>
            <span className="text-[1rem] font-pecita tracking-widest text-cherry mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <div className="bg-background  w-[100%]  p-4 -mt-2">
            <h3 className="text-center font-breathe text-green text-2xl ">
                До торжества осталось:
            </h3>
            <div className="flex justify-center gap-6">
                <TimeUnit value={timeLeft.days} label="Дней" />
                <TimeUnit value={timeLeft.hours} label="Часов" />
                <TimeUnit value={timeLeft.minutes} label="Минут" />
                <TimeUnit value={timeLeft.seconds} label="Секунд" />
            </div>
        </div>
    );
};

export default Timer;
