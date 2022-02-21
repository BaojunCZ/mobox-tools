import { provider } from "@/constants";
import { sendTransaction } from "@/utils/metamask-utils";
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
    await sendTransaction(
      this.contract.interface,
      "safeTransferFrom",
      [from, to, id, amount, data],
      from,
      this.address
    );
  }

  async safeBatchTransferFrom(from, to, ids, amounts, data) {
    await sendTransaction(
      this.contract.interface,
      "safeBatchTransferFrom",
      [from, to, ids, amounts, data],
      from,
      this.address
    );
  }
}
