import { createStore } from "vuex";
import accounts from "./modules/accounts";
import momoMysteryBox from "./modules/momo-mystery-box";

const getStore = () => {
  const store = createStore();
  store.registerModule("accounts", accounts);
  store.registerModule("momoMysteryBox", momoMysteryBox);
  return store;
};

export default getStore;
