import { useState, useRef } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  // Add more properties as needed
}

const CardSlider: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const schema = [
    {
      logo: "logo",
      title: "Andemy",
      text: "debitis culpa repudiandae quiaveritatis sint atque assumenda, ratione porro provident aspernatur laborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
    },
    {
      logo: "logo",
      title: "Pass Me Cash",
      text: "debitis culpa repudiandae quiaveritatis sint atque assumenda, ratione porro provident aspernatur laborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
    },
  ];

  const handleScroll = (scrollType: "next" | "prev") => {
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const sliderScrollWidth = sliderRef.current?.scrollWidth || 0;

    if (scrollType === "next") {
      if (scrollPosition < sliderScrollWidth - sliderWidth) {
        setScrollPosition(scrollPosition + sliderWidth);
      }
    } else if (scrollType === "prev") {
      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - sliderWidth);
      }
    }
  };

  return (
    <div className="card-slider-container">
      <div
        className="card-slider overflow-x-scroll whitespace-nowrap"
        ref={sliderRef}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        <div id="project" className="lg:px-52 lg:pt-20 py-10 ">
          <h3 className="text-2xl font-bold text-justify p-3">My Projects</h3>
          <div className="overflow-x-auto p-5">
            {schema.map((input, i) => (
              <div key={i} className="">
                <div className="grid w-fit h-fit justify-start rounded-md shadow-lg p-3">
                  <div className="justify-center py-3 w-full h-20 place-self-center">
                    {input.logo}
                  </div>
                  <h3 className="font-bold text-2xl capitalize py-6">
                    {input.title}
                  </h3>
                  <p className="text-base">{input.text}</p>
                  <div className="flex gap-1 py-8">
                    <p className="font-md text-lg capitalize">Visit</p>
                    <div className="relative h-6 w-6 grid place-self-center">
                      {/* <Image src="assets/arrow-right-up.svg" fill alt="arrow" /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider-controls mt-4">
        <button
          className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
          onClick={() => handleScroll("prev")}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => handleScroll("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;


// import { useState } from "react";
// import "./styles.css";

// const images =[ 
// Image array - in quotes depressed by comma 
// ];

// export default function App() {
//   const [current, setCurrent] = useState(0);

//   function nextSlide() {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   }

//   function prevSlide() {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   }

//   return (
//     <div>
//       <h2>Project 1: Carousel</h2>
//       <div className="slider">
//         <div className="left-arrow" onClick={prevSlide}>
//           ⬅
//         </div>
//         <div className="right-arrow" onClick={nextSlide}>
//           ⮕
//         </div>
//         {images.map(
//           (image, index) =>
//             current === index && (
//               <div key={image} className="slide">
//                 <img src={image} alt="images" />
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// }x