import connect from "../web3";

let web3=connect();

const address = "0x75f27E459061F0383DEc5Da6DFFbff760E0A48fd";

const abi = [
  { type: "constructor", payable: false, inputs: [] },
  {
    type: "event",
    anonymous: false,
    name: "Approval",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "approved", indexed: true },
      { type: "uint256", name: "tokenId", indexed: true },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "ApprovalForAll",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "operator", indexed: true },
      { type: "bool", name: "approved", indexed: false },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "MarketItemCreated",
    inputs: [
      { type: "uint256", name: "tokenId", indexed: true },
      { type: "address", name: "seller", indexed: false },
      { type: "address", name: "owner", indexed: false },
      { type: "uint256", name: "price", indexed: false },
      { type: "bool", name: "sold", indexed: false },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "to", indexed: true },
      { type: "uint256", name: "tokenId", indexed: true },
    ],
  },
  {
    type: "function",
    name: "approve",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "balanceOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address", name: "owner" }],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "createMarketSale",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [],
  },
  {
    type: "function",
    name: "createNftToken",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [{ type: "string", name: "tokenURI" }],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "fetchItemsListed",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        components: [
          { type: "uint256", name: "tokenId" },
          { type: "address", name: "seller" },
          { type: "address", name: "owner" },
          { type: "uint256", name: "price" },
          { type: "bool", name: "sold" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "fetchMarketItems",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        components: [
          { type: "uint256", name: "tokenId" },
          { type: "address", name: "seller" },
          { type: "address", name: "owner" },
          { type: "uint256", name: "price" },
          { type: "bool", name: "sold" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "fetchMyNFTs",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        components: [
          { type: "uint256", name: "tokenId" },
          { type: "address", name: "seller" },
          { type: "address", name: "owner" },
          { type: "uint256", name: "price" },
          { type: "bool", name: "sold" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "getApproved",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "address" }],
  },
  {
    type: "function",
    name: "getListingPrice",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "isApprovedForAll",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [
      { type: "address", name: "owner" },
      { type: "address", name: "operator" },
    ],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "name",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "ownerOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "address" }],
  },
  {
    type: "function",
    name: "resellToken",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [
      { type: "uint256", name: "tokenId" },
      { type: "uint256", name: "price" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" },
      { type: "bytes", name: "data" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setApprovalForAll",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "operator" },
      { type: "bool", name: "approved" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "supportsInterface",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "bytes4", name: "interfaceId" }],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "symbol",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "tokenURI",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "uint256", name: "tokenId" }],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "transferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "tokenId" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "transferNftWithFiat",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [
      { type: "uint256", name: "tokenId" },
      { type: "address", name: "buyerAddress" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "updateListingPrice",
    constant: false,
    stateMutability: "payable",
    payable: true,
    inputs: [{ type: "uint256", name: "_listingPrice" }],
    outputs: [],
  },
];

export default new web3.eth.Contract(abi, address);
