<template>
  <div>
    <title-view />
    <target-address />
    <momo-mystery-box />
    <mec-view />
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
import MecView from "./Mec.vue";
import TargetAddress from "./TargetAddress.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
    MecView,
    TargetAddress,
  },
};
</script>

<style scoped></style>
