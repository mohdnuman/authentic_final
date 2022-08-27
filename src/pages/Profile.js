import {Grid, Container,Button} from '@mui/material';
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
            src={"./profile.png"}
            height="350"
            width="350"
          />
        </div>
        <div style={{ margin: "50px" }}>
          <h1> Name </h1>
          <p> Yashwanth </p>
          <h1> No. of Assets </h1>
          <p> 10 </p>
          <Button
            variant="contained"
            href="/addAsset"
            sx={{ background: "#3BBA9C", color: "white" }}
          >
            Add An Asset
          </Button>
        </div>
      </div>
    <div align="center">
      <Container maxWidth ="lg"
         style={{ display: "flex", width: "1200px", justifyContent: "center" }}
      >
        <Box sx={{flexGrow:1}}> 
        <Grid container spacing={40}>
          <Grid item xs={4} >
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW"
              height="312"
              width="400"
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW"
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
