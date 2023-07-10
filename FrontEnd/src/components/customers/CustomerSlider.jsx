import getCard from "../../utils/card.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import Customers from "./Customers";
import style from "./testimonio.module.css";

const CustomerSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    330: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    410: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },

                    1650: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className=""
            >
                {getCard.map((card) => (
                    <SwiperSlide key={card.id}>
                        <section className="w-[100%] m-auto">
                            <div className={`${style.section} my-7  relative`}>
                                <div className=" w-80 h-52 shadow-2xl">
                                    <figure className="ml-[40%] w-[90px]">
                                        <img
                                            src={card.image}
                                            alt="Shoes"
                                            className=" relative -inset-y-12 rounded-full "
                                        />
                                    </figure>
                                    <div className="text-center pt-10 p-4">
                                        <p className="text-black font-serif font-medium text-base">
                                            {card.description}
                                        </p>
                                        <h2 className="text-black font-Manrope text-base">{card.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}

                <div
                    className="hidden sm:flex items-center absolute top-40 bottom-0 right-1  cursor-pointer 
  w-[50px] h-[50px] justify-center rounded-full z-[8]"
                >
                    <SlideNextButton />
                </div>
                <div
                    className="hidden sm:flex items-center absolute top-40 bottom-0 left-1 cursor-pointer
   w-[50px] h-[50px] justify-center rounded-full z-[8]"
                >
                    <SlidePrevButton />
                </div>
            </Swiper>
        </>
    );
};

const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slideNext()}>
            <TiChevronRight className=" text-[#080808b7] hover:text-[#080808b7] text-xl" />


            <i className="fa-solid fa-chevron-right text-[#DA3E52] text-2xl  "></i>
        </button>
    );
};

const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()}>
            <TiChevronLeft className="text-[#080808b7] hover:text-[#080808b7] text-xl" />
            <i className="fa-solid fa-chevron-left text-[#DA3E52] text-2xl"></i>
        </button>
    );
};
export default CustomerSlider;
