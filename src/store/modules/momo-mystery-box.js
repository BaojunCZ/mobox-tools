import { momoMysteryBoxManager } from "@/utils/momo-mystery-box-manager";

const momoMysteryBox = {
  namespaced: true,
  state: () => ({
    momoBox: 0,
    mecBox: 0,
    modalVisible: false,
    modalType: 1,
    modalInput: 1,
  }),
  mutations: {
    updateMomoBox(state, size) {
      state.momoBox = size;
    },
    updateMecBox(state, size) {
      state.mecBox = size;
    },
    updatemodalVisible(state, visble) {
      state.modalVisible = visble;
    },
    updatemodalType(state, type) {
      state.modalType = type;
    },
    updateModalInput(state, input) {
      state.modalInput = input;
    },
  },
  actions: {
    async balanceOfAll({ commit }) {
      try {
        const boxes = await momoMysteryBoxManager.balanceOfAll();
        commit("updateMomoBox", parseInt(boxes[0][0].toString()));
        commit("updateMecBox", parseInt(boxes[0][1].toString()));
      } catch (e) {
        console.error(e);
      }
    },
    openModal({ commit, state }, type) {
      var size = 0;
      if (type === 1) {
        size = state.momoBox;
      } else if (type === 2) {
        size = state.mecBox;
      }
      if (size > 0) {
        commit("updatemodalType", type);
        commit("updatemodalVisible", true);
        commit("updateModalInput", size);
      }
    },
    closeModal({ commit }) {
      commit("updatemodalVisible", false);
      commit("updateModalInput", 0);
    },
  },
  getters: {},
};

export default momoMysteryBox;
