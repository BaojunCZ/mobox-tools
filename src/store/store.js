import { createStore } from "vuex";
import accounts from "./modules/accounts";
import mMomo from "./modules/m-momo";
import mec from "./modules/mec";
import momoMysteryBox from "./modules/momo-mystery-box";
import rareMomo from "./modules/rare-momo";

const getStore = () => {
  const store = createStore();
  store.registerModule("accounts", accounts);
  store.registerModule("momoMysteryBox", momoMysteryBox);
  store.registerModule("mec", mec);
  store.registerModule("mMomo", mMomo);
  store.registerModule("rareMomo", rareMomo);
  return store;
};

export default getStore;
