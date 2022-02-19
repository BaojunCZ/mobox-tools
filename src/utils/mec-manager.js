import { MecContract } from "@/constants";
import { ERC1155Manager } from "./erc1155-manager";

const Mec = 1;

class MecManager extends ERC1155Manager {
  constructor() {
    super(MecContract);
  }

  balanceOfMec() {
    return this.balanceOf(Mec);
  }

  transfer(to, amount) {
    return this.safeTransferFrom(to, Mec, amount);
  }
}

export const mecManager = new MecManager();
