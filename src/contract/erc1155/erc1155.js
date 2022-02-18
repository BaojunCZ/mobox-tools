import { provider } from "@/constants";
import { ethers } from "ethers";
import abi from "./abi";
export class Erc1155 {
  constructor(contract) {
    this.contract = new ethers.Contract(contract, abi, provider);
  }

  balanceOf(account, id) {
    return this.contract.functions.balanceOf(account, id);
  }

  balanceOfBatch(accounts, ids) {
    return this.contract.functions.balanceOfBatch(accounts, ids);
  }
}
