<template>
  <div>
    <title-view />
    <momo-mystery-box />
  </div>
</template>

<script>
import TitleView from "./Title.vue";
import MomoMysteryBox from "./MomoMysteryBox/MomoMysteryBox.vue";
export default {
  name: "HomeView",
  components: {
    TitleView,
    MomoMysteryBox,
  },
};
</script>

<style scoped></style>
