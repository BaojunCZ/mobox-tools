<template>
  <div class="content">
    <title-view />
    <target-address />
    <div class="block">
      <m-momo />
      <rare-momo :style="{ marginLeft: '30px' }" />
      <gem-view :style="{ marginLeft: '30px' }" />
    </div>
    <div class="block">
      <momo-mystery-box />
      <mec-view :style="{ marginLeft: '30px' }" />
    </div>
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
import MecView from "./Mec.vue";
import TargetAddress from "./TargetAddress.vue";
import MMomo from "./MMomo.vue";
import RareMomo from "./RareMomo.vue";
import GemView from "./Gem.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
    MecView,
    TargetAddress,
    MMomo,
    RareMomo,
    GemView,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
