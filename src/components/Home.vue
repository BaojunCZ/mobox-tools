<template>
  <div>
    <title-view />
    <target-address />
    <m-momo />
    <rare-momo />
    <momo-mystery-box />
    <mec-view />
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
import MecView from "./Mec.vue";
import TargetAddress from "./TargetAddress.vue";
import MMomo from "./MMomo.vue";
import RareMomo from "./RareMomo.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
    MecView,
    TargetAddress,
    MMomo,
    RareMomo,
  },
};
</script>

<style scoped></style>
