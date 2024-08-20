import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';
import leaf from "../assets/images/leaf.png";
import CinnaMon from "../assets/images/cinnamon.png";
import arrowLeft from "../assets/svg/arrow_left.svg";
import arrowRight from "../assets/svg/arrow_right.svg";

const SliderOne = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Update Swiper with the navigation elements
    if (prevRef.current && nextRef.current) {
      Swiper.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };
    }
  }, []);

  return (
    <section id="products">
      <div className="relative pb-8 pt-36">
        <div className="absolute bottom-32 -left-6 md:bottom-24" >
          <img className="w-11/12" src={leaf} alt="leaf" />
        </div>
        <div className="pl-4 text-2xl text-Gold md:pl-0">CHEF MATT PRODUCTS</div>
        <p className=" pl-4  w-[80%] py-5 text-white border-t-4 md:w-[38%] md:pl-0 lg:w-[33%] border-Gold">
          Shop Gourmet Chef Quality products from the Chef Matt brand. 
          Chef it yourself and Thank us later.
        </p>
      </div>

      <div className="relative px-20">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onSwiper={(swiper) => {
            // Assigning the  DOM elements to Swiper navigation btn slides
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            }
          }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: true,
          }}
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div>
              <img src={CinnaMon} alt="CINNAMON HONEY" />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className='text-Gold'>CINNAMON HONEY</div>
              
              <div className='flex gap-[10px]'>
              <div className='line-through'>$12.00</div>
              <div>$9.00</div>
              </div>
              
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>
              <img src={CinnaMon} alt="COCONUT OIL" />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className='text-Gold'>COCONUT OIL</div>
              <div className='flex gap-[10px]'>
              <div className='line-through'>$20.00</div>
              <div>$15.00</div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>
              <img src={CinnaMon}  alt="MANGO HONEY" />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className='text-Gold'>MANGO HONEY</div>
              <div className='flex gap-[10px]'>
              <div className='line-through'>$9.00</div>
              <div>$6.00</div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>
              <img src={CinnaMon}  alt="HONEY HABANERO" />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className='text-Gold'>HONEY HABANERO</div>
              <div className='flex gap-[10px]'>
              <div className='line-through'>$12.00</div>
              <div>$9.00</div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div>
              <img src={CinnaMon}  alt="CINNAMON HONEY" />
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white">
              <div className='text-Gold'>CINNAMON HONEY</div>
              <div className='flex gap-[10px]'>
              <div className='line-through'>$12.00</div>
              <div>$9.00</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Arrows */}
        <div ref={prevRef} className="absolute cursor-pointer right-[-2rem] z-50 flex items-center justify-center top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={arrowRight}
            alt="Next"
          />
        </div>
        <div  ref={nextRef} className="absolute cursor-pointer left-[3rem] z-50 flex items-center justify-center top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={arrowLeft}
            alt="Previous"
          />
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
