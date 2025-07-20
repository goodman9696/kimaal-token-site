let web3;
let contract;
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // заменить на адрес
const abi = [...] // вставить ABI

async function connectWallet() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(abi, contractAddress);
    alert("Wallet connected");
  } else {
    alert("Install MetaMask");
  }
}

async function claimDividends() {
  const accounts = await web3.eth.getAccounts();
  if (!contract) {
    alert("Contract not loaded");
    return;
  }
  await contract.methods.claim().send({ from: accounts[0] });
  alert("Dividends claimed!");
}
