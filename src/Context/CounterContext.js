import { createContext, useState } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider() {


  let [counter, setcounter] = useState(0);
  function incress(){
    setcounter(Math.random())
  }
  return (
    <CounterContext.Provider value={{ counter,incress }}>

    </CounterContext.Provider>
  );
}
