import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Photo from "./Photo";

class PhotoGrid extends Component {
  render() {
    return (
      <div align="center" className="photo-grid">
        <Container maxWidth="lg">
          <h1 align="center" className="photo-grid-heading">ASSETS ON SALE</h1>
          
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
