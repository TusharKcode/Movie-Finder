function SearchBar() {
  return (
    <>
    <div style={{
      margin:"50px",
    }}>
        <input style={{
            padding:"10px",
            borderRadius:"20px",
            width:"100%",
            border:"solid teal",
            backgroundColor:"white",
            color:"#4d1658ff"
            }} type="search" placeholder="Search movies, series, popular actor/actresses..."/>
    </div>
    </>
  )
}

export default SearchBar