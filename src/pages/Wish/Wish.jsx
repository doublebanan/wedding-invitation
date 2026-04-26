import SubmitButton from "../../components/ui/SubmitButton";

const Wish = () => {
    return (
        <div className="bg-background  w-[100%]  p-4">
            <h2 className="mt-5 font-breathe text-cherry text-[3rem]">
                Пожелания
            </h2>
            <h2 className=" font-breathe text-cherry text-[2rem]">№1</h2>
            <p className="font-pecita text-text text-[1rem] mt-5">
                ваши пожелания в конвертах будут лучшим подарком - они помогут
                исполнить наши мечты
            </p>
            <h2 className=" font-breathe text-cherry text-[2rem] mt-5">№2</h2>

            <p className="font-pecita text-text text-[1rem] mt-5">
                если вы хотите порадовать нас цветами - мы будем безмерно
                благодарны, если вместо традиционных букетов вы поддержите наш
                "цветочный счёт". Так красота цветов будет окружать нас еще
                долго после торжества.
            </p>
            <div className="flex justify-center -mt-10  px-6">
                <a
                    href="https://ananas-72.ru/subscribe/30"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-12 py-4 rounded-full bg-strawberry !text-deep-berry font-pecita text-sm text-[1.1rem]  tracking-widest  text-center transition-all duration-300 ease-in-out active:scale-95 active:shadow-sm
        "
                >
                    <SubmitButton text={"цветочный счёт"} />
                </a>
            </div>
        </div>
    );
};

export default Wish;
