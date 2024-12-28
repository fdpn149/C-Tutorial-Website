import './App.css'

import { useEffect, useState } from 'react'

function App() {

  const [keyframes, setKeyframes] = useState(null);

  useEffect(() => {
    const rules = document.styleSheets[1].cssRules[1];
    setKeyframes(rules);
    console.log(rules);
  }, [])

  return (
    <>
      <div id="test"></div>
      <button id="btn" onClick={() => {
        if (keyframes) {
          console.log(keyframes.findRule('50%'));
          keyframes.deleteRule('50%');
          console.log(keyframes);
          keyframes.appendRule('50% {left:100px; background:#000;}');
          console.log(keyframes);
        }
      }}>更換動畫內容</button>
    </>
  )
}

export default App
