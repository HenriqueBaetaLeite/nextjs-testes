import { useState } from 'react';
import '../pages/style.css';

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
      <h2>{count}</h2>
      <div>
        <button onClick={plusOne}>Adicionar</button>
        <button onClick={delOne}>Remover</button>
      </div>
    </div>
  );
};

export default Home;
