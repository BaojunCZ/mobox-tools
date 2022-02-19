<template>
  <div>
    <title-view />
    <momo-mystery-box />
    <mec-view />
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
import MecView from "./Mec.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
    MecView,
  },
};
</script>

<style scoped></style>
