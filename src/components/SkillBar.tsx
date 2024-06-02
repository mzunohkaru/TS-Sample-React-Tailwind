import React from "react";

export const SkillBar = ({
  skill,
  level,
}: {
  skill: string;
  level: number;
}) => {
  return (
    <div className="w-full">
      <h2>{skill}</h2>
      <div className="shadow bg-green-100 mt-2 w-full">
        <div>
          <div
            className="bg-green-500 text-xs leading-none py-1 text-center text-white"
            style={{ width: `${level}%` }}
          >
            {level}%
          </div>
        </div>
      </div>
    </div>
  );
};
