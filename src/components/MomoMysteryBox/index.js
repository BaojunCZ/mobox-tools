import { mapActions, mapState } from "vuex";

export default {
  name: "MomoMysteryBox",
  computed: {
    ...mapState("momoMysteryBox", [
      "momoBox",
      "mecBox",
      "modalVisible",
      "modalType",
      "modalInput",
    ]),
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
    modalSizeInput: {
      get() {
        return this.modalInput;
      },
      set(value) {
        this.$store.commit("momoMysteryBox/updateModalInput", value);
      },
    },
  },
  methods: {
    ...mapActions("momoMysteryBox", [
      "balanceOfAll",
      "openModal",
      "closeModal",
    ]),
  },
};
