import { Erc1155 } from "@/contract/erc1155/erc1155";

export class ERC1155Manager {
  constructor(contract) {
    this.erc1155 = new Erc1155(contract);
  }

  setAddress(address) {
    this.address = address;
  }

  balanceOf(id) {
    if (this.address) {
      return this.erc1155.balanceOf(this.address, id);
    }
  }

  balanceOfBatch(ids) {
    if (this.address) {
      return this.erc1155.balanceOfBatch([this.address, this.address], ids);
    }
  }
}
