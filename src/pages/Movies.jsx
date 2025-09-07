import Pagination from '@mui/material/Pagination';

function Movies({ movies = [], page = 1, onPageChange }) {

  return (
    <>
    <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          padding: "20px",
        }}
      >
        {movies.map((movie, index) => {
          const { original_title, poster_path, release_date } = movie;
          return (
            <div
              key={index}
              style={{
                border: "2px solid black",
                padding: "12px",
                margin: "12px",
                width: "200px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={poster_path}
                alt={original_title || "Movie Name"}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "larger",
                  marginTop: "8px",
                }}
              >
                {original_title}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "cursive",
                  marginTop: "5px",
                }}
              >
                {release_date}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Pagination count={20} page={page} color="secondary" onChange={onPageChange} />
      </div>
    </>
  );
}

export default Movies;