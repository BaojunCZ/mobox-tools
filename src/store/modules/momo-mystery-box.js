import { momoMysteryBoxManager } from "@/utils/momo-mystery-box-manager";

const momoMysteryBox = {
  namespaced: true,
  state: () => ({
    momoBox: 0,
    mecBox: 0,
    modelVisible: false,
    modelType: 1,
    modelInput: 0,
  }),
  mutations: {
    updateMomoBox(state, size) {
      state.momoBox = size;
    },
    updateMecBox(state, size) {
      state.mecBox = size;
    },
    updatemodelVisible(state, visble) {
      state.modelVisible = visble;
    },
    updateModelType(state, type) {
      state.modelType = type;
    },
    updateModelInput(state, input) {
      state.modelInput = input;
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
    openModel({ commit, state }, type) {
      commit("updateModelType", type);
      commit("updatemodelVisible", true);
      if (type === 1) {
        commit("updateModelInput", state.momoBox);
      } else if (type === 2) {
        commit("updateModelInput", state.mecBox);
      }
    },
    closeModel({ commit }) {
      commit("updatemodelVisible", false);
      commit("updateModelInput", 0);
    },
  },
  getters: {},
};

export default momoMysteryBox;
