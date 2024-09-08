# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

My project is a fun game for all kinds of users. Based on their moods they get a song suggestion. First they click on the emoji they feel like and give the percentage of that emotion which they are feeling. After selecting that they click on generate which will give a song! My main aim was to make my website colorful and catchy.

Component Structure:
App.jsx: This is the root component. It contains the main logic for managing the mood selection and displaying the resulting song suggestion.
Section1.jsx: A child component that allows the user to select their mood. It passes the selected mood to the parent (App.js).
Section2.jsx: gives the range/ percentage of the emotion which the user has to input.
EmotionSongDisplay.jsx: A component that contains the array of songs. Based on the selected mood, a random song is selected from this list and displayed as the final song recommendation based on the user’s mood.
Header.jsx: A simple component that displays the header of the application.
Footer.jsx: A component that displays the footer of the application. It contains copyright information, links to external resources and other information.


The state management is handled as follows:

useState manages four state variables:
1. selectedEmotion (stores emotion)
2. range (stores range of values)
3. song (stores the generated song)
4. spotifyLink (stores the Spotify link for the song)
  
useEffect is used twice:
  1. To load selectedEmotion and range from localStorage when the component mounts.
  2. To trigger the determineSong function once both selectedEmotion and range are set.

The determineSong function updates the song and spotifyLink based on the user's emotion and range.

The handleGenerate function reloads the page to re-generate a new song.