import { useState, useEffect } from 'react'; // Add useEffect to the import
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Open from './components/Open';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import EmotionSongDisplay from './components/EmotionSongDisplay';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // Clear localStorage when the component mounts
      localStorage.clear();
    }, []);

  return (
    <>
      <Header />
      <Open />
      <Section1 />
      <Section2 />
      <EmotionSongDisplay />
      <Footer />
    </>
  );
}

export default App;
