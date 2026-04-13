import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/marketplace";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonial() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          tag="Testimonials"
          title="Loved by Thousands"
          description="See what our customers have to say"
        />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-testimonials",
            prevEl: ".swiper-button-prev-testimonials",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          className="pb-10 relative"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev swiper-button-prev-testimonials" />
          <div className="swiper-button-next swiper-button-next-testimonials" />
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
