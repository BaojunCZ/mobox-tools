import { ERC721 } from "@/contract/erc721/erc721";

export class ERC721Manager {
  constructor(contract) {
    this.erc721 = new ERC721(contract);
  }

  setAddress(address) {
    this.address = address;
  }

  tokenURI(id) {
    return this.erc721.tokenURI(id);
  }

  async transfer(to, id) {
    if (this.address) {
      return await this.erc721.safeTransferFrom(this.address, to, id);
    }
  }

  async getTokenID(id) {
    if (this.address) {
      return await this.erc721.tokenByIndex(id);
    }
  }

  async getAllTokens() {
    if (this.address) {
      const tokens = [];
      const a = await this.erc721.balanceOf(this.address);
      const balance = parseInt(a.toString());
      for (let i = 0; i < balance; i++) {
        const tokenId = (
          await this.erc721.tokenOfOwnerByIndex(this.address, i)
        ).toString();
        tokens.push(tokenId);
      }
      return tokens;
    }
  }
}
