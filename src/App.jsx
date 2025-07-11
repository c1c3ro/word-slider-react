import { useEffect, useState } from "react";
import Board from "./components/Board";
import WordList from "./components/WordList";
import CookieModal from "./components/CookieModal";
import "./index.css";

function App() {
  const [words, setWords] = useState([]);
  const [board, setBoard] = useState([]);
  const [template, setTemplate] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    async function fetchWords() {
      const fourRes = await fetch("/database/fourWords.json");
      const fourData = await fourRes.json();
      const threeRes = await fetch("/database/threeWords.json");
      const threeData = await threeRes.json();

      const selected = [
        fourData[Math.floor(Math.random() * fourData.length)],
        fourData[Math.floor(Math.random() * fourData.length)],
        fourData[Math.floor(Math.random() * fourData.length)],
        threeData[Math.floor(Math.random() * threeData.length)],
      ];

      setWords(selected);
      const letters = selected.join("").split("");
      const shuffled = shuffle([...letters]);
      setTemplate([...letters, " "]);
      setBoard([...shuffled, " "]);
    }

    fetchWords();
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container">
      <img src="/assets/word-slider-logo.webp" alt="Logo" className="logo" />
      <WordList words={words} />
      <Board
        board={board}
        setBoard={setBoard}
        template={template}
        turns={turns}
        setTurns={setTurns}
      />
      <h1>Movimentos: {turns}</h1>
      <CookieModal />
    </div>
  );
}

export default App;