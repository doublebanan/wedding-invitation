import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
    const images = Array.from(
        { length: 14 },
        (_, i) => `/images/${i + 1}.jpeg`,
    );

    // создаём клоны
    const extended = [images[images.length - 1], ...images, images[0]];

    const [current, setCurrent] = useState(1); // начинаем с 1 (не с 0)
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    const breathing = {
        animate: { scale: [1, 1.06, 1] },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const nextSlide = () => {
        if (current >= extended.length - 1) return;
        setCurrent((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (current <= 0) return;
        setCurrent((prev) => prev - 1);
    };

    // 🔥 магия бесшовного перехода
    useEffect(() => {
        if (current === extended.length - 1) {
            // дошли до фейкового последнего (первый клон)
            setTimeout(() => {
                setIsAnimating(false);
                setCurrent(1);
            }, 500);
        }

        if (current === 0) {
            // дошли до фейкового первого (последний клон)
            setTimeout(() => {
                setIsAnimating(false);
                setCurrent(extended.length - 2);
            }, 500);
        }
    }, [current]);

    useEffect(() => {
        if (!isAnimating) {
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        }
    }, [isAnimating]);

    return (
        <div className="h-100 mt-6 relative">
            {/* КАРУСЕЛЬ */}
            <div className="overflow-hidden relative">
                <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                        if (info.offset.x < -50) nextSlide();
                        if (info.offset.x > 50) prevSlide();
                    }}
                    animate={{ x: `-${current * 100}%` }}
                    transition={
                        isAnimating ? { duration: 0.5 } : { duration: 0 }
                    }
                >
                    {extended.map((src, index) => (
                        <div
                            key={index}
                            className="min-w-full px-2"
                            onClick={() => {
                                setCurrent(index);
                                setIsOpen(true);
                            }}
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full h-[400px] object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* кнопки */}
                <motion.button
                    onClick={prevSlide}
                    {...breathing}
                    whileTap={{ scale: 0.92 }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-6xl"
                >
                    ‹
                </motion.button>

                <motion.button
                    onClick={nextSlide}
                    {...breathing}
                    whileTap={{ scale: 0.92 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-6xl"
                >
                    ›
                </motion.button>
            </div>

            {/* FULLSCREEN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 text-white text-3xl"
                        >
                            ✕
                        </button>

                        <button
                            onClick={prevSlide}
                            className="absolute left-5 text-white text-3xl"
                        >
                            ‹
                        </button>

                        <img
                            src={extended[current]}
                            alt=""
                            loading="lazy"
                            className="max-h-[90%] max-w-[90%] object-contain rounded-xl"
                        />

                        <button
                            onClick={nextSlide}
                            className="absolute right-5 text-white text-3xl"
                        >
                            ›
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;
