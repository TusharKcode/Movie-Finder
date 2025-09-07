import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Pagination from '@mui/material/Pagination';

function Movies({ movies }) {

  const {original_title, poster_path, release_date} = movies || [];

  return (
    <>
    <div
      style={{
        border: "2px solid black",
        padding: "12px",
        margin: "12px",
        width: "200px",
        backgroundColor:"white",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Wrap image and name in Link */}
        <img
          src={poster_path}
          alt={original_title ||"Movie Name"}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <div style={{ textAlign: "center", fontSize: "larger", marginTop: "8px" }}>
          {original_title}
        </div>
      

      <div
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          marginTop: "5px",
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
    <br />
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "20px"
    }}>
      <Pagination count={10} color="secondary" />
    </div>
    </>
  );
}

export default Movies;