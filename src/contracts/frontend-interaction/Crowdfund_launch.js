const { ethers} = require("ethers");
async function  Crowdfund_launch(amount,days,token_address){

    console.log(days);

   
    
    const Crowdfund_launch_abi = require("../abi/Crowdfunding.json")
    const Crowdfundaddr = "0x81e49Fde3A9306c60727a707e1Fa5820671D271B";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract_signer = new ethers.Contract(
    Crowdfundaddr,
    Crowdfund_launch_abi,
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

  const submittxn =await contract_signer.launch(amount1,days,token_address,{gasLimit: 210000})
//   const confirmtxn  = await contract_signer.confirmTransaction()
//   const executetxn  = await contract_signer.executeTransaction()

const transferEvents = await contract_provider.on('Launch', (id,creator,goal,startedAt,endAt)=>{
  let info={
    id:id,
    creator:creator,
    goal:goal,
    startedAt:startedAt,
    endAt:endAt
  };

  temp(info.id);
});

}

const temp=(info)=>{
  localStorage.setItem("temp2",info);
}

export default Crowdfund_launch;