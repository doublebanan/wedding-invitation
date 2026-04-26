import { motion } from "framer-motion";
const SubmitButton = ({ onClick, text = "ПОДТВЕРДИТЬ" }) => {
    return (
        // Родитель с relative, чтобы кольцо позиционировалось относительно него
        <div className="relative flex items-center justify-center py-20">
            <button
                onClick={onClick}
                className="
          relative
          min-w-[280px] min-h-[60px]
          flex items-center justify-center
          font-pecita  tracking-[1.3px] text-[18px]
          text-text
          !bg-pink
          !rounded-full
          shadow-lg shadow-sage/50
          outline-none focus:outline-none ring-0 focus:ring-0
          transition-all duration-200 ease-out
          hover:brightness-105 hover:shadow-xl
          active:scale-[0.98] active:brightness-110 active:shadow-inner
          z-10
        "
            >
                {text}
            </button>
            <motion.span
                className="absolute top-1/2 left-1/2 w-32 h-32 border-[10px] border-pink rounded-full pointer-events-none"
                initial={{ scale: 0.6, opacity: 0, x: "-50%", y: "-50%" }} // Начинаем с 0
                animate={{
                    scale: 2.2, // Увеличил размах для эпичности
                    opacity: [0, 0.6, 0], // Ключевые кадры: проявился и исчез
                }}
                transition={{
                    duration: 3, // Чуть медленнее, чтобы было нежнее
                    repeat: Infinity,
                    ease: "linear", // Линейно, чтобы не было рывков в начале/конце
                    times: [0, 0.2, 1], // Когда наступают моменты из массива opacity
                }}
            />
        </div>
    );
};
export default SubmitButton;
