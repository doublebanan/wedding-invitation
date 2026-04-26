import { motion } from "framer-motion";
import HeartItem from "../../components/ui/HeartItem";
import JustMarried from "../../assets/png/JustMarried.webp";

import SubmitButton from "../../components/ui/SubmitButton";
import Dom from "../../../public/Dom.webp";

import FloatingFlower from "../../components/ui/FloatinngFlower";

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 1, margin: "-10px" },
    transition: { duration: 2, ease: "easeOut" },
};

const titleAnim = {
    initial: { opacity: 0, scale: 0.85, rotate: -3 },
    whileInView: { opacity: 1, scale: 1, rotate: 0 },
    viewport: { once: true, amount: 1, margin: "-10px" },
    transition: { duration: 2, type: "spring" },
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 1, margin: "-10px" },
    transition: { duration: 2, ease: "easeOut" },
};

const imageAnim = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-10px" },
    transition: { duration: 1.3, ease: "easeOut" },
};

const Details = () => {
    return (
        <div className="bg-background w-[100%] pt-10 p-4">
            <motion.div {...fadeInUp}>
                <motion.div
                    {...titleAnim}
                    className="mt-7 font-breathe text-pink rotate-[5deg] text-[2.5rem]"
                >
                    Наконец-то!
                </motion.div>

                <motion.div
                    {...fadeIn}
                    className="font-pecita text-text text-[1rem]"
                >
                    мы сами не ожидали, но этот день настал
                </motion.div>
            </motion.div>

            {/* Секция 2 */}
            <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
                <motion.div
                    {...titleAnim}
                    className="mt-7 font-breathe text-cherry text-[3.2rem]"
                >
                    Мы женимся!
                </motion.div>

                <motion.div
                    {...fadeIn}
                    className="font-pecita text-text text-[1rem]"
                >
                    и хотим, чтоб этот день стал праздником не только для нас,
                    но и для всех кто нам дорог
                </motion.div>
            </motion.div>

            <motion.div {...imageAnim} className="mt-10 w-64 mx-auto">
                <img src={JustMarried} alt="Декор" />
            </motion.div>

            <div className=" relative mt-10">
                <motion.div
                    {...titleAnim}
                    className="font-breathe text-[4rem] mt-8 text-cherry"
                >
                    Август
                </motion.div>
                <FloatingFlower
                    index={4}
                    bottom="70%"
                    right="75%"
                    width="w-35"
                    rotate={45}
                    delay={0.5}
                />
                <FloatingFlower
                    index={1}
                    bottom="240%"
                    right="1%"
                    width="w-15"
                    rotate={45}
                    delay={0.5}
                />

                <div className=" w-full relative flex items-center justify-center gap-10 mt-5">
                    {["3", "4", "5", "6", "7"].map((day, index) => (
                        <motion.div
                            key={day}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="font-breathe text-text text-[1rem]"
                        >
                            {day}
                        </motion.div>
                    ))}

                    <div className="relative font-breathe text-cherry text-[1.3rem]">
                        {/* Внешний контейнер для анимации появления и ПРАВИЛЬНОГО позиционирования */}
                        <motion.div
                            className="absolute w-12 h-15 top-[-40%] right-[-140%]" // Перенесли абсолют и размеры сюда
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                type: "spring",
                                stiffness: 200,
                            }}
                        >
                            {/* Внутренний контейнер только для бесконечной пульсации */}
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-full h-full"
                            >
                                <HeartItem className="w-full h-full text-cherry" />
                            </motion.div>
                        </motion.div>

                        {/* Сама цифра */}
                        <span className="relative z-10">8</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="font-breathe text-text text-[1rem]"
                    >
                        9
                    </motion.div>
                </div>
            </div>

            <div className="mt-10">
                <motion.h2
                    {...titleAnim}
                    className="!rotate-[-5deg] font-breathe text-green text-[5rem]"
                >
                    Локация
                </motion.h2>

                <motion.div {...imageAnim} className="-mt-20 w-70 mx-auto">
                    <img src={Dom} alt="Декор" />
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    className="-mt-12 font-pecita text-text text-[1rem]"
                >
                    природный комплекс "Гнездо" <br />
                    червишевский тракт, 18 км, стр.1
                    <div className="mt-2">
                        <a
                            href="https://2gis.ru/tyumen/geo/70000001024900106/65.520121000000003,56.937497"
                            target="_blank"
                            rel="noreferrer"
                            className="!text-cherry font-pecita hover:text-cherry transition-colors"
                        >
                            <SubmitButton text={"открыть карту"} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Details;
