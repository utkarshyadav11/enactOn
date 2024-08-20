
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules'; 
import Packets from "../assets/images/packets.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const SliderTwo = () => {
  return (
    <div className="relative w-full h-full pt-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="swiper mySwiper3"
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        }}
        autoplay={{ 
          delay: 3500,
          disableOnInteraction: true,
        }}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover w-full h-[50vh] lg:object-cover"
              src={Packets}
              alt="image"
            />
            <div className="absolute z-20 flex flex-col items-center w-full gap-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 sm:w-auto">
              <div className="flex items-center justify-center text-3xl font-semibold bg-transparent max-w-72">
                ONLINE ONLY
              </div>
              <div className="flex items-center justify-center w-20 h-1 bg-black"></div>
              <div className="w-full text-center">
                GET 20% OFF YOUR ORDER OF $50 OR MORE
                <br />
                Use code <span className="font-bold">“Chef20”</span>
              </div>
              <div className="max-w-72 bg-transparent items-center justify-center flex border-2 border-black hover:bg-black text-black hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
                <button className="px-8 py-2 sm:px-16">
                  <a href="">Shop Now</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default SliderTwo;
