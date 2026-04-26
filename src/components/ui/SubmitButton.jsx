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

            <span
                className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          rounded-full border-[10px] border-pink
          animate-pulse-ring
          pointer-events-none
          z-0
        "
            />
        </div>
    );
};
export default SubmitButton;
