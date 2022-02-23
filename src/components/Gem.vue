<template>
  <a-card
    title="Gem"
    :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    :style="{ marginTop: '30px', width: '320px' }"
  >
    <div class="content">
      <a-card>
        <div class="card">
          <a-button
            :style="{ marginTop: '10px' }"
            type="primary"
            @click="balanceOfAll"
            >Query</a-button
          >
          <text>{{ gems }}</text>
          <a-input
            :style="{ marginTop: '10px' }"
            v-model:value="inputIds"
            placeholder="IDs"
          />
          <a-button
            :style="{ marginTop: '10px' }"
            type="primary"
            @click="transfer"
            >Transfer</a-button
          >
        </div>
      </a-card>
    </div>
  </a-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GemView",
  computed: {
    ...mapState("gem", ["ids", "gems"]),
    inputIds: {
      get() {
        return this.ids;
      },
      set(value) {
        this.$store.commit("gem/updateIds", value);
      },
    },
  },
  methods: {
    ...mapActions("gem", ["balanceOfAll", "transfer"]),
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: sp;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
}
</style>
