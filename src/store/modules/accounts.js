import { mecManager } from "@/utils/mec-manager";
import { momoMysteryBoxManager } from "@/utils/momo-mystery-box-manager";

const accounts = {
  namespaced: true,
  state: () => ({
    accounts: [],
  }),
  mutations: {
    updateAccounts(state, accounts) {
      state.accounts = accounts;
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
