import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "../assets/images/BannerImage.png";

const HomeSection = () => {
    return (
        <section id="home">
            <div className="relative w-full h-full">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ 
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                >
                    <SwiperSlide>
                        <img className="object-cover w-full h-screen" src={Banner} alt="Banner" />
                        <div className="absolute z-20 transform -translate-x-1/2 bottom-24 left-1/2">
                            <div className="max-w-72 bg-transparent items-center justify-center flex border-2 border-white shadow-lg hover:bg-white text-white hover:text-black duration-300 cursor-pointer active:scale-[0.98]">
                                <button className="px-8 py-2 sm:px-12">
                                    <a href="#">Meet Chef Matt</a>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img className="object-cover w-full h-screen" src={Banner} alt="Banner" />
                        <div className="absolute z-20 transform -translate-x-1/2 bottom-24 left-1/2">
                            <div className="max-w-72 bg-transparent items-center justify-center flex border-2 border-white shadow-lg hover:bg-white text-white hover:text-black duration-300 cursor-pointer active:scale-[0.98]">
                                <button className="px-8 py-2 sm:px-12">
                                    <a href="#">Meet Chef Matt</a>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img className="object-cover w-full h-screen" src={Banner} alt="Banner" />
                        <div className="absolute z-20 transform -translate-x-1/2 bottom-24 left-1/2">
                            <div className="max-w-72 bg-transparent items-center justify-center flex border-2 border-white shadow-lg hover:bg-white text-white hover:text-black duration-300 cursor-pointer active:scale-[0.98]">
                                <button className="px-8 py-2 sm:px-12">
                                    <a href="#">Meet Chef Matt</a>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img className="object-cover w-full h-screen" src={Banner} alt="Banner" />
                        <div className="absolute z-20 transform -translate-x-1/2 bottom-24 left-1/2">
                            <div className="max-w-72 bg-transparent items-center justify-center flex border-2 border-white shadow-lg hover:bg-white text-white hover:text-black duration-300 cursor-pointer active:scale-[0.98]">
                                <button className="px-8 py-2 sm:px-12">
                                    <a href="#">Meet Chef Matt</a>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* <style jsx>{`
                    .swiper-pagination-bullet {
                        @apply bg-white;
                    }
                    .swiper-pagination-bullet-active {
                        @apply bg-white;
                    }
                `}</style> */}
            </div>
        </section>
    );
};

export default HomeSection;
