import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Photo from "./Photo";

class PhotoGrid extends Component {
  render() {
    const marketItems=this.props.marketItems;
    console.log(marketItems);
    return (
      <div align="center" className="photo-grid">
        <Container maxWidth="lg">
          <h1 align="left">Ads</h1>
          {}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Photo />
              <Photo />
              <Photo />
              <Photo />
              <Photo />
              <Photo />
              <Photo />

            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
}

export default PhotoGrid;
