function Movies({ movies = [] }) {

  return (
    <>
    <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "radial-gradient(circle,rgba(61, 2, 171, 1) 0%, rgba(64, 199, 120, 1) 50%, rgba(69, 123, 204, 1) 100%)",
          padding: "20px",
        }}
      >
        {movies.map((movie) => {
          const { id, original_title, poster_path, release_date } = movie;
          return (
            <div
              key={id || original_title}
              style={{
                border: "2px solid black",
                padding: "12px",
                margin: "12px",
                width: "200px",
                height:"350px",
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
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <div
                style={{
                  textAlign: "center",
                  fontWeight:"bolder",
                  fontSize:"large",
                  marginTop: "8px",
                }}
              >
                {original_title}
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize:"13px",
                  fontFamily: "monospace",
                  marginTop: "5px",
                }}
              >
                {release_date}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movies;