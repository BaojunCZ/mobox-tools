import { mapActions, mapState } from "vuex";

export default {
  name: "MomoMysteryBox",
  computed: {
    ...mapState("momoMysteryBox", ["momoBox", "mecBox"]),
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
  },
  methods: {
    ...mapActions("momoMysteryBox", ["balanceOfAll"]),
  },
};
