import React from 'react';

const Open = (props) => {
  const handleScroll = () => {
    const targetSection = document.getElementById('1');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='Open'className="bg-violet-400">
      <h1 className="font-mono leading-none text-yellow-300 text-center pt-8">
        <span className="text-[180px] font-bold">FIND YOUR</span><br />
        
        <div className="flex flex-wrap justify-center">
          <span className="text-[120px] font-semibold mr-16">MUSIC</span>
          <img src="image 3.png" alt="Music Mood" className="w-1/6 animate-pulse" style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)' }} />
          <span className="text-[120px] font-semibold" style={{ marginLeft: '200px' }}>DEPENDING</span>
        </div>
        <span className="text-[180px] font-bold">ON YOUR MOOD</span>
      </h1>


      <div className="text-center">
        <button
          onClick={handleScroll}
          className="mt-7 bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 mb-10 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          START
        </button>
      </div>

      <div className="col-span-full">
        {props.children}
      </div>
    </div>
  );
};

export default Open;
