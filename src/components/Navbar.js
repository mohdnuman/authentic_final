import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {logout} from '../actions/auth';


class Navbar extends Component {

  logout=()=>{
    localStorage.removeItem('token');
    this.props.dispatch(logout());
  }

  render() {
    return (
        <Box
          sx={{
            width: "100vw",
            height: 100,
            background: "rgb(2,0,36)",
            backGround:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
          }}
        >
            {!this.props.isLoggedIn&&<Button variant="contained" href="/signUp" sx={{background:"white", color:"black"}}>Sign Up</Button>}
            {!this.props.isLoggedIn&&<Button variant="contained" href="/login" sx={{background:"white", color:"black"}}>Login</Button>}
            {this.props.isLoggedIn&&<Button variant="contained" onClick={this.connectWallet} sx={{background:"white", color:"black"}}>Connect Wallet</Button>}
            {this.props.isLoggedIn&& <Button variant="conatined" onClick={this.logout} sx={{background:"white", color:"black"}}>Logout</Button>}

        </Box>
    );
  }
}

export default Navbar;
