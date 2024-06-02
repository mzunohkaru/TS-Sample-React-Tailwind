import React from "react";
import { Item } from "./Item";

export const About = ({ lang }: { lang: string }) => {
  return (
    <section className="text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-5 lg:px-10 py-5">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-xl font-bold pb-5">
            {lang === "ja"
              ? "プログラマです。"
              : "I'm a programmer who loves to code and learn new things."}
          </p>
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellat perspiciatis, magnam rerum eos esse corrupti nesciunt a
            aperiam sint accusantium laborum ratione maiores ipsa officiis
            voluptatum fugit commodi illum.
          </p>
        </div>
        <div className="flex flex-wrap">
          {[1, 2, 3].map((_, index) => (
            <Item key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
