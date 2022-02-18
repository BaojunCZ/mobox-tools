import { MomoMysteryBox } from "@/constants";
import { Erc1155 } from "@/contract/erc1155/erc1155";

const MomoBox = 1;
const MecBox = 2;
class MomoMysteryBoxManager {
  constructor() {
    this.erc1155 = new Erc1155(MomoMysteryBox);
  }

  setAddress(address) {
    this.address = address;
  }

  balanceOfMecBox() {
    if (this.address) {
      return this.erc1155.balanceOf(this.address, MecBox);
    }
  }

  balanceOfMomoBox() {
    if (this.address) {
      return this.erc1155.balanceOf(this.address, MomoBox);
    }
  }

  balanceOfAll() {
    if (this.address) {
      return this.erc1155.balanceOfBatch(
        [this.address, this.address],
        [MomoBox, MecBox]
      );
    }
  }
}

export const momoMysteryBoxManager = new MomoMysteryBoxManager();
