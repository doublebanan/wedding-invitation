import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Начинаем: прозрачный и чуть ниже
            whileInView={{ opacity: 1, y: 0 }} // Когда доскроллили: проявляется и встает на место
            viewport={{ once: true, amount: 0.5 }} // Сработает один раз, когда 20% блока видно
            transition={{
                duration: 1.2,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Плавный "дорогой" вылет
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
