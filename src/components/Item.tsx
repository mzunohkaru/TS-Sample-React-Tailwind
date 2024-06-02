import React from "react";

export const Item = () => {
  return (
    <div className="md:w-1/3 p-4">
      <div className="bg-gray-100 rounded-lg p-5">
        <div className="flex items-center mb-3">
          <div className="bg-green-500 text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125Z" />
            </svg>
          </div>
          <h2 className="text-gray-900 text-xl font-medium ml-2">
            Web Developer
          </h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            nesciunt quis asperiores quibusdam ullam excepturi molestiae ut a
            enim perspiciatis, minima accusantium voluptate accusamus. Quam est
            aperiam tempore? Iusto, vel?
          </p>
          <a href="/" className="flex items-center mt-3 text-green-500">
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.75 12h14.5m0 0l-3.75-3.75m3.75 3.75l-3.75 3.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
