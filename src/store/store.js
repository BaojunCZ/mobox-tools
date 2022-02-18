import { createStore } from "vuex";
import accounts from "./modules/accounts";

const getStore = () => {
  const store = createStore();
  store.registerModule("accounts", accounts);
  return store;
};

export default getStore;
