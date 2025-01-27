import { useState } from 'react'
import './App.css'
import ImageSection from './components/ImageSection'
import Navbar from './components/Navbar'

function App() {
    const [term, setTerm] = useState(' ')

    const handleSearch = (name) => {
        setTerm(name);
    }
    return (
        <>
            <Navbar search={handleSearch}/>
            <ImageSection term={term}/>
        </>
    )
}

export default App
