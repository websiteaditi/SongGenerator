import React, { useState, useRef } from 'react';

const Section2 = (props) => {
  const [emotionPercentage, setEmotionPercentage] = useState(0);
  const [rangeArray, setRangeArray] = useState([0, 50]);
  const [error, setError] = useState(false);
  const nextSectionRef = useRef(null);

  const handleEmotionPercentageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setEmotionPercentage(value);
    

    // Update the rangeArray based on the value
    if (value <= 50) {
      setRangeArray([value, rangeArray[1]]);
    } else {
      setRangeArray([rangeArray[0], value]);
    }

    setError(false); 
  };

  const handleFinishClick = (event) => {
    event.preventDefault(); 

    if (emotionPercentage === 0) {
      setError(true); // Show error if no value is selected
    } else {
      localStorage.setItem('range', JSON.stringify(rangeArray));
      setError(false); // Clear error if the value is valid

      // Smoothly scroll to the next section
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeModal = () => {
    setError(false); // Close the modal
  };

  return (
    <div>
  
      <div id='2' className="bg-red-300 relative">
        <div className="text-center">
          <h1 className="font-mono leading-none text-red-500 pt-16">
            <span className="text-[180px] font-bold">ENTER THE</span><br />
            <span className="text-[120px] font-semibold">PERCENTAGE OF</span><br />
            <span className="text-[180px] font-bold">YOUR EMOTION</span>
          </h1>
        </div>

        <div className="flex items-center w-3/4 mx-auto">
          <span className="text-lg font-bold font-mono text-red-500">0%</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={emotionPercentage}
            onChange={handleEmotionPercentageChange}
            className="border-2 border-black w-full h-24 mx-4"
          />
          <span className="text-lg font-bold font-mono text-red-500">{emotionPercentage}%</span>
        </div>

        <div className="text-center">
          <a href='#section3' onClick={handleFinishClick}>
            <button
              className="mt-7 mb-10 bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              FINISH
            </button>
          </a>
        </div>

        {/* Modal Popup */}
        {error && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-yellow-300 p-8 rounded-lg shadow-lg text-center">
              <p className="text-black font-bold text-lg mb-4">Please select a value for your emotion percentage!</p>
              <button
                className="bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      
      <div id='section3' ref={nextSectionRef} className="col-span-full">
        {props.children}
      </div>
    </div>
  );
};

export default Section2;
