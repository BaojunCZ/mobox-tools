import { mecManager } from "@/utils/mec-manager";

const mec = {
  namespaced: true,
  state: () => ({
    mec: 0,
    modalVisible: false,
    modalInput: 1,
    modalTargetAddress: "",
  }),
  mutations: {
    updateMec(state, mec) {
      state.mec = mec;
    },
    updatemodalVisible(state, visble) {
      state.modalVisible = visble;
    },
    updateModalInput(state, input) {
      state.modalInput = input;
    },
    updateModalTargetAddress(state, address) {
      state.modalTargetAddress = address;
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
        commit("updatemodalVisible", true);
        commit("updateModalInput", state.mec);
      }
    },
    closeModal({ commit }) {
      commit("updatemodalVisible", false);
      commit("updateModalInput", 0);
      commit("updateModalTargetAddress", "");
    },
    async transfer({ state, dispatch }) {
      try {
        if (state.modalTargetAddress && state.modalInput) {
          await mecManager.transfer(state.modalTargetAddress, state.modalInput);
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
