import { GemContract } from "@/constants";
import { ERC1155Manager } from "./erc1155-manager";

export const YellowGem = 401;
export const BlueGem = 301;
export const GreenGem = 201;
export const RedGem = 101;

class GemManager extends ERC1155Manager {
  constructor() {
    super(GemContract);
  }

  balanceOfAll() {
    return this.balanceOfBatch([RedGem, BlueGem, GreenGem, YellowGem]);
  }

  transferBatch(to, ids, amounts) {
    return this.safeBatchTransferFrom(to, ids, amounts);
  }
}

export const gemManager = new GemManager();
