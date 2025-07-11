function Tile({ letter, onClick }) {
  return (
    <div className="tile" onClick={onClick}>
      {letter}
    </div>
  );
}

export default Tile;