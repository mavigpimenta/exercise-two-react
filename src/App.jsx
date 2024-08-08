import { useState, useEffect } from 'react';
import sol from '/a-sol.png';
import lua from '/a-lua.png';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date()); 
  const [colorTheme, setColorTheme] = useState(false);
  const [count, setCount] = useState(0);

  const increment = (value) => setCount(count + value); // incrementa o vfalor passado no botao no onClicl
  const decrement = (value) => setCount(count - value); //decremenra o valor passado no botao no onClicl
  const reset = () => setCount(0); // reseta o valor para zero

  useEffect(() => {
    document.body.className = colorTheme ? 'bg-gray-900' : 'bg-white'; // muda a cor do body 
  }, [colorTheme]);

  useEffect(() => {
    const hour = setInterval(() => setTime(new Date()), 1000); // atualiza o horario em tempo real
    return () => clearInterval(hour);
  }, []);

  return (
    <body>
      <div className="min-h-screen flex flex-col w-full h-screen"> 
      {/* nav bar com o icone de mudanca de tema */}
        <div className="bg-gray-700 text-white p-4">
          <div className="container mx-auto flex justify-end">
            <button onClick={() => setColorTheme(!colorTheme)}>
              <img className="w-8 h-8" src={colorTheme ? lua : sol} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center p-4 items-center w-full h-screen">
          <div className="bg-gray-700 rounded p-4 items-center">
            {/* div para mostrar o horario atual */}
            <p className="text-gray-800 dark:text-gray-200 text-2xl">{time.toLocaleTimeString()}</p>
          </div>
          <div className="flex flex-col gap-4 p-4 items-center bg-slate-200 dark:bg-gray-700 rounded">
            <div>
              {/* div para mostrar a contagem */}
              <h1 className="text-4xl text-white">{count}</h1>
            </div>
            <div>
              {/* botoes para incrementar e decrementar */}
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => decrement(10)}>-10</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded ml-4" onClick={() => decrement(1)}>-1</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-4" onClick={reset}>Zerar</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-4" onClick={() => increment(1)}>+1</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-4" onClick={() => increment(10)}>+10</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
