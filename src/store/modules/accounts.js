import { gemManager } from "@/utils/gem-manager";
import { mMomoManager } from "@/utils/m-momo-manager";
import { mecManager } from "@/utils/mec-manager";
import { momoMysteryBoxManager } from "@/utils/momo-mystery-box-manager";
import { rareMomoManager } from "@/utils/rare-momo-manager";

const accounts = {
  namespaced: true,
  state: () => ({
    accounts: [],
    targetAddress: "0xc25249331D6d8152524152b09654bC383c677e58",
  }),
  mutations: {
    updateAccounts(state, accounts) {
      state.accounts = accounts;
    },
    updateTargetAddress(state, address) {
      state.targetAddress = address;
    },
  },
  actions: {
    async connect({ commit, dispatch }) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        commit("updateAccounts", accounts);
        momoMysteryBoxManager.setAddress(accounts[0]);
        mecManager.setAddress(accounts[0]);
        mMomoManager.setAddress(accounts[0]);
        rareMomoManager.setAddress(accounts[0]);
        gemManager.setAddress(accounts[0]);
        dispatch("momoMysteryBox/balanceOfAll", "", { root: true });
        dispatch("mec/balanceOf", "", { root: true });
      }
    },
  },
  getters: {
    activeAccount(state) {
      if (state.accounts.length > 0) {
        return state.accounts[0];
      } else {
        return "";
      }
    },
    showAddress(state, getters) {
      const myAccount = getters.activeAccount;
      if (myAccount === "") {
        return "";
      } else {
        return myAccount.substring(0, 8) + "...." + myAccount.substring(36);
      }
    },
  },
};

export default accounts;
