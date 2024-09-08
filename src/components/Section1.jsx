import React, { useState, useRef } from 'react';

const Section1 = (props) => {
  const emotions = ['Happy', 'Sad', 'Angry', 'Sleepy'];
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [error, setError] = useState(false); // Error state for controlling the popup
  const doneButtonRef = useRef(null); // Ref to the done button

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setError(false); // Clear the error when an emotion is selected
  };

  const handleDoneClick = (event) => {
    event.preventDefault(); 

    if (selectedEmotion === '') {
      setError(true); // Set error if no emotion is selected
    } else {
      localStorage.setItem('emotion', selectedEmotion);
      setError(false); // Clear the error if an emotion is selected

      // Programmatically navigate to the next section
      const nextSection = document.getElementById('2');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("Next section with id '2' not found.");
      }
    }
  };

  const closeModal = () => {
    setError(false); // Close the modal by resetting the error state
  };

  return (
    <div id='1' className="bg-fuchsia-600 relative">
      <div className="flex items-center justify-center">
        <h2 className="text-center text-[180px] font-bold mt-24 font-mono text-yellow-300 leading-none">
          TELL US YOUR <br /> MOOD
        </h2>
      </div>

      <div className="flex justify-center mt-10 space-x-48">
        {emotions.map((emotion, index) => (
          <label key={index} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="emotion"
              value={emotion}
              className="hidden"
              checked={selectedEmotion === emotion}
              onChange={() => handleEmotionClick(emotion)}
            />
            <span
              className={`text-[120px] font-bold transition duration-150 ease-in-out hover:text-gray-500 ${
                selectedEmotion === emotion ? 'text-yellow-300 underline' : 'text-gray-700'
              }`}
            >
              {emotion === 'Happy' && '😀'}
              {emotion === 'Sad' && '😢'}
              {emotion === 'Angry' && '😠'}
              {emotion === 'Sleepy' && '😴'}
            </span>
          </label>
        ))}
      </div>

      <div className="text-center">
        <a href='#2'>
        <button
          ref={doneButtonRef}
          className="mt-7 mb-10 bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          onClick={handleDoneClick}
        >
          DONE
        </button></a>
      </div>

      {/* Modal Popup */}
      {error && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" role="dialog" aria-labelledby="error-title" aria-live="assertive">
          <div className="bg-yellow-300 p-8 rounded-lg shadow-lg text-center">
            <p id="error-title" className="text-black font-bold text-lg mb-4">Please select an emotion!</p>
            <button
              className=" bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="col-span-full">{props.children}</div>
    </div>
  );
};

export default Section1;
