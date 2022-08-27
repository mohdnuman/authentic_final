import React, { Component } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import Container from "@mui/material/Container"

class Home extends Component {
   
    render() {
        
        return (
            <div >
                <Container sx={{background:"#3C3F58"}} maxWidth="xl">
                <PhotoGrid/>
                </Container>
            </div>
        );
    }
}

export default Home;