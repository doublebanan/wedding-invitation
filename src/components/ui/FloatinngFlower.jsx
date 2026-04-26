import { motion } from "framer-motion";

import Flower1 from "../../assets/flower/1.png";
import Flower2 from "../../assets/flower/2.png";
import Flower3 from "../../assets/flower/3.png";
import Flower4 from "../../assets/flower/4.png";
import Flower5 from "../../assets/flower/5.png";
import Flower6 from "../../assets/flower/6.png";
import Flower7 from "../../assets/flower/7.png";

const flowerImages = [
    Flower1,
    Flower2,
    Flower3,
    Flower4,
    Flower5,
    Flower6,
    Flower7,
];

const FloatingFlower = ({
    index = 0,
    top,
    bottom,
    left,
    right,
    width = "w-32",
    rotate = 0,
    delay = 0,
    opacity = 1,
    className = "",
}) => {
    return (
        <motion.img
            src={flowerImages[index]}
            alt="декор"
            initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
            whileInView={{ opacity: opacity, scale: 1, rotate: rotate }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
                delay: delay,
                ease: "easeOut",
            }}
            // Используем style для координат, так как они всегда разные
            style={{ top, bottom, left, right }}
            // Классы для ширины и абсолюта
            className={`absolute ${width} h-auto pointer-events-none z-0 ${className}`}
        />
    );
};

export default FloatingFlower;
