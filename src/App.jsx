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

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  async function fetchData(pageNo = 1) {
    try {
      const res = await fetch(`https://jsonfakery.com/movies/paginated?page=${pageNo}`);
      const json = await res.json();
      setMovies(json.data)
    } catch (err) {
      console.error('Error fetching movies', err)
    }
  }
  useEffect(() => {
    fetchData(page)
  },[page])
  
  return (
    <>
      <Navbar/>
      
      <SearchBar/>
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        <Route path='/movies' element={
          <Movies
          movies={movies}
          page={page} 
          onPageChange={(event, value) => setPage(value)}
        />
      }/>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
