import { useState } from "react"
function SearchBar({ onSearch }) {
  
  const [searchVal, setSearchVal] = useState("");
  const handleSearchClick = () => {
    if(onSearch){
      onSearch(searchVal);
    }
  };
  return (
    <>
    <div style={{
        margin:"30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}
    >
        <input style={{
            padding:"10px",
            borderRadius:"20px",
            width:"70%",
            border:"2px solid teal",
            backgroundColor:"white",
            color:"#4d1658ff",
            outline:"none",
            fontSize:"1rem"
            }} 
            type="search" 
            placeholder="Search movies, series, popular actor/actresses..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button style={{
            padding:"10px 20px",
            borderRadius:"20px",
            border:"none",
            backgroundColor:"teal",
            color:"white",
            fontWeight:"bold",
            cursor:"pointer",
            fontSize:"1rem",
            transition:"background-color 0.3s ease"
          }}
          onClick={handleSearchClick}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#006666")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "teal")}
          >
            Search
          </button>
    </div>
    </>
  )
}

export default SearchBar