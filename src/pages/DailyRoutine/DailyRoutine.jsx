import { motion } from "framer-motion";
import Rings from "../../assets/png/Rings.png";
import Cake from "../../assets/png/Cake.png";

const DailyRoutine = () => {
    const events = [
        {
            time: "16:30",
            title: "Сбор гостей",
            desc: "приветственные напитки и легкие закуски",
        },
        {
            time: "17:00",
            title: "Церемония",
            desc: "самый трогательный момент нашего дня",
        },
        {
            time: "18:00",
            title: "Банкет",
            desc: "время для поздравлений, вкусной еды и приятного общения",
        },
        {
            time: "22:00",
            title: "Танцы",
            desc: "к сожалению даже такой прекрасный день заканчивается",
        },
    ];

    // Заголовок
    const titleAnim = {
        initial: { opacity: 0, scale: 0.9, rotate: 3 },
        whileInView: { opacity: 1, scale: 1, rotate: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, type: "spring" },
    };

    // Слева
    const slideLeft = {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    // Справа
    const slideRight = {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    // Декор
    const decorAnim = {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: "easeOut" },
    };

    return (
        <div className="relative bg-background w-[100%] p-4">
            <motion.h2
                {...titleAnim}
                className="-mt-10 font-breathe text-pink rotate-[5deg] text-[4rem]"
            >
                Тайминг
            </motion.h2>

            <div className="mt-5 flex flex-col w-full px-5 gap-1">
                {events.map((event, index) => {
                    const isRight = index % 2 !== 0;

                    return (
                        <motion.div
                            key={index}
                            {...(isRight ? slideRight : slideLeft)}
                            transition={{
                                ...(isRight
                                    ? slideRight.transition
                                    : slideLeft.transition),
                                delay: index * 0.15,
                            }}
                            className={`flex flex-col max-w-[250px] ${
                                isRight
                                    ? "self-end text-right"
                                    : "self-start text-left"
                            }`}
                        >
                            <div className="font-breathe text-[2rem] text-cherry leading-none">
                                {event.time}
                            </div>

                            <div className="font-breathe text-[1.8rem] text-green mt-1">
                                {event.title}
                            </div>

                            <p className="font-pecita text-text text-[1rem] mt-2 leading-tight whitespace-pre-line">
                                {event.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Rings */}
            <motion.div {...decorAnim} className="absolute w-25 top-[40%]">
                <img src={Rings} alt="Декор" />
            </motion.div>

            {/* Cake */}
            <motion.div
                {...decorAnim}
                transition={{ ...decorAnim.transition, delay: 0.3 }}
                className="absolute w-25 top-[77%]"
            >
                <img src={Cake} alt="Декор" />
            </motion.div>
        </div>
    );
};

export default DailyRoutine;
