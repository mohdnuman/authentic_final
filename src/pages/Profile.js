import {Grid, Container} from '@mui/material';
import { Box } from '@mui/system';


export const Profile = () => {
  return (
    <div  className="container">
      <div
        style={{ display: "flex", width: "1200px", justifyContent: "center" }}
      >
        <div style={{ margin: "50px" }}>
          <img
            style={{ borderRadius: "10%" }}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            height="312"
            width="400"
          />
        </div>
        <div style={{ margin: "50px" }}>
          <h1> Name </h1>
          <p> Yashwanth </p>
          <h1> No. of Assets </h1>
          <p> 10 </p>
        </div>
      </div>
    <div  align="center">
      <Container maxWidth ="lg"
         style={{ display: "flex", width: "1200px", justifyContent: "center" }}
      >
        <Box sx={{flexGrow:1}}> 
        <Grid container spacing={40}>
          <Grid item xs={4} >
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              height="312"
              width="400"
            />
          </Grid>
        </Grid>
        </Box>
      </Container>
      </div>
    </div>
  );
};
