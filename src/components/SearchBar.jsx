function SearchBar() {
  return (
    <>
    <div>
        <input style={{
            padding:"10px",
            borderRadius:"0",
            width:"100%",
            border:"solid teal",
            backgroundColor:"grey",
            color:"#fcfbfbff"
            }} type="search" placeholder="Search movies, series, popular actor/actresses..."/>
    </div>
    </>
  )
}

export default SearchBar