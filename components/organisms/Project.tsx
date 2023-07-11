import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Project = () => {
  const scroll = useRef<HTMLDivElement>(null);

  scroll.current !== null && console.log();

  const slide = (direction: string) => {
    if (scroll.current) {
      direction === "right" && (scroll.current.scrollLeft += 1000);
      direction === "left" && (scroll.current.scrollLeft -= 1000);
    }
  };
  const schema = [
    {
      logo: "logo",
      title: "Andemy Academy",
      text: " laborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "https://www.andemyacademy.com/",
    },
    {
      logo: "logo",
      title: "Pass Me Cash",
      text: "aborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "",
    },
    {
      logo: "logo",
      title: "ChurchNotes",
      text: "aborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "",
    },
    {
      logo: "logo",
      title: "ChurchNotes",
      text: "aborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "",
    },
    {
      logo: "logo",
      title: "ChurchNotes",
      text: "aborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "",
    },
    {
      logo: "logo",
      title: "ChurchNotes",
      text: "aborum dolorum perferendis deleniti earum! Explicabo commodi, quas placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?",
      link: "",
    },
  ];

  return (
    <div className="relative lg:px-52 lg:pt-20 py-10 overflow-hidden">
      <h3 className="text-2xl font-bold text-justify p-3">My Projects</h3>
      <button
        className="p-2 border rounded-full absolute bottom-[50%] md:left-10 left-3"
        onClick={() => slide("left")}
      >
        <MdArrowBackIosNew size="22" />
      </button>
      <div
        className="flex gap-3 overflow-hidden snap-x scroll-smooth snap-mandatory"
        ref={scroll}
      >
        {schema.map((input, i) => (
          <div key={i}>
            <div className="w-fit h-fit justify-start rounded-md shadow-lg p-3">
              <div className="justify-center py-3 w-full h-20 place-self-center">
                {input.logo}
              </div>
              <h3 className="font-bold text-2xl capitalize py-6">
                {input.title}
              </h3>
              <p className="text-base w-72 mb-8">{input.text}</p>
              <Link
                href={input.link}
                className="flex gap-1 border border-[#00A86B] rounded-md px-2 w-20 hover:bg-[#00A86B]"
              >
                <p className="font-md text-lg capitalize">Visit</p>
                <div className="relative h-6 w-6 grid place-self-center">
                  <Image src="assets/arrow-right-up.svg" fill alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => slide("right")}>
        <button className="p-2 border rounded-full absolute bottom-[50%] md:right-10 right-3">
          <MdArrowForwardIos size="22" />
        </button>
      </div>
    </div>
  );
};

export default Project;
