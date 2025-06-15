import React from "react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const desktopImages = import.meta.glob(
  "/src/assets/carousel/desktop/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);
const tabImages = import.meta.glob(
  "/src/assets/carousel/tab/*.{jpg,jpeg,png,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const imageListD = Object.values(desktopImages);
const imageListT = Object.values(tabImages);

const Hero = () => {
  const swiperProps = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    className: "mySwiper",
  };

  return (
    <div className="relative w-full h-fit">
      {/* Tablet/Mobile Swiper */}
      <div className="block md:hidden">
        <Swiper {...swiperProps}>
          {imageListT.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Tab ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Swiper */}
      <div className="hidden md:block w-full">
        <Swiper {...swiperProps}>
          {imageListD.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Desktop ${idx + 1}`}
                className="w-full h-[700px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-10 z-1 text-gray-500 w-full text-center space-y-5">
        <h3 className="lg:text-5xl sm:text-3xl text-xl font-bold">
          Craft the Perfect Dining Experience.
        </h3>
        <p className="lg:text-2xl sm:text-xl  xl:w-1/2 mx-auto">
          From kitchen to customer, streamline every step. MealMind helps
          restaurants serve smarter, faster, and more beautifully — all on one
          platform.
        </p>
        <Link to={"foods"}>
          <button className="btn">See All Foods</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
