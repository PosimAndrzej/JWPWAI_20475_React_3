"use client"
import React, { useState, useReducer, useEffect, useContext, useRef } from 'react';
import Zad1 from './zad1';

function countReducer(state, action){
    switch(action.type){
      case 'increment':
        return state+1;
      case 'decrement':
        return state-1;
    }
}
const AppContext = React.createContext();

export default function Home() {
  const [klikacz, setKlikacz] = React.useState(0);
  const [wynik, dispachWynik] = React.useReducer(countReducer, 0);
  useEffect(() => {
    console.log('Komponent został zamontowany lub wynik zmieniony:', wynik);
    return () => {
      console.log('Czyszczenie zasobów przy odmontowaniu komponentu');
    };
  }, [wynik]);
  const inputRef = useRef(null);
  const [globalState, setGlobalState] = useState(15);
  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      <div>
        <h1>Zad1</h1>
        <h1>Studenci:</h1>
        <hr></hr>
          <Zad1 name="Andrzej Posim" index={20475} semester={5}/>
          <Zad1 name="Tomasz Adacki" index={21033} semester={3}/>
        <br></br>
        <h1>Zad2</h1>
        <button onClick={() => setKlikacz(klikacz+1)}>Kliknięto: {klikacz}</button>
        <hr></hr>
        <p>Wynik: {wynik}</p>
        <button onClick={() => dispachWynik({type: 'increment'})}>+</button>
        <button onClick={() => dispachWynik({type: 'decrement'})}>-</button>
        <br />
        <h2>Wartość globalna: {globalState}</h2>
        <br></br>
        <h2>useRef :</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Kliknij przycisk aby sfokusować"
        />
        <button onClick={() => inputRef.current.focus()}>Fokus na input</button>
      </div>
    </AppContext.Provider>
  );
}
