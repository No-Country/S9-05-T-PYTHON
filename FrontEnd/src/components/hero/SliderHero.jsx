import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import { , Pagination, Navigation } from 'swiper/modules';
import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";

const listPet = [
    {
        id: 1,
        title: "Blanco",
        image: "https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355_1280.jpg",
        description: "Blanco es un perro de raza Labrador Retriever. Es leal, inteligente y lleno de energía. Le encanta correr y jugar al aire libre. Blanco siempre está listo para una aventura y es un compañero fiel"
    },
    {
        id: 2,
        title: "Simba",
        image: "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345_1280.jpg",
        description: " Simba es un gato atigrado de aspecto majestuoso. Tiene una personalidad valiente y aventurera. Es independiente pero también disfruta de momentos de mimos y caricias"
    },
    {
        id: 3,
        title: "blue",
        image: "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470_1280.jpg",
        description: "Blue es un guacamayo sociable y le gusta interactuar. Siempre anima el ambiente y esta en peligro de extincion por lo que buscamos una compañera"
    },
    {
        id: 4,
        title: "Nala",
        image: "https://cdn.pixabay.com/photo/2014/07/06/15/03/hangover-385572_1280.jpg",
        description: "Nala es una gata de ojos verdes. Es elegante, ágil y le encanta recibir caricias. Nala tiene un carácter tranquilo pero también es muy juguetona."
    },
    {
        id: 5,
        title: "sombra",
        image: "https://cdn.pixabay.com/photo/2018/10/22/17/24/horse-3765847_1280.jpg",
        description: "Sombra es un majestuoso caballo de pelaje negro como la noche.  Con una melena y cola largas y sedosas, Sombra es una verdadera belleza equina. Su temperamento es sereno y noble"
    },
    {
        id: 6,
        title: "Luna",
        image: "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
        description: "Luna es una gata de pelaje suave y brillante. Es juguetona, curiosa y le encanta observar el mundo desde las alturas. Siempre busca un rayo de sol para acurrucarse y es muy cariñosa"
    },
    {
        id: 7,
        title: "Coco",
        image: "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg",
        description: "Coco es un guacamayo de colores vibrantes y plumaje exuberante. Coco es divertido y siempre anima el ambiente con su presencia"
    },
    {
        id: 8,
        title: "Lola",
        image: "https://cdn.pixabay.com/photo/2016/05/29/12/57/rabbit-1422882_1280.jpg",
        description: "Lola es una conejita de orejas largas y suaves. Es tímida al principio, pero una vez que se siente segura, es cariñosa y afectuosa. Le gusta saltar y explorar su entorno con curiosidad."
    },
    {
        id: 9,
        title: "Toby",
        image: "https://cdn.pixabay.com/photo/2017/10/13/17/12/dog-2848295_1280.jpg",
        description: "Toby es simpático, curioso y tiene una gran nariz olfativa. Le encanta seguir rastros y explorar su entorno. Toby es un excelente compañero para largas caminatas al aire libre"
    },
    {
        id: 10,
        title: "Pipo",
        image: "https://cdn.pixabay.com/photo/2019/05/22/22/54/turtle-4222815_1280.jpg",
        description: "pipo es una tortuga de agua dulce. Es tranquilo y relajado, pasa la mayor parte del tiempo nadando y tomando el sol en su terrario. pipo es una mascota muy encantadora"
    }


];

const SliderHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="" onMouseLeave={handleMouseLeave}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="MySwiper"
            >
                {listPet.map((pet, index) => (
                    <div className=" flex items-center" >
                        <SwiperSlide onMouseOver={handleMouseOver} key={`${index}`} className={""}>
                            <figure>
                                <img
                                    src={pet.image}
                                    alt={pet.title}
                                    className=""
                                />
                            </figure>
                            <div className="p-3">
                                <h3 className="text-black text-center">{pet.title}</h3>
                                <p className="text-black text-sm">{pet.description}</p>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}

                {isHovered && (
                    <>
                        <div className="sm:flex absolute top-[50%] bottom-0 right-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]">
                            <SlideNextButton />
                        </div>
                        <div className="sm:flex absolute top-[50%] bottom-0 left-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]">
                            <SlidePrevButton />
                        </div>
                    </>
                )}
            </Swiper>
        </div>
    );
};

const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slideNext()}
            className=" bg-[#737373ad] shadow-xl w-10 rounded-full h-10  flex items-center justify-center"
        >
            <TiChevronRight className=" text-[#080808b7] hover:text-[#080808b7] text-xl" />
        </button>
    );
};

const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slidePrev()}
            className=" bg-[#626262ad] shadow-xl w-10 rounded-full h-10 flex items-center justify-center"
        >
            <TiChevronLeft className=" text-[#080808] hover:text-[#080808] text-xl" />
        </button>
    );
};

export default SliderHero;


