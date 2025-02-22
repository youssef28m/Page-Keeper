import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
=======
>>>>>>> aafc782 (2)
import Navbar from './components/Navbar'

const collections = ["programming" , "courses", "cyber securtiy"]

function App() {
  const [creatingCollection, setCreatingCollection] = useState(false);
<<<<<<< HEAD
=======
  const [selectedCollection, setSelectedCollection] = useState('');
>>>>>>> aafc782 (2)

  return (
    <>
      <main onClick={() => setCreatingCollection(false)} className='w-full flex'>
<<<<<<< HEAD
        <Navbar collections={collections} creatingCollection={creatingCollection} setCreatingCollection={setCreatingCollection} />
=======
        <Navbar setSelectedCollection={setSelectedCollection} collections={collections} creatingCollection={creatingCollection} setCreatingCollection={setCreatingCollection} />
>>>>>>> aafc782 (2)
        <div className='ml-72 w-full h-200'>this</div>
      </main>
    
    </>
  )
}

export default App
