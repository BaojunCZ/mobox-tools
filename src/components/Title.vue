<template>
  <div>
    <text class="title">Mobox Tools</text>
    <text @click="connect" v-if="activeAccount === ''">Connect</text>
    <text class="address" v-else>{{ showAddress }}</text>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "TitleView",
  setup() {
    const store = useStore();
    store.dispatch("accounts/connect");
    return {
      connect: () => store.dispatch("accounts/connect"),
      showAddress: computed(() => store.getters["accounts/showAddress"]),
      activeAccount: computed(() => store.getters["accounts/activeAccount"]),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-weight: 700;
}
text {
  font-size: 30px;
}
.address {
  font-size: 20px;
}
</style>
