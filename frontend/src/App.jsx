import { useEffect, useState } from 'react'


import Navbar from './components/Navbar'
import { useCollections } from './api/useCollection';
import Loading from './components/loading';


function App() {
  const [creatingCollection, setCreatingCollection] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');
  const {fetchCollections, collections, loading, fetchError} = useCollections()

  useEffect(() => {
    fetchCollections();
  }, []);

  if (loading) return <Loading />


  return (
    <>
      <main onClick={() => setCreatingCollection(false)} className='w-full flex'>

        <Navbar collections={collections} creatingCollection={creatingCollection} setCreatingCollection={setCreatingCollection} />

        <Navbar setSelectedCollection={setSelectedCollection} collections={collections} creatingCollection={creatingCollection} setCreatingCollection={setCreatingCollection} />
        <div className='ml-72 w-full h-200'>this</div>
      </main>
    
    </>
  )
}

export default App
