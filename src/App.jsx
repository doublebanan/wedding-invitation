import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { useMusic } from "./components/ui/useMusic";

import Hero from "./pages/Hero/Hero";
import Details from "./pages/Details/Details";
import DailyRoutine from "./pages/DailyRoutine/DailyRoutine";
import DressCode from "./pages/DressCode/DressCode";
import Wish from "./pages/Wish/Wish";
import GuestProfile from "./pages/GuestProfile/GuestProfile";
import FadeIn from "./components/motion/FadeIn";

import FloatingFlower from "./components/ui/FloatinngFlower";

import PA from "./assets/png/PA.webp";
import HeroWe from "./assets/png/HeroWe.webp";
import Flower from "./assets/png/end.webp";

import "./App.css";
import Timer from "./pages/Timer/Timer";
import OpeningEnvelope from "./pages/OpeningEnvelope/OpeningEnvelope";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const { audioRef, toggleMusic } = useMusic();

    const handleOpen = () => {
        setIsOpen(true);
    };

    const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
    };

    useEffect(() => {
        preloadImage(HeroWe);
        preloadImage(PA);
    }, []);

    return (
        <div className="min-h-screen bg-background md:bg-stone-200 flex justify-center overflow-x-hidden">
            <div className="relative w-full md:max-w-[390px] min-h-screen flex flex-col bg-background shadow-xl overflow-hidden">
                {/* 🎵 ВАЖНО: аудио теперь здесь */}
                <audio ref={audioRef} src="/music/bloom.mp3" loop />

                {!isOpen && (
                    <OpeningEnvelope
                        onOpen={handleOpen}
                        onStartMusic={toggleMusic} // 👈 передаём
                    />
                )}

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Hero />
                        <Details />
                        <DailyRoutine />
                        <DressCode />
                        <Wish />
                        <Timer />
                        <GuestProfile />

                        <FadeIn>
                            <div className="bg-background w-full p-4">
                                <div className="w-80 mx-auto">
                                    <img src={PA} alt="Декор" />
                                </div>

                                <h3 className="mt-5 font-breathe text-pink text-[1.5rem] text-center">
                                    08.08. <br />С нетерпением ждём встречи в
                                    нашем летнем саду!
                                </h3>
                            </div>
                        </FadeIn>
                    </motion.div>
                )}

                <FloatingFlower
                    index={2}
                    bottom="10%"
                    right="-5%"
                    width="w-50"
                    rotate={45}
                    delay={0.5}
                />

                <div className="-mt-20 w-full">
                    <img src={Flower} alt="Декор" />
                </div>
            </div>
        </div>
    );
}

export default App;
