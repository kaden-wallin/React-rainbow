import React, { useState } from 'react';
import ColorBlock from './ColorBlock';

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])

    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors(['violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red', newColor])
    }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>

  );
}

function ColorForm(props){
    let [input, setInput] = useState('')

    return (
        <div>
            <form>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default App;
