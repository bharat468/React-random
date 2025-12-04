import React, { useState } from 'react'
import './App.css'
import dice1 from "../public/image/dice_1.png"
import dice2 from "../public/image/dice_2.png"
import dice3 from "../public/image/dice_3.png"
import dice4 from "../public/image/dice_4.png"
import dice5 from "../public/image/dice_5.png"
import dice6 from "../public/image/dice_6.png"
import questionmark from "../public/image/qustion mark.avif"


const number = []
for (let i = 1; i <= 100; i++) {
  number.push(i)
}



function App() {
  const dices = { 1: dice1, 2: dice2, 3: dice3, 4: dice4, 5: dice5, 6: dice6 };
  const [image, setImage] = useState(questionmark)
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(number)
  const [numberarr, setNumberarr] = useState([])

  function handleRandom() {
    const randomindex = Math.floor(Math.random() * 6) + 1;
    var total = count + randomindex;

    if (total > 100) {
      alert("“आज इतना ही, बाकी कल।”");
      total = 0;
      setNumberarr([]);
      setImage(questionmark);
      setCount(0);
      return;
    }

    setImage(dices[randomindex]);
    setCount(total);

    setNumberarr(obj => [...obj, total])

  }

function handleUndo() {
    if (numberarr.length === 0) return;

    const newNumberarr = [...numberarr];
    newNumberarr.pop();
    const lastNumber = newNumberarr.length > 0 ? newNumberarr[newNumberarr.length - 1] : 0;

    setNumberarr(newNumberarr);
    setCount(lastNumber);
    setImage(lastNumber === 0 ? questionmark : dices[lastNumber % 6 === 0 ? 6 : lastNumber % 6]); 
}

  return (
    <div>
      <div className='numberhead'>
        {num.map((obj) => (
          <div
            key={obj}
            className={numberarr.includes(obj) ? 'activebox' : 'box'}
          >
            {obj}
          </div>
        ))}
      </div>
      <div className='btnBox'>
        <button onClick={handleRandom}>click me</button>
        <button onClick={handleUndo}>Undo</button>

      </div>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <h2>Total: {count}</h2>
    </div>
  )
}

export default App
