import React, { Component } from "react";
import Button from "@mui/material/Button";
import GetMarketplace from "../contracts/Marketplace";
import connect from "../web3";
import { NFTStorage, File } from "nft.storage";
import fs from "fs";

class AddAsset extends Component {
    constructor(props){
        super(props);
        this.state={
            fileURL:""
        }
    }
    setFileURI=(e)=>{
        let file=e.target.files[0];
        this.setState({
            fileURL:file
        })
    }
  handleAdd = async (e) => {
    e.preventDefault();
    const web3=connect();
    const Marketplace=GetMarketplace();
    //------------------uploading on ipfs--------------------
    const client = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDExNGRjNzE3MzgyQTk3YTI3RTM1YzkwM2Y2RmY4QTNjM0RDOTNBNzUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MTU4MzY2NjQ4MywibmFtZSI6Ik51bWFuX1NhY2hpbl9Bc2hva19LYXkifQ.URvpXjXEjN1Sj5KHri7mJbUNYrJGDJc7gyYUYiJUxNc",
    });
    console.log(this.state.fileURL);
    const metadata = await client.store({
      name: e.target.elements.name.value,
      description: e.target.elements.description.value,
      image: this.state.fileURL,
    });
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);


    const accounts=await web3.eth.getAccounts();
    console.log(accounts);
    const trx=await Marketplace.methods.createNftToken(metadata.url).send({from:accounts[0]});


  };
  render() {
    return (
      <div align="center">
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={this.handleAdd}
        >
          <h2>Add An Asset</h2>
          <input
            name="name"
            className="input-field"
            placeholder="Name Of The Product"
          />
          <input
            name="description"
            className="input-field"
            placeholder="Description Of The Product"
          />
          <input
            name="price"
            className="input-field"
            placeholder="Price Of The Product"
          />
          <input
            name="uid"
            className="input-field"
            placeholder="Unique ID pf The Product"
          />
          <input
            type={"file"}
            name="image"
            placeholder="Select The File"
            className="input-field"
            onChange={this.setFileURI}
          />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default AddAsset;
