export default function Dado({ valor }) {
  const valorValido = Math.min(6, Math.max(1, valor));

  const dados = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅",
  };

  return (
    <div style={{ fontSize: "100px" }}>
      {dados[valorValido]}
    </div>
  );
}