import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Movies() {
  return (
    <>
    <div style={{
          padding:"40px",
          backgroundColor:"",
               
        }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia style={{height:"300px", objectFit:"cover"}}
                component="img"
                height="25"
                image="{image}"
                alt="{imgText}"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color:"#450787ff", fontWeight:"bold", fontSize:"25px", fontStretch:"expanded"}}>
                  name
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle:"oblique", fontSize:"15px"}}>
                  "description"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
    </>
  );
}

export default Movies;