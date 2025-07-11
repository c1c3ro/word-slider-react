import Tile from "./Tile";

const Board = ({ board, setBoard, template, turns, setTurns }) => {
  const handleClick = (index) => {
    const adjacentIndices = [index - 1, index + 1, index - 4, index + 4];
    const blankIndex = board.indexOf(" ");

    if (adjacentIndices.includes(blankIndex)) {
      const newBoard = [...board];
      [newBoard[index], newBoard[blankIndex]] = [newBoard[blankIndex], newBoard[index]];
      setBoard(newBoard);
      setTurns(turns + 1);

      if (JSON.stringify(newBoard) === JSON.stringify(template)) {
        alert(`Parabéns! Você venceu com ${turns + 1} movimentos!`);
      }
    }
  };

  return (
    <div className="board">
      {board.map((letter, index) => (
        <Tile key={index} letter={letter} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;