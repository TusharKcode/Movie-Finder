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
  const [allMovies, setAllMovies] = useState([]);

  //Fetching data part for movies
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  
  async function fetchData(pageNo = 1) {
    try {
      setLoading(true)

      const res = await fetch(`https://jsonfakery.com/movies/infinite-scroll?page=${pageNo}`);
      const json = await res.json();

      setMovies(prev => [...prev, ...json.data]);
      setAllMovies(prev => [...prev, ...json.data]);

      setLoading(false);
    } catch (err) {
      console.error('Error fetching movies', err)
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(page)
  },[])
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200 && !loading){
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading]);

  useEffect(() => {
    if (page > 1) {
      fetchData(page)
    }
  }, [page]);

  //Search part for movies
  const handleSearch = (searchVal) => {
    if(searchVal.trim() === ""){
      setMovies(allMovies);
      return
    }
    const filtered = allMovies.filter((m) => 
      m.original_title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setMovies(filtered);
  }

  return (
    <>
      <Navbar/>
      
      <SearchBar onSearch={handleSearch}/>
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        <Route path='/movies' element={
          <Movies
          movies={movies}
          />
      }/>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      {loading && (
          <div style={{ textAlign: "center", padding: "20px", fontWeight: "bold" }}>
            Loading more movies....
          </div>
        )}
      
      <Footer/>
    </>
  )
}

export default App
