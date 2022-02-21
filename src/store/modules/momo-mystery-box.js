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
    updateModalVisible(state, visble) {
      state.modalVisible = visble;
    },
    updateModalType(state, type) {
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
        commit("updateModalType", type);
        commit("updateModalVisible", true);
        commit("updateModalInput", size);
      }
    },
    closeModal({ commit }) {
      commit("updateModalVisible", false);
      commit("updateModalInput", 0);
    },
    async transfer({ state, dispatch, rootState }) {
      try {
        const targetAddress = rootState.accounts.targetAddress;
        if (targetAddress && state.modalInput && state.modalType) {
          await momoMysteryBoxManager.transfer(
            targetAddress,
            state.modalType,
            state.modalInput
          );
          dispatch("closeModal");
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {},
};

export default momoMysteryBox;
