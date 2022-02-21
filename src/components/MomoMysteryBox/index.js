import { mapActions, mapState } from "vuex";
import BoxMecModal from "../BoxMecTransferModal.vue";

export default {
  name: "MomoMysteryBox",
  components: {
    BoxMecModal,
  },
  computed: {
    ...mapState("momoMysteryBox", [
      "momoBox",
      "mecBox",
      "modalVisible",
      "modalType",
      "modalInput",
    ]),
    ...mapState("accounts", ["targetAddress"]),
    momoBoxSizeText() {
      if (this.momoBox) {
        return "x" + this.momoBox;
      } else {
        return "x" + "0";
      }
    },
    mecBoxSizeText() {
      if (this.mecBox) {
        return "x" + this.mecBox;
      } else {
        return "x" + "0";
      }
    },
    modalImage() {
      if (this.modalType === 1) {
        return "/images/ic_momo_box.png";
      } else if (this.modalType === 2) {
        return "/images/ic_mec_box.png";
      }
    },
    modalBoxName() {
      if (this.modalType === 1) {
        return "MomoBox";
      } else if (this.modalType === 2) {
        return "MecBox";
      }
    },
    modalBoxSize() {
      if (this.modalType === 1) {
        return this.momoBox;
      } else if (this.modalType === 2) {
        return this.mecBox;
      }
    },
    visible: {
      get() {
        return this.modalVisible;
      },
      set(value) {
        this.$store.commit("momoMysteryBox/updateModalVisible", value);
      },
    },
    amount: {
      get() {
        return this.modalInput;
      },
      set(value) {
        this.$store.commit("momoMysteryBox/updateModalInput", value);
      },
    },
    address: {
      get() {
        return this.targetAddress;
      },
      set(value) {
        this.$store.commit("accounts/updateTargetAddress", value);
      },
    },
  },
  methods: {
    ...mapActions("momoMysteryBox", [
      "balanceOfAll",
      "openModal",
      "closeModal",
      "transfer",
    ]),
  },
};
