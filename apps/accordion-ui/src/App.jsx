import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Accordion from './Accordion';
import { useState } from 'react';

function App() {

  const [multiSelect, setMultiSelect] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setMultiSelect(!multiSelect)}>
          {multiSelect ? "Switch to single selection" : "Switch to multiple selection"}</button>
        <h1>Accordion</h1>
        <Accordion enableMultiSelect={multiSelect}/>
      </div>
    </>
  )
}

// Issue:
// Mode toggle lives here in App, but the open-panel state (activeId/openIds)
// lives in Accordion — so resetting on toggle is handled inside Accordion
// via a useEffect keyed on the enableMultiSelect prop.

export default App
