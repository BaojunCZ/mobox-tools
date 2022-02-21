import { mMomoManager } from "@/utils/m-momo-manager";

const mMomo = {
  namespaced: true,
  state: () => ({
    ids: "",
    queryResult: {},
  }),
  mutations: {
    updateIds(state, ids) {
      state.ids = ids;
    },
    updateQueryResult(state, result) {
      state.queryResult = result;
    },
  },
  actions: {
    async query({ getters, commit }) {
      try {
        const idList = getters.idList;
        if (idList != null) {
          const res = await mMomoManager.balanceOfIds(idList);
          const result = {};
          idList.forEach((id, index) => {
            result[id] = parseInt(res[0][index].toString());
          });
          commit("updateQueryResult", result);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async transfer({ getters, state, rootState }) {
      try {
        console.log("transfer");
        const idList = getters.idList;
        const queryResult = state.queryResult;
        const ids = [];
        const amounts = [];
        idList.forEach((id) => {
          if (queryResult[id] > 0) {
            ids.push(id);
            amounts.push(queryResult[id]);
          }
        });
        const targetAddress = rootState.accounts.targetAddress;
        console.log(targetAddress, ids, amounts);
        if (
          (targetAddress,
          ids.length > 0 && amounts.length > 0 && ids.length === amounts.length)
        ) {
          await mMomoManager.transferBatch(targetAddress, ids, amounts);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    idList(state) {
      console.log(state.ids);
      if (state.ids) {
        return state.ids.split(",");
      } else {
        return null;
      }
    },
  },
};

export default mMomo;
