import { useState } from 'react';

const Home = () => {
  return (
    <div>
      <h2>Aqui é a home</h2>
      <Contador />
    </div>
  );
};

const Contador = () => {
  const [count, setCount] = useState(1);

  const plusOne = () => setCount(count + 1);
  const delOne = () => setCount(count - 1);
  return (
    <div>
      <span>{count}</span>
      <button onClick={plusOne}>Adicionar</button>
      <button onClick={delOne}>Remover</button>
    </div>
  );
};

export default Home;
