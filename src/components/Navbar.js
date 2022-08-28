import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { logout } from "../actions/auth";
import connect from "../web3";
import PersonIcon from "@mui/icons-material/Person";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      walletConnected:false
    }
  }
  logout = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logout());
    
  };
  connectWallet=()=>{
    let web3=connect();
    if(web3){
      this.setState({
        walletConnected:true
      })
    }
  }

  render() {
    return (
      <Box
        sx={{
          width: "100vw",
          height: 100,
          background: "#2E3047",
          borderBottom: "2px solid #3BBA9C",
        }}
      >
        <div align="right" className="nav-buttons">
        {this.props.isLoggedIn &&<a href="/profile"> <PersonIcon sx={{color:"#3BBA9C"}} fontSize="large" className="profile-icon"/></a>}
        {!this.props.isLoggedIn && (
          <Button
            variant="contained"
            href="/signUp"
            sx={{ background: "#3BBA9C", color: "white" }}
          >
            Sign Up
          </Button>
        )}
        {!this.props.isLoggedIn && (
          <Button
            variant="contained"
            href="/login"
            sx={{ background: "#3BBA9C", color: "white" }}
            className="auth-buttons"
          >
            Login
          </Button>
        )}
        {this.props.isLoggedIn&&(
          <Button
            variant="contained"
            onClick={this.connectWallet}
            sx={{ background: "#3BBA9C", color: "black" }}
            className="auth-buttons"
          >
            Connect Wallet
          </Button>
        )}
        {this.props.isLoggedIn && (
          <Button
            variant="contained"
            onClick={this.logout}
            sx={{ background: "#3BBA9C", color: "black" }}
          >
            Logout
          </Button>
        )}
        </div>
      </Box>
    );
  }
}

export default Navbar;
