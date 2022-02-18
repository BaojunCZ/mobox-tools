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
    async connect({ commit }) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      commit("updateAccounts", accounts);
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
