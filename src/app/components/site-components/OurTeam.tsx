import React from "react";

const trainers = [
  {
    name: "Aline Niyomungeli",
    email: "aline@withintech.org",
    title: "CEO, WithintechRwanda",
    image: "/images/ceo.jpg",
  },
  {
    name: "Pacifique Murangwa",
    email: "pacifique@withintech.org",
    title: "Mentor, Software Engineer",
    image: "/images/heromain.jpg",
  },
  {
    name: "Iris Ngabo",
    email: "iris@withintech.org",
    title: "Mentor, Software Engineer",
    image: "/images/heromain.jpg",
  },
  {
    name: "Igor Bisizi",
    email: "igor@@withintech.org",
    title: "Mentor, Software Engineer",
    image: "/images/heromain.jpg",
  },
  {
    name: "Cynthia Umwali",
    email: "cynthia@withintech.org",
    title: "Mentor, Software Engineer",
    image: "/images/heromain.jpg",
  },
  {
    name: "Ndizihiwe Regis",
    email: "regis@withintech.org",
    title: "Mentor, Software Engineer",
    image: "/images/heromain.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="mt-14 w-full lg:mt-0 py-4 lg:py-24">
      <div className="mx-auto lg:max-w-7xl px-6 lg:px-16 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary pb-6 lg:pb-12 max-w-sm text-center">
          Learn More About Your Trainer
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 justify-items-center">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative w-42 sm:w-56 aspect-[3/4] bg-cover bg-center rounded-sm shadow-md flex items-end hover:shadow-md cursor-pointer"
              style={{ backgroundImage: `url('${trainer.image}')` }}
            >
              <div className="relative bg-white/90 p-3 rounded-sm text-center mx-auto w-11/12 shadow-lg mb-5">
                <p className="text-[11px] sm:text-sm font-semibold text-primary">{trainer.name}</p>
                <p className="text-[8px] sm:text-xs text-black mt-1">{trainer.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
