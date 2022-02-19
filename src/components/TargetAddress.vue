<template>
  <div>
    <text>Transfer to</text>
    <a-input
      class="input"
      v-model:value="targetAddressInput"
      placeholder="Target Address"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TargetAddress",
  computed: {
    ...mapState("accounts", ["targetAddress"]),
    targetAddressInput: {
      get() {
        return this.targetAddress;
      },
      set(value) {
        this.$store.commit("accounts/updateTargetAddress", value);
      },
    },
  },
};
</script>
<style scoped>
div {
  margin-top: 10px;
}
div text {
  font-size: 20px;
}
.input {
  margin-right: 20px;
  margin-top: 10px;
}
</style>
