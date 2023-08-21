import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/DutchVDL")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-soruces article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <div className="bg-yellow-200 text-yellow-800 p-4 mt-4 rounded-md">
        <p>
          Warning: API calls are limited to 50 per month and 1 in every 10
          minutes. If you encounter any errors, this could be the reason.
        </p>
      </div>
    </header>
  );
};

export default Hero;
