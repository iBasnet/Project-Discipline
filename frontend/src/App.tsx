import { useContext, useEffect } from 'react'
import Hero from './components/Hero'
import { FormContext } from './context/FormContext'

export default function App() {

  const { state } = useContext(FormContext);

  useEffect(() => {
    console.log(state)
  }, [state]);


  return (
    <main>
      <h1>Project Discipline</h1>
      <Hero />
      <div className="shadow-purple"></div>
      <div className="shadow-cyan"></div>
      <div className="shadow-lime"></div>
    </main>
  )
}
