/* eslint-disable no-fallthrough */
import { useState } from 'react';
import React from 'react';
import './App.css';
import Title from './Components/Title';
import Input from "./Components/Input";
// import Output from "./Components/Output";
import {evaluate, isUndefined} from 'mathjs';
import Button from './Components/Button';

function App() {
  const[numbers, setNumbers] = useState("")
  const[answer, setAnswer] = useState("")
  const[write, setWrite] = useState(true)


  // let inputType = write ? "numbers" : "answer";

  const submitHandler = (e) => {
    setWrite(!write)
    e.preventDefault();
    const value = e.target.value;
    

    switch (value) {
      
      case '=': {
        if (numbers !== "") {
          let result = ""
          try {
            result = evaluate(numbers)
          } catch (err) {
            setAnswer('Math Error')
          }
          if (isUndefined(result)) setAnswer("Math Error")
          else {
            setAnswer(result)
            setNumbers("")
          }
          break
        }
      }
      case 'Delete': {
        const str = numbers.substr(0, numbers.length - 1);
        setNumbers(str);
        break;
      }
      case 'AC': {
        setNumbers("");
        setAnswer("");
        break;
      }
    default: {
      setNumbers((prevNumbers) => prevNumbers + value)
      setAnswer("")
    }
  }
}
  return (
    <main>
      <Title />
      <div className='fullApp'>
        {/* <Title /> */}
        <Input value={numbers ? numbers : answer} className={numbers ? "numbers" : "answer"}/>
        <Button onClick={submitHandler}/>
      </div>
    </main>
  );
}

export default App;
