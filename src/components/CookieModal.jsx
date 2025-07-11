import { useEffect, useState } from "react";
import "./CookieModal.css";

const CookieModal = () => {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("acceptCookies");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    setFadeOut(true);
    setTimeout(() => {
      localStorage.setItem("acceptCookies", "true");
      setShow(false);
    }, 600); // tempo da animação
  };

  if (!show) return null;

  return (
    <div className={`cookie-modal ${fadeOut ? "fade-out" : ""}`}>
      <div className="cookie-box">
        <h2>Como jogar?</h2>
        <p>
          Mova as letras clicando ou arrastando para o espaço vazio. Complete as palavras na ordem correta. Ao concluir, uma nova rodada se inicia.
        </p>
        <p>
          Este site usa cookies para salvar seu progresso. Ao clicar em "Continuar", você aceita isso.
        </p>
        <button onClick={handleAccept}>Continuar</button>
      </div>
    </div>
  );
};

export default CookieModal;