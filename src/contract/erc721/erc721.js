import { provider } from "@/constants";
import { sendTransaction } from "@/utils/metamask-utils";
import { ethers } from "ethers";
import abi from "./abi";
import enumerableAbi from "./enumerable-abi";

export class ERC721 {
  constructor(address) {
    this.address = address;
    this.contract = new ethers.Contract(address, abi, provider);
    this.enumerable = new ethers.Contract(address, enumerableAbi, provider);
  }

  balanceOf(account) {
    console.log(account);
    return this.contract.functions.balanceOf(account);
  }

  tokenURI(id) {
    return this.contract.functions.tokenURI(id);
  }

  tokenByIndex(index) {
    return this.enumerable.functions.tokenByIndex(index);
  }

  tokenOfOwnerByIndex(owner, index) {
    return this.enumerable.functions.tokenOfOwnerByIndex(owner, index);
  }

  async safeTransferFrom(from, to, id) {
    await sendTransaction(
      this.contract.interface,
      "safeTransferFrom",
      [from, to, id, "0x"],
      from,
      this.address
    );
  }
}
