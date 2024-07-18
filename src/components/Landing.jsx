import React, { useState, useEffect } from 'react';

function Landing() {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdditionalContent(true);
    }, 2000); // Delayed timer to match a 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  
  const maskers = [
    { text: 'WE CREATE' },
    { text: 'EYE-OPENING' },
    { text: 'PRESENTATIONS' }
  ];

  return (
    <div className="w-full h-screen bg-zinc-900 pt-[.5px]">
      <div className="uppercase tracking-tight textstructure mt-52 px-10">
        {maskers.map(({ text }, index) => (
          <div className="masker flex items-center" key={index}>
            {index === 1 && showAdditionalContent && (
              <div className="z-[9999] additional-content transition-opacity duration-[3000ms] ease-in-out opacity-100">
                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="Placeholder Image" className="w-[13vw] h-[7vw] rounded-md" />
              </div>
              
            )}
            <h1 className="text-[7vw] leading-[6.5vw] tracking-tight font-bold font-['Neue_Montreal']">
              {text}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-16"></div>
      <div className="texts flex mt-5 justify-between ml-12 mr-16">
        <p className="leading-tight opacity-70">For public and private companies</p>
        <p className="leading-tight opacity-70">From the first pitch to IPO</p>
        <button className="uppercase border-[1px] hover:bg-white hover:text-black font-light hover:border-[2px] border-zinc-700 py-1 px-5 rounded-[2vw]">Start the project</button>
      </div>
    </div>
  );
}

export default Landing;
