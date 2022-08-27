import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "60vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const sampleData1 = {
  name: "iPhone XR",
  description: "Sachin's First iPhone",
  image:
    "https://gateway.pinata.cloud/ipfs/QmQ85Pnumj6KPtLYK7dC7HWoWT52Xj8SbT71ov6q6kQtFW",
  price: "13000",
  currentlySelling: "True",
  address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
};

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <Grid item xs={4}>
        <div className="photo" onClick={this.handleOpen}>
          <img src={sampleData1.image} className="image-ipfs" />
        </div>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={sampleData1.image} className="image-ipfs-big" />
            <span>
              <span className="product-name inline">{sampleData1.name}</span>
              <span className="product-description inline">
                {sampleData1.description}
              </span>
              <span className="product-price inline">{sampleData1.price}</span>
              <Button className="product-buy inline" sx={{background:"blue", color:"black"}}>Buy</Button>
            </span>
          </Box>
        </Modal>
      </Grid>
    );
  }
}

export default Photo;
