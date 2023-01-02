import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";

const App = () => {
  const [title, setTitle] = useState("Click me");
  //  console.log(title)

  function printHello(): void {
    console.log("Hello!");
  }
  const myArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor. ",
    "Life is what happens when youre busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
  ];
  return (
    <div className="App">
      <header>
        <title>ryttdrydt</title>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Best Quotes of All Time
        </a>
      </header>

      <body>
        <div className="h-full border-3 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-10 hover:bg-blue-900 hover:text-white transition duration-3 ease-in">
            <h1 className="text-2xl font-semibold mb-3">Hover</h1>
          </div>
        </div>{" "}
        <Home
          param={title}
          countVal={(e: any) => {
            console.log(e);
          }}
        />{" "}
      </body>
    </div>
  );
};

export default App;
