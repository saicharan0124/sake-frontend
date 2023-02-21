import { ContractFactory } from 'ethers';
const Multisigabi = require("../abi/Multisig.json");
const Multisigbytecode = require("../abi/multisig_bytecode.json");

async  function multisig_deployer(){

const factory = new ContractFactory(Multisigabi, Multisigbytecode);

// If your contract requires constructor args, you can specify them here
const contract = await factory.deploy();

console.log(contract.address);

}
export default multisig_deployer;