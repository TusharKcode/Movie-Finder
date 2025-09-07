import { useState } from "react"
import { BsSearch } from "react-icons/bs";
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
      margin:"50px",
    }}>
        <input style={{
            padding:"10px",
            borderRadius:"20px",
            width:"100%",
            border:"solid teal",
            backgroundColor:"white",
            color:"#4d1658ff"
            }} 
            type="search" 
            placeholder="Search movies, series, popular actor/actresses..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <BsSearch
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
            onClick={handleSearchClick}
          />
    </div>
    </>
  )
}

export default SearchBar