"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [valor, setValor] = useState(1);

  function rolarDado() {
    const numero = Math.floor(Math.random() * 6) + 1;
    setValor(numero);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Jogo de Dados</h1>

      <Dado valor={valor} />

      <br /><br />

      <button onClick={rolarDado}>
        Rolar Dado 🎲
      </button>
    </div>
  );
}