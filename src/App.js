import {useEffect} from "react" ;
import './App.css';
const {ethers} = require("ethers") ;

function App() {
  const walletAddress = "0xd1612fe1774bC6aBCee11088b71438B2630deD12" ;

  useEffect(() => {
    const walletAbi = [
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ] ;

    const writeContract = async() =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum) ;
      await provider.send("eth_requestAccounts",[]) ;
      const signer = provider.getSigner() ;
      const contract = new ethers.Contract(walletAddress,walletAbi,signer) ;
      await contract.setValue(2) ;
      await contract.sendEthContract({value: ethers.utils.parseEther("0.1")}) ;
      await contract.sendEthUser("0x6030AAb8Abd3f3Efed39499c118eF5257Dce2692",{ value: ethers.utils.parseEther("0.1")}) ;
    } ;
    writeContract() ;
  },[]) ;

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
