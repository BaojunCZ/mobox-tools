import { provider } from "@/constants";
import { ethers } from "ethers";
import abi from "./abi";
export class Erc1155 {
  constructor(address) {
    this.address = address;
    this.contract = new ethers.Contract(address, abi, provider);
  }

  balanceOf(account, id) {
    return this.contract.functions.balanceOf(account, id);
  }

  balanceOfBatch(accounts, ids) {
    return this.contract.functions.balanceOfBatch(accounts, ids);
  }

  async safeTransferFrom(from, to, id, amount, data) {
    const fragment = this.contract.interface.getFunction("safeTransferFrom");
    const payload = this.contract.interface.encodeFunctionData(fragment, [
      from,
      to,
      id,
      amount,
      data,
    ]);
    const transactionParameters = {
      to: this.address,
      from: from,
      data: payload,
    };
    return await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
  }
}
