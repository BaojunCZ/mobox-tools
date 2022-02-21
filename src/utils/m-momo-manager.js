import { MomoMTokenContract } from "@/constants";
import { ERC1155Manager } from "./erc1155-manager";

class MMomoManager extends ERC1155Manager {
  constructor() {
    super(MomoMTokenContract);
  }

  balanceOfId(id) {
    return this.balanceOf(id);
  }

  balanceOfIds(ids) {
    return this.balanceOfBatch(ids);
  }

  transfer(to, id, amount) {
    return this.safeTransferFrom(to, id, amount);
  }

  transferBatch(to, ids, amounts) {
    return this.safeBatchTransferFrom(to, ids, amounts);
  }
}

export const mMomoManager = new MMomoManager();
