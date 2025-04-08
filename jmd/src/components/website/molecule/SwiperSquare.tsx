"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
export default function SwiperSquare({ imgs }: any) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      speed={1000}
    >
      {imgs?.map((i: any, k: any) => (
        <SwiperSlide className=" " key={k}>
          <div className="">
            <Image
              src={i}
              alt={"hospital"}
              width={500}
              height={500}
              className=" object-cover aspect-[3/2] object-top"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
