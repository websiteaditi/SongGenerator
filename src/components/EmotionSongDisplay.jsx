import React, { useState, useEffect } from 'react';

const EmotionSongDisplay = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(''); // Emotion selection
  const [range, setRange] = useState([0, 100]); // Default range selection
  const [song, setSong] = useState(''); // Song result
  const [spotifyLink, setSpotifyLink] = useState(''); // Spotify link for the song

  // Load the emotion and range from localStorage
  useEffect(() => {
    const storedEmotion = localStorage.getItem('emotion');
    const storedRange = localStorage.getItem('range');

    if (storedEmotion && storedRange) {
      setSelectedEmotion(storedEmotion);
      setRange(JSON.parse(storedRange));
    } else {
      // Handle case when data is missing
      console.error('Missing data in localStorage');
    }
  }, []);

  // Once the selectedEmotion and range are set, determine the song
  useEffect(() => {
    if (selectedEmotion && range.length === 2) {
      determineSong(selectedEmotion, range); // Call the function to determine the song
    }
  }, [selectedEmotion, range]);

  // Function to determine the song based on emotion and range
  const determineSong = (emotion, range) => {
    const [min, max] = range;
    let selectedSong = '';
    let link = '';

    if (emotion === 'Happy') {
      selectedSong = max <= 50 ? 'I Want It That Way by Backstreet Boys' : 'Happy by Pharrell Williams';
      link = max <= 50 ? 'https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya?si=5a201a55797c4968' : 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=df54053b8b354506';
    } else if (emotion === 'Sad') {
      selectedSong = max <= 50 ? 'Someone Like You by Adele' : 'The Night We Met by Lord Huron';
      link = max <= 50 ? 'https://open.spotify.com/track/3bNv3VuUOKgrf5hu3YcuRo?si=981525309b694bde' : 'https://open.spotify.com/track/3hRV0jL3vUpRrcy398teAU?si=5abfcc3ee6d04d90';
    } else if (emotion === 'Angry') {
      selectedSong = max <= 50 ? 'Break Stuff by Limp Bizkit' : 'Killing in the Name by Rage Against the Machine';
      link = max <= 50 ? 'https://open.spotify.com/track/5cZqsjVs6MevCnAkasbEOX?si=60a6442ca7fc45ec' : 'https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp?si=fe54aa16ede14aff';
    } else if (emotion === 'Sleepy') {
      selectedSong = max <= 50 ? 'Stay by Rihanna' : 'Landslide by Fleetwood Mac';
      link = max <= 50 ? 'https://open.spotify.com/track/0GNI8K3VATWBABQFAzBAYe?si=67bb23cecedb429e' : 'https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ?si=2752e641d6b049d0';
    }

    setSong(selectedSong);
    setSpotifyLink(link);
  };

  
  const handleGenerate = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200 leading-none">
      <div className="text-center">
        <h2 className="font-bold font-mono text-[180px] text-yellow-300">Here’s <br/>Your Song!</h2>
        <p className="mt-4 text-yellow-300 font-mono font-bold text-[40px]">{song}</p>

        <div className="flex space-x-10 justify-center mt-8">
          
          <button
            onClick={handleGenerate}
            className="mt-7 bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 mb-10 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            GENERATE
          </button>
           {/* Listen button */}
           <a
            href={spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 bg-white hover:bg-gray-100 text-black font-mono font-bold py-4 mb-10 px-6 border-2 border-black rounded-full text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            LISTEN
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmotionSongDisplay;
