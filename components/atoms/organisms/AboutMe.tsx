import Carousel from "../atoms/Carousel";

const AboutMe = () => {
  const data = [
    {
      text: "Hmtl",
      icon: "",
    },
    {
      text: "CSS",
      icon: "",
    },
    {
      text: "Javascript",
      icon: "",
    },
    {
      text: "React",
      icon: "",
    },
    {
      text: "Tailwind",
      icon: "",
    },
  ];
  return (
    <div className="p-3 place-self-center md:px-52 py-10">
      <p className="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo,
        exercitationem molestias reiciendis ex eaque ullam nemo labore
        laboriosam itaque excepturi culpa ducimus placeat blanditiis fugiat
        dolorum debitis et in porro obcaecati impedit. Facilis molestias fuga
        magnam voluptatem amet iure fugiat excepturi alias sequi, cum, libero
        adipisci dignissimos et quas quibusdam aspernatur odit harum laborum
        nemo repellendus obcaecati. Voluptatum in nesciunt ut molestiae ad
        fugiat! Dolores ut dicta ipsa vitae, debitis culpa repudiandae quia
        veritatis sint atque assumenda, ratione porro provident aspernatur
        laborum dolorum perferendis deleniti earum! Explicabo commodi, quas
        placeat minus eaque dolor consequatur voluptas, veritatis harum quis ab?
      </p>
      <div className="container mx-auto flex gap-3">
        <Carousel>
        {data.map((input, i) => (
          <div
            key={i}
            className="flex gap-3 w-fit items-center shadow-lg rounded-md text-center p-3"
          >
            <div>{input.icon}</div>
            <p className="text-lg text-black font-bold capitalize">
              {input.text}
            </p>
          </div>
        ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutMe;
