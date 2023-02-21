import { ContractFactory } from 'ethers';

async  function crowdfunding_deployer(){
    const crowdfundingabi = require("../abi/Multisig.json");
   const  crowdfund_bytecide=require(".crowdfund_bytecode.json./abi/")

const factory = new ContractFactory(crowdfundingabi, crowdfund_bytecide);

// If your contract requires constructor args, you can specify them here
const contract = await factory.deploy(deployArgs);

console.log(contract.address);
console.log(contract.deployTransaction);
}