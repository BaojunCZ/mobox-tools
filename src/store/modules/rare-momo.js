import { rareMomoManager } from "@/utils/rare-momo-manager";

const rareMomo = {
  namespaced: true,
  state: () => ({
    ids: "",
    id: "",
  }),
  mutations: {
    updateId(state, id) {
      state.id = id;
    },
    updateIds(state, ids) {
      state.ids = ids;
    },
  },
  actions: {
    async query({ commit }) {
      try {
        const ids = await rareMomoManager.getAllMomo();
        commit("updateIds", ids);
        if (ids.length > 0) {
          commit("updateId", ids[0]);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async transfer({ state, rootState }) {
      try {
        const id = state.id;
        const targetAddress = rootState.accounts.targetAddress;
        if (targetAddress && id) {
          await rareMomoManager.transfer(targetAddress, id);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {},
};

export default rareMomo;
