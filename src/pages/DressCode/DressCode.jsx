import { motion } from "framer-motion";
import FlowersIn from "../../assets/png/FlowersIn.png";
import HeartIcon from "../../components/ui/HeartIcon";
import ImageCarousel from "../../components/ui/ImageCarousel";

const DressCode = () => {
    const colors = [
        {
            name: "Светло-Зеленый",
            class: "#e6f2ca",
        },
        {
            name: "Нежный розовый",
            class: "#f0c6d7",
        },
        {
            name: "Персиковый",
            class: "#fed9b4",
        },
        {
            name: "Светло-голубой",
            class: "#B0C4DE",
        },
        { name: "Лимонный", class: "#fcf3b5" },
    ];

    const titleAnim = {
        initial: { opacity: 0, scale: 0.9, y: 10 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
    };

    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 1 },
    };

    return (
        <div className="bg-background w-[100%] pt-10 p-4">
            {/* Заголовок */}
            <motion.h2
                {...titleAnim}
                className="-mt-5 font-breathe text-pink text-[3rem]"
            >
                Дресс-код
            </motion.h2>

            {/* Текст */}
            <motion.p
                {...fadeIn}
                className="font-pecita text-text text-[1rem] mt-2"
            >
                самое главное для нас — это вы, но нам будет особенно приятно,
                если вы поддержите цветовую гамму нашего праздника и станете
                частью общей атмосферы
            </motion.p>

            {/* Сердечки */}
            <div className="flex flex-col items-center gap-8 py-8 px-6">
                <div className="flex flex-row content-center items-center gap-1">
                    {colors.map((color, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="flex items-center"
                        >
                            <HeartIcon size={55} color={color.class} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Подпись */}

            {/* Карусель (не трогаем) */}
            <ImageCarousel />

            {/* Низ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex items-center mt-10"
            >
                <div>
                    <div className="w-30 shrink-0">
                        <img src={FlowersIn} alt="Декор" className="w-full" />
                    </div>
                </div>
                <p className="font-pecita text-text text-[1rem]">
                    пожалуйста, учитывайте, что мероприятие пройдет на природе -
                    выбирайте удобную обувь ;)
                </p>
            </motion.div>
        </div>
    );
};

export default DressCode;
