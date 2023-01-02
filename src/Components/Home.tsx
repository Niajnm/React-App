import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Home = ({ param, countVal }: any) => {
  const [count, setValue] = useState(0);

    function randomVal():number {
   return Math.floor(Math.random() * 6);
   // clicked(Math.floor(Math.random() * 6));
  }

   

  useEffect(() => {
    console.log(count);

    // console.log( 'send data ')
    // console.log( param.title)
  }, [count]);

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
      <header className="App-header">
        <h1>{count}</h1>
        <h1 className="App-link"> "{myArray[count]}"</h1>

      
          {/* <button onClick={() => {setValue(randomVal) 
          countVal(count)
          
          
          }}>{param}</button> */}

  <button className="px-4 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"onClick={() => {setValue(randomVal) 
          countVal(count)
          
          
          }}>{param}</button>
  
       
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>

      <body> </body>
    </div>
  );
};

export default Home;
