import React, { Component } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

class Popover extends Component {
  render() {
    return (
        <Modal
        open={this.props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
      
    );
  }
}

export default Popover;
