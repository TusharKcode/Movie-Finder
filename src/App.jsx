import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import HomeSection from './pages/HomeSection'
import Movies from './pages/Movies'
import AboutUs from './pages/AboutUs'
import Series from './pages/Series'
import People from './pages/People'
import { useEffect, useState } from 'react'


function App() {

  const [movies, setMovies] = useState([])
  
  const url = 'https://jsonfakery.com/movies/paginated'
  async function fetchData() {
    let data = await fetch(url)
    let res = await data.json()
    setMovies(res.data)
  }
  useEffect(() => {
    fetchData()
  },[])
  console.log(movies)

  return (
    <>
      <Navbar/>
      
      <SearchBar/>
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
