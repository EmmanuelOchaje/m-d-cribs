import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import john from "../../assets/images/john doe.jpg";
import jane from "../../assets/images/jane.jpg";
import meena from "../../assets/images/defla.webp";

import "swiper/css";
import "swiper/css/effect-coverflow"; // Corrected typo here
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

const Slider = (props) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      effect="coverflow"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-[400px] flex flex-col">
          <h2 className="text-center text-2xl pt-20">
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-left"></i>
            </span>{" "}
            All lies bro.{" "}
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-right"></i>
            </span>
          </h2>
          <p className="text-center">John Doe</p>
          <p className="text-center font-light">Manchester , UK.</p>
          <img
            src={john}
            alt="Slide 1"
            className="w-[120px] rounded-full m-auto h-[120px]"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] flex flex-col">
          <h2 className="text-center text-2xl pt-20">
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-left"></i>
            </span>{" "}
            All lies bro.{" "}
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-right"></i>
            </span>
          </h2>
          <p className="text-center">Jane Doe</p>
          <p className="text-center font-light">Leeds , UK.</p>
          <img
            src={jane}
            alt="Slide 1"
            className="w-[120px] rounded-full m-auto h-[120px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] flex flex-col">
          <h2 className="text-center text-2xl pt-20">
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-left"></i>
            </span>{" "}
            All lies bro.{" "}
            <span className="text-2xl">
              <i class="bx bxs-quote-alt-right"></i>
            </span>
          </h2>
          <p className="text-center text-[18px] font-normal">Alfred Rich</p>
          <p className="text-center font-light">Bristol , UK.</p>
          <img
            src={meena}
            alt="Slide 1"
            className="w-[120px] rounded-full m-auto h-[120px]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
