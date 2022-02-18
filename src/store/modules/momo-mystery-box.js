import { momoMysteryBoxManager } from "@/utils/momo-mystery-box-manager";

const momoMysteryBox = {
  namespaced: true,
  state: () => ({
    momoBox: 0,
    mecBox: 0,
  }),
  mutations: {
    updateMomoBox(state, size) {
      state.momoBox = size;
    },
    updateMecBox(state, size) {
      state.mecBox = size;
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
  },
  getters: {},
};

export default momoMysteryBox;
