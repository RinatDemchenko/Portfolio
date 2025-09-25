"use client";

// Projects data imported from separate configuration file
import { projects } from "../components/projects";
import Project from "../components/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Projects() {
  // TODO: Add category switch for work and hobby projects when work projects are available
  return (
    <div className="w-full overflow-visible px-4 sm:px-8 md:px-12 lg:px-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 45,
            coverflowEffect: {
              rotate: 35,
              stretch: 0,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 45,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            },
          },
        }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <Project {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
