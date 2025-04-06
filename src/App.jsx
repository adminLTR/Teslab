import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import Input from './components/Input'

function App() {

    const [result, setResult] = useState({});

    return (
        <div>
            <Header/>
            <Section result={result} setResult={setResult}/>
            <Footer/>
        </div>
  )
}

export default App
