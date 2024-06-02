import React from "react";
import person from "../assets/person.png";

export const Home = ({ lang }: { lang: string }) => {
  return (
    <section className="container mx-auto px-5 lg:px-10 py-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-grow w-full mb-10 md:w-1/2 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-gray-800">
            HI!
            <br />
            I'm Hikaru
            <br />
            {lang === "ja" ? "プログラマ" : "Programmer"}
          </h1>
          <p className="text-xl font-bold">
            I'm a programmer who loves to code and learn new things.
          </p>
          <button className="bg-green-500 text-white px-5 py-2 mt-4 rounded-md border-0 duration-300 hover:bg-gray-200 hover:text-black">
            Contact
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={person} alt="堀北真希" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};