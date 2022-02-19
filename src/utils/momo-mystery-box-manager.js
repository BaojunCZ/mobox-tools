import { MomoMysteryBoxContract } from "@/constants";
import { ERC1155Manager } from "./erc1155-manager";

const MomoBox = 1;
const MecBox = 2;
class MomoMysteryBoxManager extends ERC1155Manager {
  constructor() {
    super(MomoMysteryBoxContract);
  }

  balanceOfMecBox() {
    return this.balanceOf(MecBox);
  }

  balanceOfMomoBox() {
    return this.balanceOf(MomoBox);
  }

  balanceOfAll() {
    return this.balanceOfBatch([MomoBox, MecBox]);
  }
}

export const momoMysteryBoxManager = new MomoMysteryBoxManager();
