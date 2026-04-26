import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
    const images = Array.from(
        { length: 14 },
        (_, i) => `/images/${i + 1}.jpeg`,
    );

    const extended = [images[images.length - 1], ...images, images[0]];

    const [current, setCurrent] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    const nextSlide = () => {
        if (current >= extended.length - 1) return;
        setCurrent((p) => p + 1);
    };

    const prevSlide = () => {
        if (current <= 0) return;
        setCurrent((p) => p - 1);
    };

    // бесшовность
    useEffect(() => {
        let timeout;

        if (current === extended.length - 1) {
            timeout = setTimeout(() => {
                setIsAnimating(false);
                setCurrent(1);
            }, 450);
        }

        if (current === 0) {
            timeout = setTimeout(() => {
                setIsAnimating(false);
                setCurrent(extended.length - 2);
            }, 450);
        }

        return () => clearTimeout(timeout);
    }, [current]);

    useEffect(() => {
        if (!isAnimating) {
            requestAnimationFrame(() => setIsAnimating(true));
        }
    }, [isAnimating]);

    return (
        <div className="relative mt-6 overflow-hidden">
            {/* CAROUSEL */}
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                    if (info.offset.x < -50) nextSlide();
                    if (info.offset.x > 50) prevSlide();
                }}
                animate={{ x: `-${current * 100}%` }}
                transition={isAnimating ? { duration: 0.45 } : { duration: 0 }}
            >
                {extended.map((src, i) => (
                    <div
                        key={i}
                        className="min-w-full px-2"
                        onClick={() => {
                            setCurrent(i);
                            setIsOpen(true);
                        }}
                    >
                        <img
                            src={src}
                            loading="lazy"
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />
                    </div>
                ))}
            </motion.div>

            {/* ARROWS */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-5xl z-30"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-5xl z-30"
            >
                ›
            </button>

            {/* FULLSCREEN (FIXED TELEGRAM SAFE VERSION) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
                        style={{
                            isolation: "isolate",
                            WebkitTransform: "translateZ(0)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 text-white text-3xl z-[1000]"
                        >
                            ✕
                        </button>

                        {/* LEFT */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-5 text-white text-4xl z-[1000]"
                        >
                            ‹
                        </button>

                        {/* IMAGE */}
                        <img
                            src={extended[current]}
                            className="max-h-[90%] max-w-[90%] object-contain rounded-xl"
                        />

                        {/* RIGHT */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-5 text-white text-4xl z-[1000]"
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
