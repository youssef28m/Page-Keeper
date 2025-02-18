import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

const collections = ["programming" , "courses", "cyber securtiy"]

function App() {
  const [creatingCollection, setCreatingCollection] = useState(false);

  return (
    <>
      <main onClick={() => setCreatingCollection(false)} className='w-full flex'>
        <Navbar collections={collections} creatingCollection={creatingCollection} setCreatingCollection={setCreatingCollection} />
        <div className='ml-72 w-full h-200'>this</div>
      </main>
    
    </>
  )
}

export default App
