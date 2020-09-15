import React, {useState} from 'react';

export default function HookState() {
  let [count, setCount] = useState(0)
  let [minovia, setMinovia]= useState('Juanita')

  const handleIncrementCount = ()=>{
    setCount(count+1)
  }
  const handleDecrementCount = ()=>{
    setCount(count-1)
  } 
  const handleName = () =>{
    setMinovia('Gloria')
  }
  return (
    <>
    <h1>Somos bien pros</h1>
    {count}
    <button onClick={handleIncrementCount}>Mas</button>
    <button onClick={handleDecrementCount}>Menos</button>
    

    <h1>{minovia}</h1>
    <button onClick={handleName}>Cambiar nombre</button>
    </>
  );
}
