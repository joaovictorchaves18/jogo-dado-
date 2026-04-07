"use client";

import { useState } from "react";
import JogoDados from "./componentes/Jogo-dados";

export default function Home() {
  const [rodada, setRodada] = useState(1);
  const [jogadorAtual, setJogadorAtual] = useState(1);

  const [dadosJ1, setDadosJ1] = useState([1, 1]);
  const [dadosJ2, setDadosJ2] = useState([1, 1]);

  const [resultado, setResultado] = useState("");
  const [placar, setPlacar] = useState({ j1: 0, j2: 0 });

  function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogar() {
    const d1 = rolarDado();
    const d2 = rolarDado();

    // 🎯 Jogador 1
    if (jogadorAtual === 1) {
      setDadosJ1([d1, d2]);
      setJogadorAtual(2);
    } 
    // 🎯 Jogador 2
    else {
      setDadosJ2([d1, d2]);

      const somaJ1 = dadosJ1[0] + dadosJ1[1];
      const somaJ2 = d1 + d2;

      if (somaJ1 > somaJ2) {
        setResultado("🏆 Jogador 1 venceu a rodada");
        setPlacar((p) => ({ ...p, j1: p.j1 + 1 }));
      } else if (somaJ2 > somaJ1) {
        setResultado("🏆 Jogador 2 venceu a rodada");
        setPlacar((p) => ({ ...p, j2: p.j2 + 1 }));
      } else {
        setResultado("🤝 Empate");
      }

      setRodada((r) => r + 1);
      setJogadorAtual(1);
    }
  }

  function reiniciar() {
    setRodada(1);
    setJogadorAtual(1);
    setDadosJ1([1, 1]);
    setDadosJ2([1, 1]);
    setResultado("");
    setPlacar({ j1: 0, j2: 0 });
  }

  const acabou = rodada > 5;

  function resultadoFinal() {
    if (placar.j1 > placar.j2) return "🥇 Jogador 1 venceu o jogo!";
    if (placar.j2 > placar.j1) return "🥇 Jogador 2 venceu o jogo!";
    return "🤝 Empate geral!";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Jogo de Dados</h1>
      <h2>📍 Rodada: {rodada <= 5 ? rodada : 5}</h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>👤 Jogador 1</h3>
          <Dado valor={dadosJ1[0]} />
          <Dado valor={dadosJ1[1]} />
        </div>

        <div>
          <h3>👤 Jogador 2</h3>
          <Dado valor={dadosJ2[0]} />
          <Dado valor={dadosJ2[1]} />
        </div>
      </div>

      <h3>{resultado}</h3>

      {!acabou ? (
        <button onClick={jogar}>
          {jogadorAtual === 1
            ? "🎯 Jogar Jogador 1"
            : "🎯 Jogar Jogador 2"}
        </button>
      ) : (
        <>
          <h2>{resultadoFinal()}</h2>
          <button onClick={reiniciar}>🔄 Jogar Novamente</button>
        </>
      )}

      <h4>
        📊 Placar: {placar.j1} x {placar.j2}
      </h4>
    </div>
  );
}
