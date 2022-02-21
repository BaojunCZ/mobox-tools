<template>
  <a-card
    title="MOMO M Token"
    :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    :style="{ marginTop: '30px', width: '490px' }"
  >
    <div class="content">
      <a-card>
        <div class="card">
          <a-input
            :style="{ marginTop: '10px' }"
            v-model:value="inputIds"
            placeholder="IDs"
          />
          <a-button :style="{ marginTop: '10px' }" type="primary" @click="query"
            >Query</a-button
          >
          <text :style="{ marginTop: '10px' }">{{ queryResult }}</text>
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
import { mapActions, mapState } from "vuex";
export default {
  name: "MMomo",
  computed: {
    ...mapState("mMomo", ["ids", "queryResult"]),
    inputIds: {
      get() {
        return this.ids;
      },
      set(value) {
        this.$store.commit("mMomo/updateIds", value);
      },
    },
  },
  methods: {
    ...mapActions("mMomo", ["query", "transfer"]),
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
