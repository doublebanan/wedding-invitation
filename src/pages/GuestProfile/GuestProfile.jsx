import SubmitButton from "../../components/ui/SubmitButton";
import FloatingFlower from "../../components/ui/FloatinngFlower";

const GuestProfile = () => {
    return (
        <div className="relative bg-background  w-[100%] p-4 pt-15 ">
            <h2 className=" !rotate-[-5deg] -mt-5 font-breathe text-green text-[2.5rem]">
                Вы придете?
            </h2>
            <p className=" mt-5 font-pecita text-text text-[1rem]">
                пожалуйста, подтвердите свое присутствие до
            </p>
            <div className="mt-6">
                <h3 className="-mt-5 font-breathe text-cherry text-[1.5rem]">
                    01.06.2026
                </h3>
            </div>
            <div className="flex justify-center -mt-15  px-6">
                <a
                    href="https://tally.so/r/J90MDK"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-12 py-4 rounded-full bg-strawberry !text-deep-berry font-pecita text-sm text-[1.1rem]  tracking-widest  text-center transition-all duration-300 ease-in-out active:scale-95 active:shadow-sm
        "
                >
                    <SubmitButton text={"заполнить форму"} />
                </a>
            </div>

            <FloatingFlower
                index={4}
                bottom="0%"
                right="70%"
                width="w-30"
                rotate={45}
                delay={0.5}
            />
        </div>
    );
};

export default GuestProfile;
