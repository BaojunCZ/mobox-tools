import { createStore } from "vuex";
import accounts from "./modules/accounts";
import mec from "./modules/mec";
import momoMysteryBox from "./modules/momo-mystery-box";

const getStore = () => {
  const store = createStore();
  store.registerModule("accounts", accounts);
  store.registerModule("momoMysteryBox", momoMysteryBox);
  store.registerModule("mec", mec);
  return store;
};

export default getStore;
