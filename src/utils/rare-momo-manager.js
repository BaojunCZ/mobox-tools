import { MomoRareContract } from "@/constants";
import { ERC721Manager } from "./erc721-manager";

class RareMomoManager extends ERC721Manager {
  constructor() {
    super(MomoRareContract);
  }

  async getAllMomo() {
    return await this.getAllTokens();
  }
}

export const rareMomoManager = new RareMomoManager();
