import { mecManager } from "@/utils/mec-manager";

const mec = {
  namespaced: true,
  state: () => ({
    mec: 0,
    modalVisible: false,
    modalInput: 1,
  }),
  mutations: {
    updateMec(state, mec) {
      state.mec = mec;
    },
    updateModalVisible(state, visble) {
      state.modalVisible = visble;
    },
    updateModalInput(state, input) {
      state.modalInput = input;
    },
  },
  actions: {
    async balanceOf({ commit }) {
      try {
        const mec = await mecManager.balanceOfMec();
        commit("updateMec", parseInt(mec.toString()));
      } catch (e) {
        console.error(e);
      }
    },
    openModal({ commit, state }) {
      if (state.mec > 0) {
        commit("updateModalVisible", true);
        commit("updateModalInput", state.mec);
      }
    },
    closeModal({ commit }) {
      commit("updateModalInput", 0);
    },
    async transfer({ state, dispatch, rootState }) {
      try {
        const targetAddress = rootState.accounts.targetAddress;
        if (targetAddress && state.modalInput) {
          await mecManager.transfer(targetAddress, state.modalInput);
          dispatch("closeModal");
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {},
};

export default mec;
