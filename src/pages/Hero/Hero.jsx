import { motion } from "framer-motion";
import FloatingFlower from "../../components/ui/FloatinngFlower";

import HeroWe from "../../assets/png/HeroWe.webp";

const Hero = () => {
    return (
        <div className="bg-background w-[100%] mt-8 p-4">
            <div className="flex flex-col justify-between">
                <motion.h1
                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.8, // Чуть медленнее для благородства
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className="font-breathe text-green text-[3.5rem] self-start leading-tight"
                >
                    Андрей
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
                    className="font-breathe text-pink text-[3.5rem] self-end leading-tight"
                >
                    <span className="font-breathe text-[3rem] text-cherry">
                        &
                    </span>{" "}
                    Полина
                </motion.h1>
            </div>

            <div className=" relative w-full mt-5 flex justify-center items-center overflow-hidden rounded-2xl">
                <img
                    src={HeroWe}
                    alt="Андрей и Полина"
                    className="w-full h-auto max-w-60 object-contain shadow-sm"
                />
                <FloatingFlower
                    index={3}
                    bottom="20%"
                    right="0%"
                    width="w-20"
                    rotate={45}
                    delay={0.5}
                />
                <FloatingFlower
                    index={5}
                    bottom="80%"
                    right="75%"
                    width="w-20"
                    rotate={45}
                    delay={0.5}
                />
                <FloatingFlower
                    index={1}
                    bottom="60%"
                    right="0%"
                    width="w-15"
                    rotate={45}
                    delay={0.5}
                />
                <FloatingFlower
                    index={2}
                    bottom="0%"
                    right="70%"
                    width="w-30"
                    rotate={45}
                    delay={0.5}
                />
            </div>
        </div>
    );
};

export default Hero;
