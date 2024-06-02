import React from "react";
import reactLogo from "../assets/react.svg";

export const Header = ({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) => {
  return (
    <header className="border-b-2 border-gray-700 text-gray-700">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-5 lg:px-10 py-5">
        <a href="/" className="flex items-center mb-4 md:mb-0">
          <img src={reactLogo} alt="React" />
          <span className="text-2xl font-bold ml-3">
            {lang === "ja" ? "ポートフォリオ" : "PORTFOLIO"}
          </span>
        </a>
        <nav className="flex items-center space-x-5">
          <a href="/Home" className="hover:text-blue-500">
            Home
          </a>
          <a href="/About" className="hover:text-blue-500">
            About
          </a>
          <a href="/Skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="/Blog" className="hover:text-blue-500">
            Blog
          </a>
          <select
            className="bg-gray-500 text-white px-2 py-1 rounded-md"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </nav>
      </div>
    </header>
  );
};
