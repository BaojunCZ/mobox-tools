import {
  BlueGem,
  gemManager,
  GreenGem,
  RedGem,
  YellowGem,
} from "@/utils/gem-manager";

const gem = {
  namespaced: true,
  state: () => ({
    gems: {},
    ids: [],
  }),
  mutations: {
    updateGems(state, value) {
      state.gems = value;
    },
    updateIds(state, value) {
      state.ids = value;
    },
  },
  actions: {
    async balanceOfAll({ commit }) {
      try {
        const result = await gemManager.balanceOfAll();
        if (result && result[0]) {
          const gems = {};
          gems[RedGem] = result[0][0].toString();
          gems[BlueGem] = result[0][1].toString();
          gems[GreenGem] = result[0][2].toString();
          gems[YellowGem] = result[0][3].toString();
          commit("updateGems", gems);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async transfer({ getters, state, rootState }) {
      try {
        const idList = getters.idList;
        const gems = state.gems;
        const ids = [];
        const amounts = [];
        idList.forEach((id) => {
          if (gems[id] > 0) {
            ids.push(id);
            amounts.push(gems[id]);
          }
        });
        const targetAddress = rootState.accounts.targetAddress;
        if (
          targetAddress &&
          ids.length > 0 &&
          amounts.length > 0 &&
          ids.length === amounts.length
        ) {
          await gemManager.transferBatch(targetAddress, ids, amounts);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    idList(state) {
      if (state.ids) {
        return state.ids.split(" ");
      } else {
        return null;
      }
    },
  },
};

export default gem;
