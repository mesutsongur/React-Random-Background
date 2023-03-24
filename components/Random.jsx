import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
  }

  return (
    <div className="App">
      <button onClick={changeBackground}>Change background color</button>
    </div>
  );
}

export default App;
