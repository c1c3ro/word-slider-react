function WordList({ words }) {
  return (
    <div className="word-list">
      <h3>Palavras:</h3>
      {words.map((word, i) => (
        <p key={i}>{word}</p>
      ))}
    </div>
  );
}

export default WordList;