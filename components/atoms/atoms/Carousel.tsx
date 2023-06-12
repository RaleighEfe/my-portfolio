// import { useState } from "react";

type CarouselProps = {
  children: string;
};

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + children.length) % children.length
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="carousel-container">
//         {children.map((child, index) => (
//           <div
//             key={index}
//             className={`carousel-slide ${
//               index === currentIndex ? "active" : ""
//             }`}
//           >
//             {children}
//           </div>
//         ))}
//       </div>

//       <button className="carousel-control prev" onClick={prevSlide}>
//         Previous
//       </button>
//       <button className="carousel-control next" onClick={nextSlide}>
//         Next
//       </button>

//       <style jsx>{`
//         .carousel-container {
//           display: flex;
//           transition: transform 0.3s;
//         }

//         .carousel-slide {
//           flex: 0 0 100%;
//           width: 100%;
//           opacity: 0;
//           visibility: hidden;
//           transition: opacity 0.3s, visibility 0.3s;
//         }

//         .carousel-slide.active {
//           opacity: 1;
//           visibility: visible;
//         }

//         .carousel-control {
//           position: relative;
//           top: 50%;
//           transform: translateY(-50%);
//           padding: 0.5rem 1rem;
//           border: 0.5rem;
//           background-color: #00a86b;
//           color: #fff;
//           cursor: pointer;
//           z-index: 1;
//         }

//         .carousel-control.prev {
//           left: 0;
//         }

//         .carousel-control.next {
//           right: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ children }: CarouselProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
