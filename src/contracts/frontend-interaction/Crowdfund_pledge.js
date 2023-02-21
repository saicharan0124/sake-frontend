const { ethers} = require("ethers");
async function  Crowdfund_pledge(id,amount,token_address){

    

   
    
    const Crowdfund_launch_abi = require("../abi/Crowdfunding.json")
    const erc20abi=require("../abi/IERC20.json")
    const Crowdfundaddr = "0x81e49Fde3A9306c60727a707e1Fa5820671D271B";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract_signer = new ethers.Contract(
    Crowdfundaddr,
    Crowdfund_launch_abi,
    signer
  );

  const erc20_signer = new ethers.Contract(
    token_address,
    erc20abi,
    signer
  );
  const contract_provider = new ethers.Contract(
    Crowdfundaddr,
    Crowdfund_launch_abi,
    provider
  );

  const input0 = ""+amount;
  const decimals0 = "18";
  const amount1 = ethers.utils.parseUnits(input0, decimals0);


  const approvetoken= await erc20_signer.approve(Crowdfundaddr,amount1)

  
  const pledge =await contract_signer.pledge(id,amount1,{gasLimit: 210000})
//   const confirmtxn  = await contract_signer.confirmTransaction()
//   const executetxn  = await contract_signer.executeTransaction()



}



export default Crowdfund_pledge;