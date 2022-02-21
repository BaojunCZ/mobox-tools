<template>
  <div>
    <title-view />
    <target-address />
    <transfer-momo />
    <momo-mystery-box />
    <mec-view />
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
import MecView from "./Mec.vue";
import TargetAddress from "./TargetAddress.vue";
import TransferMomo from "./TransferMomo.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
    MecView,
    TargetAddress,
    TransferMomo,
  },
};
</script>

<style scoped></style>
