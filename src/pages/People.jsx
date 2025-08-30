import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// export default function PopularPeopleCard({name, description, image, imgText} ) {
//   return (
    
//     <div style={{
//       padding:"40px",
//       backgroundColor:"",
           
//     }}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia style={{height:"300px", objectFit:"cover"}}
//             component="img"
//             height="25"
//             image={image}
//             alt={imgText}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div" sx={{color:"#450787ff", fontWeight:"bold", fontSize:"25px", fontStretch:"expanded"}}>
//               {name}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle:"oblique", fontSize:"15px"}}>
//               {description}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// }

export default function PopularPeopleCard() {


  // See details of People
  const onSeeInfo = () =>{
    console.log("Actors description");
  };

  return (
    <div style={{
      padding:"40px",
      backgroundColor:"",
           
    }}>
      <Card sx={{ maxWidth: 345 }} onClick={onSeeInfo}>
        <CardActionArea>
          <CardMedia style={{height:"300px", objectFit:"cover"}}
            component="img"
            height="25"
            image="/src/assets/images (1).jpeg"
            alt="Robert Downey Jr."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color:"#450787ff", fontWeight:"bold", fontSize:"25px", fontStretch:"expanded"}}>
              Robert Downey Jr.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle:"oblique", fontSize:"15px"}}>
              Iron Man, Avengers, Sherlock Holmes
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
