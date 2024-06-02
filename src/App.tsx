import React, { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { SkillBar } from "./components/SkillBar";

function App() {
  const [lang, setLang] = useState("ja");

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Home lang={lang} />
      <About lang={lang} />

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <img
              src="src/assets/pc.png"
              alt="pc"
              className="rounded-lg w-[500px]"
            />
          </div>
          {/* Right Side */}
          <div className="pl-6 py-3 lg:pl-12 lg:py-6 w-full">
            <h1 className="text-3xl sm:text-3xl font-medium text-gray-900 mb-10">
              Skills
            </h1>
            <div className="flex flex-col gap-4">
              <SkillBar skill="HTML" level={72} />
              <SkillBar skill="CSS" level={65} />
              <SkillBar skill="JavaScript" level={95} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
