import { mapActions, mapState } from "vuex";

export default {
  name: "MomoMysteryBox",
  computed: {
    ...mapState("momoMysteryBox", [
      "momoBox",
      "mecBox",
      "modelVisible",
      "modelType",
      "modelInput",
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
    modelImage() {
      if (this.modelType === 1) {
        return "/images/ic_momo_box.png";
      } else if (this.modelType === 2) {
        return "/images/ic_mec_box.png";
      }
    },
    modelBoxName() {
      if (this.modelType === 1) {
        return "MomoBox";
      } else if (this.modelType === 2) {
        return "MecBox";
      }
    },
    modelBoxSize() {
      if (this.modelType === 1) {
        return this.momoBox;
      } else if (this.modelType === 2) {
        return this.mecBox;
      }
    },
    modelSizeInput: {
      get() {
        return this.modelInput;
      },
      set(value) {
        this.$store.commit("momoMysteryBox/updateModelInput", value);
      },
    },
  },
  methods: {
    ...mapActions("momoMysteryBox", [
      "balanceOfAll",
      "openModel",
      "closeModel",
    ]),
  },
};
