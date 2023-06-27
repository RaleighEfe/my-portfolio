import Image from "next/image";
import Cards from "../atoms/Cards";
import SectionLayout from "./SectionLayout";
import SectionTitle from "../atoms/SectionTitle";
const Project = () => {
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
  return (
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
                  <Image src="assets/arrow-right-up.svg" fill alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
