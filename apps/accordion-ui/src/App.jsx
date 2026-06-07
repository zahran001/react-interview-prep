import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Accordion from './Accordion';

function App() {

  return (
    <>
      <div>
        <h1>Accordion</h1>
        <Accordion enableMultiSelect={true} />
      </div>
    </>
  )
}

export default App
