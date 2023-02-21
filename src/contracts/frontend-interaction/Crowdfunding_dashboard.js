const { ethers } = require("ethers");

async function fetchIndex(index) {
  const Crowdfundabi = require("../abi/Crowdfunding.json");
  const Crowdfundaddr = "0x95dCf7887E3DE5E11a5B89EAfAb3Da54B6305196";

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const contract_provider = new ethers.Contract(
    Crowdfundaddr,
    Crowdfundabi,
    provider
  );

  const txnlen = await contract_provider.NoOfCrowdfunding();
  const len = parseInt("" + txnlen.txlen, 16);
  console.log(txnlen);

  const txndeets = await contract_provider.viewCampaign(index);
  return txndeets;
}

export default fetchIndex;
