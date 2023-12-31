import './App.css';
import Square from './Components/Square';
import Input from './Components/Input';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState("")
  const [hexValue, setHexValue] = useState("")
  return (
    <div className="App">
      <Square colorValue={colorValue}
        hexValue={hexValue}
      />
      <Input colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}/>
    </div>
  );
}

export default App;
