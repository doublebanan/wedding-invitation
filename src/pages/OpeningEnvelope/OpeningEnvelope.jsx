import { motion } from "framer-motion";
import { useState } from "react";

import EnvelopeBack from "../../assets/png/Fon.png";
import EnvelopeFlap from "../../assets/png/FonTop.png";
import Heart from "../../assets/png/HearthButton.png";

const OpeningEnvelope = ({ onOpen, onStartMusic }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        setIsAnimating(true);
        // Вызываем закрытие всего компонента только после того,
        // как клапаны улетят за экран
        setTimeout(() => {
            onOpen();
        }, 1200);
    };

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden z-[100] bg-white flex items-center justify-center">
            {/* НИЖНЯЯ ЧАСТЬ - Уезжает вниз */}
            <motion.img
                src={EnvelopeBack}
                initial={{ y: 0 }}
                animate={isAnimating ? { y: "100%", opacity: 0 } : { y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 0.2,
                }}
                className="absolute bottom-0 w-full h-full object-cover z-10"
            />

            {/* ВЕРХНЯЯ ЧАСТЬ - Уезжает вверх */}
            <motion.img
                src={EnvelopeFlap}
                initial={{ y: 0 }}
                animate={isAnimating ? { y: "-100%", opacity: 0 } : { y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.45, 0, 0.55, 1],
                    delay: 0.2,
                }}
                className="absolute top-0 w-full h-[55%] object-cover z-30"
            />

            {/* СЕРДЦЕ - Исчезает первым */}
            <motion.img
                src={Heart}
                onClick={() => {
                    onStartMusic();
                    setTimeout(() => {
                        startAnimation();
                    }, 200);
                }}
                initial={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                animate={
                    isAnimating
                        ? { scale: 0, opacity: 0, x: "-50%", y: "-50%" }
                        : { scale: 1, opacity: 1, x: "-50%", y: "-50%" }
                }
                transition={{ duration: 0.4 }}
                className="
                    w-24
                    absolute
                    top-1/2 left-1/2
                    cursor-pointer
                    z-50
                "
            />
            <div className="flex flex-col justify-between z-99 absolute top-[60%] ">
                <motion.h1
                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8, // Чуть медленнее для благородства
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="font-breathe text-white !text-[1.5rem] self-start leading-tight"
                >
                    Нажми на сердце
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }} // Заменили сторону
                    whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8,
                        ease: "easeInOut",
                        delay: 0.8, // Появится чуть позже Андрея
                    }}
                    className="font-breathe text-white !text-[1.5rem] self-end leading-tight"
                >
                    <span className="font-breathe text-[1rem] text-white">
                        -
                    </span>{" "}
                    откроется любовь
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8, // Чуть медленнее для благородства
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="font-pecita text-white !text-[1rem] self-center leading-tight mt-25"
                >
                    08.08.26
                </motion.h1>
            </div>
        </div>
    );
};

export default OpeningEnvelope;
