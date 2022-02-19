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
}

export const mecManager = new MecManager();
